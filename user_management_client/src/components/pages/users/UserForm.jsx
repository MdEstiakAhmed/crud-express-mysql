import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { createUser, fetchUser, updateUser } from "../../../services/api/users";
import { isConfirmPasswordValid, isEmailValid, isPasswordValid, isUsernameValid } from "../../../services/validation/inputValidation";
import { showAlertPopup } from "../../../utils/alert";
import InputBox from "../../form/InputBox";

const UserForm = ({ type, data, handleModal }) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const { data: userData, isLoading, isError, error, fetchData } = useFetch(fetchUser, { id: data?.id }, [data], {}, data?.id ? false : true);

    useEffect(() => {
        
        if(userData?.id) {
            setValues(userData)
        }
    }, [userData]);

    // error state reset on input change
    useEffect(() => {
        handleSetErrors("email", [])
    }, [values.email]);
    useEffect(() => {
        handleSetErrors("name", [])
    }, [values.name]);
    useEffect(() => {
        handleSetErrors("username", [])
    }, [values.username]);
    useEffect(() => {
        handleSetErrors("password", [])
    }, [values.password]);
    useEffect(() => {
        handleSetErrors("confirmPassword", [])
    }, [values.confirmPassword]);
    useEffect(() => {
        handleSetErrors("common", [])
    }, [values]);

    // handle input and error change
    const handleSetValues = (name, value) => {
        setValues(prev => ({ ...prev, [name]: value }));
    }
    const handleSetErrors = (name, value) => {
        setErrors(prev => ({ ...prev, [name]: value }));
    }

    // handle login submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, username, email, password, confirmPassword } = values;
        console.log(values);

        // name validate and show error
        if (!name) { handleSetErrors("name", ["name required"]); return; }

        // username validate and show error
        let usernameRes = isUsernameValid(username);
        if (!usernameRes.status) { handleSetErrors("username", usernameRes.errors); return; }

        // email validate and show error
        let emailRes = isEmailValid(email);
        if (!emailRes.status) { handleSetErrors("email", emailRes.errors); return; }

        if(password){
            // password validate and show error
            let passwordRes = isPasswordValid(password);
            if (!passwordRes.status) { handleSetErrors("password", passwordRes.errors); return; }
    
            // confirm password validate and show error
            let confirmPasswordRes = isConfirmPasswordValid(password, confirmPassword);
            if (!confirmPasswordRes.status) { handleSetErrors("confirmPassword", confirmPasswordRes.errors); return; }
        }



        // call api function
        let response;
        if(type === "add") {
            response = await createUser({ user: values });
        }
        else if(type === "edit") {
            response = await updateUser({ user: values, id: userData.id });
        }

        console.log(response);

        if (!response.status) {
            handleSetErrors("common", response.errors);
            return;
        }

        // 0: type, 1: data, 2: refetch
        showAlertPopup("success", response.message);
        handleModal(null, null, true)
    }
    return (
        <>
            <div>
                <div>
                    <form className="flex flex-column gap-10" onSubmit={handleSubmit}>
                        {
                            formFields(type).map(field => (
                                <div className="flex flex-column gap-3" key={field.name}>
                                    <div>
                                        {
                                            field.type === "submit" ? (
                                                <button className="success" type={field.type}>{field.value}</button>
                                            ) : (
                                                <InputBox
                                                    type={field.type}
                                                    name={field.name}
                                                    placeholder={field.placeholder}
                                                    value={values[field.name] || ""}
                                                    setValue={handleSetValues}
                                                />
                                            )
                                        }
                                    </div>
                                    <div>
                                        <div className="flex flex-column gap-3">
                                            {
                                                errors[field.errorName] ? (
                                                    errors[field.errorName].map((error, index) => (
                                                        <span key={index} className="error">{error}</span>
                                                    ))
                                                ) : ""
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </form>
                </div>
            </div>
        </>
    )
}
export default UserForm;

const formFields = (type) => {
    let fields = [
        {
            type: "text",
            name: "name",
            placeholder: "full name",
            errorName: "name"
        },
        {
            type: "text",
            name: "username",
            placeholder: "username",
            errorName: "username"
        },
        {
            type: "email",
            name: "email",
            placeholder: "email",
            errorName: "email"
        },
        // {
        //     type: "file",
        //     name: "avatar",
        //     placeholder: "avatar",
        //     errorName: "avatar"
        // },
        {
            type: "password",
            name: "password",
            placeholder: "password",
            errorName: "password"
        },
        {
            type: "password",
            name: "confirmPassword",
            placeholder: "confirm password",
            errorName: "confirmPassword",
        },
        {
            type: "submit",
            name: "submit",
            value: type === "edit" ? "Update" : "Create",
            errorName: "common"
        }
    ]
    return fields
}