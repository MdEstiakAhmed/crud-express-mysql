export const objectToFormData = (object) => {
    const formData = new FormData();
    for (const property in object) {
        object[property] && formData.append(property, object[property]);
    }
    return formData;
}