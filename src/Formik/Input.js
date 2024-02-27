import { Field, ErrorMessage } from "formik";
import React from "react";
import Form from "react-bootstrap/Form";
import TextError from "./ErrorMessage";

const Input = (props) => {
    const { label, name, className, leftIcon, rightIcon, ...rest } = props;
    return (
        <Form.Group className={`common_input ${className || ''}`}>
            {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
            <div className={`common_input_inner ${leftIcon ? 'leftIconInput' : ''} ${rightIcon ? 'rightIconInput' : ""}`}>
                {leftIcon && <span className='leftIcon'>{leftIcon}</span>}
                <Field
                    {...rest}
                    className='form-control'
                    name={name}
                    id={name}
                />
                {rightIcon && <span className='rightIcon'>{rightIcon}</span>}
            </div>
            <ErrorMessage name={name} component={TextError} />
        </Form.Group>
    );
};

export default Input;
