import { Form, Formik } from 'formik'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import FormikControl from './FormikControl'
import * as Yup from 'yup';

const FormContainer = () => {


    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
        message: Yup.string().required("Required"),
        theme: Yup.string().required("Required"),
        radioOption: Yup.string().required("Required"),
        checkboxOption: Yup.array().min(1, 'Required')
    });

    const initialValues = {
        name: "",
        password: "",
        message: "",
        theme: '',
        radioOption: '',
        checkboxOption: [],
    }
    const handleSubmit = values => {
        console.log(values)
    }
    const themeOptions = [
        { value: 'light', label: "Light" },
        { value: 'dark', label: "Dark" },
    ];

    const radioOptions = [
        { key: 'Option 1', value: 'r1' },
        { key: 'Option 2', value: 'r2' },
        { key: 'Option 3', value: 'r3' },
    ]
    const checkboxOptions = [
        { key: 'Option 1', value: 'c1' },
        { key: 'Option 2', value: 'c2' },
        { key: 'Option 3', value: 'c3' },
    ]
    return (
        <Container>
            <Row className='justify-content-center py-5 my-5'>
                <Col xs={6}>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {
                            formik => {
                                console.log(formik.errors)
                                return (
                                    <Form>
                                        <FormikControl
                                            control="input"
                                            name="name"
                                            placeholder="Enter your name"
                                            label="Name"
                                        />
                                        <FormikControl
                                            control="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            label="Password"
                                        />
                                        <FormikControl
                                            control="textarea"
                                            name="message"
                                            placeholder="Enter your message"
                                            label="Message"
                                        />
                                        <FormikControl
                                            control="select"
                                            name="theme"
                                            label="Choose Theme"
                                            formik={formik}
                                            options={themeOptions}
                                        />
                                        <FormikControl
                                            control="radio"
                                            name="radioOption"
                                            label="Radio Options"
                                            options={radioOptions}
                                        />
                                        <FormikControl
                                            control="checkbox"
                                            name="checkboxOption"
                                            label="Checkbox Options"
                                            options={checkboxOptions}
                                        />
                                        <Button className='mt-3' type='submit'>Submit</Button>
                                    </Form>
                                )
                            }
                        }

                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
