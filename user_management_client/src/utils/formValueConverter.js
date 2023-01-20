export const objectToFormData = (object) => {
    try {
        const formData = new FormData();
        for (const property in object) {
            object[property] && formData.append(property, object[property]);
        }
        return formData;
    } catch (error) {
        return { status: false, errors: [error.message] };
    }
}