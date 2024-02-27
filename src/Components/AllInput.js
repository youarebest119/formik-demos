import { Form, Formik, FieldArray, Field } from 'formik';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import CommonBtn from './FormElements/CommonBtn';
import Input from './FormElements/Input';
import Password from './FormElements/Password';

const AllInput = () => {

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid Email Address").required("Required"),
        password: Yup.string().required("Required"),
    })

    const initialValues = {
        firstName: "",
        email: "",
        password: "",
        social: {
            facebook: '',
            instagram: '',
            twitter: '',
        },
        phoneNumbers: ['', ''],
        otherNumbers: [''],
    };
    const onSubmit = values => {
        console.log(values);
    }

    const fieldLevelValidation = value => {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }
    return (
        <Container>
            <Row className='justify-content-center py-5 mt-5'>
                <Col lg={5}>
                    <h2>Formik</h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                        validateOnChange={false} // will not validate on change function
                    >
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
                            <Password
                                name="password"
                                label="Password"
                                placeholder="・・・・・・・・・・・"
                                className='mb-3'
                            />
                            <div className="mb-3">
                                <h3>Social</h3>
                                <div className="d-flex gap-2">
                                    <Input
                                        label="Facebook"
                                        name="social.facebook"
                                        placeholder="facebook.com"
                                    />
                                    <Input
                                        label="Instagram"
                                        name="social.instagram"
                                        placeholder="instagram.com"
                                    />
                                    <Input
                                        label="twitter"
                                        name="social.twitter"
                                        placeholder="twitter.com"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <h6>Phone Numbers</h6>
                                <div className="d-flex gap-2">
                                    <Input
                                        label="Primary"
                                        name="phoneNumbers[0]"
                                        placeholder="+91 98498-55320"
                                    />
                                    <Input
                                        label="Secondary"
                                        name="phoneNumbers[1]"
                                        placeholder="+91 98448-55320"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <h6>Other Phone Numbers</h6>
                                <div className="d-flex gap-2">
                                    <FieldArray name="otherNumbers">
                                        {
                                            fieldArrayProps => {
                                                const { push, remove, form } = fieldArrayProps;
                                                console.log(form.errors)
                                                return (
                                                    <div>
                                                        {
                                                            form.values.otherNumbers.map((number, index, array) => {
                                                                return (
                                                                    <div key={index} className='d-flex align-items-center gap-2 mb-3'>
                                                                        <Input name={`otherNumbers[${index}]`} />
                                                                        {
                                                                            index > 0
                                                                            &&
                                                                            <CommonBtn type="button" onClick={() => remove(index)} text="-" />
                                                                        }
                                                                        {index + 1 === array.length && <CommonBtn type="button" onClick={() => push('')} text="+" />}
                                                                    </div>
                                                                )
                                                            }
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                        }
                                    </FieldArray>
                                </div>
                            </div>
                            <Input
                                label="Field level Validation"
                                name="fieldLevelValidation"
                                placeholder="field Level Validation"
                                className='mb-3'
                                validate={fieldLevelValidation}
                            />
                            <CommonBtn
                                type="submit"
                                text="Submit"
                            />
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default AllInput
