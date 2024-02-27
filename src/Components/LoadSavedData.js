import { Form, Formik, FieldArray } from 'formik';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import CommonBtn from './FormElements/CommonBtn';
import Input from './FormElements/Input';
import Password from './FormElements/Password';

const LoadSavedData = () => {

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid Email Address").required("Required"),
    })

    const initialValues = {
        firstName: "",
        email: "",
    };

    const savedData = {
        firstName: "lovepreet",
        email: "love@yopmail.com",
    }

    const [formValues, setFormvalues] = useState(null);

    const onSubmit = (values, onSubmittingProps) => {
        console.log(values);
        onSubmittingProps.resetForm();
    }
    return (
        <Container>
            <Row className='justify-content-center py-5 mt-5'>
                <Col lg={5}>
                    <h2>Load saved data</h2>
                    <Formik
                        initialValues={formValues || initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                        enableReinitialize
                    >
                        {
                            formik => {
                                return (
                                    <Form>
                                        <Input
                                            label="First Name"
                                            name="firstName"
                                            placeholder="Lovepreet"
                                            className='mb-3'
                                        />
                                        <Input
                                            label="Email"
                                            name="email"
                                            placeholder="lovepreet.singh@antiersolutions.com"
                                            className='mb-3'
                                        />
                                        <div className="d-flex align-items-center">
                                            <CommonBtn
                                                onClick={() => setFormvalues(savedData)}
                                                type='button'
                                                text="Load saved Data"
                                                fluid
                                                className='me-2'
                                            />
                                            <CommonBtn
                                                type='reset'
                                                text="Reset Form"
                                                fluid
                                                className='me-2'
                                            />
                                            <CommonBtn
                                                type="submit"
                                                text="Submit"
                                                fluid
                                            />
                                        </div>
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

export default LoadSavedData
