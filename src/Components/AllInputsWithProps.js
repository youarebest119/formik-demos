import { Form, Formik, FieldArray } from 'formik';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import CommonBtn from './FormElements/CommonBtn';
import Input from './FormElements/Input';
import Password from './FormElements/Password';

const AllInputWithProps = () => {

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
        fieldLevelValidation: '',
    };
    const onSubmit = (values, onSubmitProps) => {
        // console.log(onSubmitProps) // 
        onSubmitProps.setSubmitting(false)
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
                    <h2>Formik with Props</h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                        // validateOnChange={false} // will not validate on change function
                        validateOnMount // for validating on mouting this page so we can disable button according to isValid property of formik
                    >
                        {
                            formik => {
                                // console.log(formik) // has values,errors,touched
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
                                        <div className='d-flex flex-column gap-2'>
                                            <CommonBtn
                                                type="button"
                                                text="validate field level validation without submitting"
                                                onClick={() => {
                                                    formik.validateField('fieldLevelValidation') // add error to formik.errors object
                                                    formik.setFieldTouched('fieldLevelValidation') // add touched true to formik.touched to given field
                                                }}
                                            />
                                            <CommonBtn
                                                type="button"
                                                text="validate all without submitting"
                                                onClick={() => {
                                                    formik.validateForm();
                                                    formik.setTouched({
                                                        firstName: true,
                                                        email: true,
                                                    }) // add touched true to formik.touched to given field
                                                }}
                                            />
                                            <CommonBtn
                                                type="submit"
                                                text="Submit"
                                                disabled={
                                                    !(
                                                        // formik.dirty // true when something has changed from initialValue // use only if there is no initial value having some value
                                                        // &&
                                                        formik.isValid// for validation 
                                                    ) || formik.isSubmitting // set to false when there will be errors or if no errors are there we have to set it manually
                                                }
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

export default AllInputWithProps
