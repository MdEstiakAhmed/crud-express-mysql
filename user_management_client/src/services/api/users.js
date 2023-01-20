import { objectToFormData } from "../../utils/formValueConverter";
import { deleteRequest, getRequest, postRequest, putRequest } from "../../utils/request";

export const fetchUsers = async ({ }) => {
    try {
        const response = await getRequest({ url: "/users" });
        return response.data
    }
    catch (error) {
        return { status: false, errors: [error.message] }
    }
}

export const fetchUser = async ({ id }) => {
    try {
        const response = await getRequest({ url: `/users/${id}` });
        return response.data
    }
    catch (error) {
        return { status: false, errors: [error.message] }
    }
}

export const createUser = async ({ user }) => {
    try {
        const formData = objectToFormData(user);
        let response = await postRequest({ url: "/users", data: formData });
        return response.data
    }
    catch (error) {
        return { status: false, errors: [error.message] }
    }
}

export const updateUser = async ({ id, user }) => {
    try {
        const formData = objectToFormData(user);
        let response = await putRequest({ url: `/users/${id}`, data: formData });
        return response.data
    }
    catch (error) {
        return { status: false, errors: [error.message] }
    }
}

export const deleteUser = async({ id }) => {
    try {
        let response = await deleteRequest({ url: `/users/${id}` });
        return response.data
    }
    catch (error) {
        return { status: false, errors: [error.message] }
    }
}