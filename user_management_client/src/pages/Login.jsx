import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/form/InputBox";
import useGetContext from "../hooks/useGetContext";
import { login } from "../services/api/auth";
import { authChecker } from "../services/authentication/authChecker";
import { isEmailValid, isPasswordValid } from "../services/validation/inputValidation";

const Login = () => {
    const { userAction, authAction } = useGetContext();
    const navigate = useNavigate();
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    // check auth and redirect to users page
    // useEffect(() => {
    //     const isAuthenticated = authChecker();
    //     if(isAuthenticated) {
    //         navigate("/users");
    //     }
    // }, []);

    // error state reset on input change
    useEffect(() => {
        handleSetErrors("email", [])
    }, [values.email]);
    useEffect(() => {
        handleSetErrors("password", [])
    }, [values.password]);
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
        const { password, email } = values;

        // email validate and show error
        let emailRes = isEmailValid(email);
        if (!emailRes.status) { handleSetErrors("email", emailRes.errors); return; }

        // password validate and show error
        let passwordRes = isPasswordValid(password);
        if (!passwordRes.status) { handleSetErrors("password", passwordRes.errors); return; }

        // call api function
        let response = await login({ data: values });

        if (!response.status) {
            handleSetErrors("common", response.errors);
            return;
        }

        // set user data in context and redirect to users page
        authAction.setAuth();
        userAction.setUser(response.data)
        navigate("/users");
    }
    return (
        <>
            <div>
                <div>
                    <form className="flex flex-column gap-10" onSubmit={handleSubmit}>
                        {
                            formFields.map(field => (
                                <div className="flex flex-column gap-3" key={field.name}>
                                    <div>
                                        {
                                            field.type === "submit" ? (
                                                <button type={field.type}>{field.value}</button>
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
                                                    errors[field.errorName].map(error => (
                                                        <span className="error">{error}</span>
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
export default Login;

const formFields = [
    {
        type: "email",
        name: "email",
        placeholder: "email",
        errorName: "email"

    },
    {
        type: "password",
        name: "password",
        placeholder: "password",
        errorName: "password"
    },
    {
        type: "submit",
        name: "submit",
        value: "login",
        errorName: "common"
    }
]