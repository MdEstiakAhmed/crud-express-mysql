import axios from "axios";

const AppInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getRequest = async ({ url, headers }) => {
    try {
        const response = await AppInstance.get(url, { headers: { headers } });
        return response;
    }
    catch (error) {
        return { status: false, error: error.message };
    }
}

export const postRequest = async ({ url, data, headers }) => {
    try {
        const response = await AppInstance.post(url, data, { headers: { headers } });
        return response;
    }
    catch (error) {
        return { status: false, error: error.message };
    }
}

export const putRequest = async ({ url, data, headers }) => {
    try {
        const response = await AppInstance.put(url, data, { headers: { headers } });
        return response;
    }
    catch (error) {
        return { status: false, error: error.message };
    }
}

export const deleteRequest = async ({ url, headers }) => {
    try {
        const response = await AppInstance.delete(url, { headers: { headers } });
        return response;
    }
    catch (error) {
        return { status: false, error: error.message };
    }
}