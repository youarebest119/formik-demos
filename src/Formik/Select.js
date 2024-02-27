import { ErrorMessage } from 'formik'
import React from 'react'
import { Form } from 'react-bootstrap'
import ReactSelect from 'react-select'
import TextError from "./ErrorMessage";


const Select = ({ options, label, name, className, value, formik, error, defaultValue, ...rest }) => {
    return (
        <div className={`common_input ${className || ''}`}>
            {label && <Form.Label>{label}</Form.Label>}
            <ReactSelect
                {...rest}
                options={options}
                defaultValue={defaultValue}
                value={value}
                onChange={(selectedOption) =>
                    formik.setFieldValue(name, selectedOption.value)
                }
                name={name}
            />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select
