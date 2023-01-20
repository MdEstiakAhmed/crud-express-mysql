import React from "react";

const InputBox = ({ type, name, id, classes, placeholder, value, setValue }, ref) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            className={classes}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue && setValue(e.target.name, e.target.value)}
            ref={ref}
        />
    )
}

export default React.forwardRef(InputBox);

InputBox.defaultProps = {
    type: "text",
    name: "",
    id: "",
    classes: "",
    placeholder: "",
    value: "",
    setValue: null,
    ref: null
}