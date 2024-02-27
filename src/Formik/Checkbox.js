import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { Form } from 'react-bootstrap'
import TextError from './ErrorMessage'

const Checkbox = ({ className, label, options, name, ...rest }) => {
    return (
        <>
            <Form.Group className={`common_input ${className || ''}`}>
                {label && <Form.Label>{label}</Form.Label>}
                <Field name={name} {...rest}>
                    {
                        ({ field }) => { // field => name, onBlur , onChange and value
                            return options.map(option => (
                                <React.Fragment key={option.key}>
                                    <Form.Check
                                        {...field}
                                        label={option.key}
                                        type='checkbox'
                                        id={option.value}
                                        value={option.value}
                                        checked={Boolean(field.value.includes(option.value))}
                                    />
                                </React.Fragment>
                            ))
                        }
                    }
                </Field>
                <ErrorMessage name={name} component={TextError} />
            </Form.Group>
        </>
    )
}

export default Checkbox
