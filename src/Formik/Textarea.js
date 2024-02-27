import { Field, ErrorMessage } from "formik";
import React from "react";
import Form from "react-bootstrap/Form";
import TextError from "./ErrorMessage";

const Textarea = (props) => {
    const { label, name, className, ...rest } = props;
    return (
        <Form.Group className={`common_input ${className || ''}`}>
            {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
            <div className='common_input_inner'>
                <Field
                    {...rest}
                    as='textarea'
                    className='form-control'
                    name={name}
                    id={name}
                />
            </div>
            <ErrorMessage name={name} component={TextError} />
        </Form.Group>
    );
};

export default Textarea;
