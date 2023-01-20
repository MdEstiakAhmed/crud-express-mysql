import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal/Modal";
import UserForm from "../components/pages/users/UserForm";
import DataTable from "../components/table/DataTable"
import { useFetch } from "../hooks/useFetch";
import useGetContext from "../hooks/useGetContext";
import { deleteUser, fetchUsers } from "../services/api/users";
import { authChecker } from "../services/authentication/authChecker";
import { showAlertPopup } from "../utils/alert";

const Users = () => {
    const {userAction, authAction} = useGetContext();
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isReload, setIsReload] = useState(false);

    const { data, isLoading, isError, error } = useFetch(fetchUsers, {}, [isReload]);

    // create table rows from response
    const handleCreateTableRows = () => {
        return data.map(user => {
            return [
                user.id,
                user.name,
                user.email,
                user.phone,
                <div><EditButton data={user} onClick={handleModal} /><DeleteButton data={user} onClick={handleModal} /></div>
            ]
        })
    }

    // handle modal open and close
    const handleModal = (type, data, refetch) => {
        setSelectedUser(data);
        refetch && setIsReload(prev => !prev);
        setModal(type);
    }

    // handle user delete
    const handleDelete = async(id) => {
        let response = await deleteUser({id});    
        if(response.status) {
            handleModal(null, null, true);
            showAlertPopup("success", response.message);
        }
    }

    // handle logout
    const handleLogout = () => {
        authAction.unsetAuth();
        userAction.unsetUser()
        navigate("/login");
    }
    return (
        <>
            {
                (modal === "add" || modal === "edit") ? (
                    <Modal
                        title={modal === "add" ? "add user" : modal === "edit" ? "edit user" : ""}
                        onClose={handleModal}
                    >
                        <UserForm
                            type={modal}
                            data={selectedUser}
                            handleModal={handleModal}
                        />
                    </Modal>
                ) : ""
            }
            {
                modal === "delete" ? (
                    <Modal
                        title="delete user"
                        onClose={handleModal}
                    >
                        <div>Are you sure you want to delete this user?</div>
                        <button onClick={() =>{handleDelete(selectedUser.id)}}>Yes</button>
                        <button onClick={() => handleModal(null, null)}>No</button>
                    </Modal>
                ) : ""
            }
            <button onClick={() => handleModal("add")}>Add</button>
            <button onClick={() => handleLogout()}>Logout</button>
            {
                isLoading ? (
                    <div>Loading...</div>
                ) : (
                    isError ? (
                        <div>{error}</div>
                    ) :
                        (
                            (data && data.length) ? (
                                <DataTable
                                    columns={["ID", "Name", "Email", "Phone", "Action"]}
                                    rows={handleCreateTableRows()}
                                />
                            ) : "No data found"
                        )
                )
            }
        </>
    )
}
export default Users;

const EditButton = ({ onClick, data }) => {
    return (
        <button onClick={() => onClick("edit", data)}>Edit</button>
    )
}
const DeleteButton = ({ onClick, data }) => {
    return (
        <button onClick={() => onClick("delete", data)}>delete</button>
    )
}