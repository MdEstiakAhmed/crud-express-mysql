import axios from "axios";
import { accessRevoked } from "../services/authentication/accessRevoked";

const AppInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

const getToken = async () => {
    let data = await localStorage.getItem(process.env.REACT_APP_USER_LOCAL_STORAGE_KEY);
    if(!data) return null;
    let token = JSON.parse(data || {}).token;
    return token;
}


export const getRequest = async ({ url, headers={} }) => {
    try {
        const response = await AppInstance.get(url, { headers: { ...headers, token: await getToken() } });
        accessRevoked(response);
        return response;
    }
    catch (error) {
        return { status: false, errors: [error.message] };
    }
}

export const postRequest = async ({ url, data, headers={} }) => {
    try {
        console.log(url, data, headers);
        const response = await AppInstance.post(url, data, { headers: { ...headers, token: await getToken() } });
        console.log(response);
        return response;
    }
    catch (error) {
        return { status: false, errors: [error.message] };
    }
}

export const putRequest = async ({ url, data, headers={} }) => {
    try {
        const response = await AppInstance.put(url, data, { headers: { ...headers, token: await getToken() } });
        return response;
    }
    catch (error) {
        return { status: false, errors: [error.message] };
    }
}

export const deleteRequest = async ({ url, headers={} }) => {
    try {
        const response = await AppInstance.delete(url, { headers: { ...headers, token: await getToken() } });
        return response;
    }
    catch (error) {
        return { status: false, errors: [error.message] };
    }
}