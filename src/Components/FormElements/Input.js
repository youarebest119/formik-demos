import { Field, ErrorMessage } from "formik";
import React from "react";
import Form from "react-bootstrap/Form";
import TextError from "./TextErrror";
import './formElements.scss'

const Input = (props) => {
    const { label, name, className, leftIcon, validate, rightIcon, leftIconClick, rightIconClick, placeholder } = props;
    return (
        <Form.Group
            className={`common_input ${className}`}
        >
            {
                label &&
                <Form.Label htmlFor={name}>
                    {label}
                </Form.Label>
            }
            <div
                className={`common_input_inner ${leftIcon ? 'leftIconInput' : ''} ${rightIcon ? 'rightIconInput' : ""}`}
            >
                {
                    leftIcon &&
                    <span
                        className={`${leftIconClick ? 'cursor-pointer' : ''} leftIcon`}
                        onClick={leftIconClick}
                    >{leftIcon}</span>
                }
                <Field
                    className='form-control'
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    validate={validate}
                />
                {
                    rightIcon &&
                    <span
                        className={`${rightIconClick ? 'cursor-pointer' : ''} rightIcon`}
                        onClick={rightIconClick}
                    >{rightIcon}</span>
                }
            </div>
            <ErrorMessage name={name} component={TextError} />
        </Form.Group>
    );
};

export default Input;
