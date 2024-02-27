import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import TextError from "./TextErrror";
import { EyeClose, EyeOpen } from "../../assets/icons/svgicon";
import { ErrorMessage, Field } from "formik";

const Password = (props) => {
    const { label, className, placeholder, name, validate, leftIcon } = props;
    const [active, setActive] = useState(false);
    return (
        <Form.Group
            className={`common_input ${className}`}
        >
            {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
            <div className={`common_input_inner ${leftIcon ? 'leftIconInput' : ''} rightIconInput`}>
                {
                    leftIcon && <span className="leftIcon">{leftIcon}</span>
                }
                <Field
                    type={active ? "text" : "password"}
                    className='form-control'
                    name={name}
                    id={name}
                    validate={validate}
                    placeholder={placeholder}
                />
                <span onClick={() => setActive(!active)} className="rightIcon cursor-pointer">{active ? <EyeOpen /> : <EyeClose />}</span>
            </div>
            <ErrorMessage name={name}>
                {
                    msg => (
                        <TextError>{msg}</TextError>
                    )
                }
            </ErrorMessage>
        </Form.Group>
    );
};

export default Password;
