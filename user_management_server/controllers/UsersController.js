const { getUsers, getUser, deleteUser, updateUser, createUser } = require("../services/UserService");
const { passwordEncrypt } = require("../utils/passwordHash");

const GetUsers = async (req, res) => {
    try {
        const response = await getUsers();
        return res.send({ status: true, message: "Welcome to the get users API", data: response });
    }
    catch (error) {
        console.log(__dirname, __filename);
        // console.log(error);
        return res.send({ status: false, message: error.message, errors: [error.message] })
    }
}

const GetUser = async (req, res) => {
    try {
        let {userId} =req.params;
        const response = await getUser(userId);
        return res.send({ status: true, data: response[0] });
    }
    catch (error) {
        return res.send({ status: false, message: error.message, errors: [error.message] })
    }
}

const CreateUser = async (req, res) => {
    try {
        let data = {...req.fields};
        let hashedPassword = await passwordEncrypt(data.password)
        data.password = hashedPassword;
        const response = await createUser(data);
        return res.send({ status: true, message: "Successfully create", data: response });
    }
    catch (error) {
        return res.send({ status: false, message: error.message, errors: [error.message] })
    }
}

const UpdateUser = async (req, res) => {
    try {
        let {password} = req.fields;
        if(password){
            let hashedPassword = await passwordEncrypt(password)
            req.fields.password = hashedPassword;
        }
        console.log(req.fields);
        const response = await updateUser(req.fields, req.params.userId);
        console.log(response);
        return res.send({ status: true, message: "successfully updated", data: response });
    }
    catch (error) {
        return res.send({ status: false, message: error.message, errors: [error.message] })
    }
}

const DeleteUser = async (req, res) => {
    try {
        const response = await deleteUser(req.params.userId);
        console.log(response);
        return res.send({ status: true, message: "successfully deleted" });
    }
    catch (error) {
        return res.send({ status: false, message: error.message, errors: [error.message] })
    }
}

module.exports = {
    GetUsers,
    GetUser,
    CreateUser,
    UpdateUser,
    DeleteUser
}