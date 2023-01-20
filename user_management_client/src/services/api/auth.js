import { objectToFormData } from "../../utils/formValueConverter";
import { postRequest } from "../../utils/request";


export const login = async({data}) => {
    try {
        const formData = objectToFormData(data);
        let response = await postRequest({url: "/auth/login", data: formData});
        return response.data
    }
    catch (error) {
        return {status: false, errors: [error.message]}
    }
}
