import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import TextError from "./ErrorMessage";
import { ErrorMessage, Field } from "formik";



const EyeOpen = () => {
    return (
        <><svg xmlns="http://www.w3.org/22366EB/svg" width="20" height="20" viewBox="0 0 14.15 9.88">
            <path id="Контур_1626" data-name="Контур 1626" d="M29840.9,1323.64c0,.11-.1.21-.1.29s.1.18.1.3a11.076,11.076,0,0,0,1,1.33,6.194,6.194,0,0,0,4.4,1.9,6,6,0,0,0,4.4-1.9,5.628,5.628,0,0,0,1-1.33c.1-.12.1-.22.2-.3-.1-.08-.1-.18-.2-.29a5.453,5.453,0,0,0-1-1.34,6,6,0,0,0-4.4-1.9,6.193,6.193,0,0,0-4.4,1.9A10.336,10.336,0,0,0,29840.9,1323.64Zm12.4.57-.6-.28.6.28a.562.562,0,0,0,0-.56l-.6.28.6-.28h0v-.06c0-.04-.1-.09-.1-.16a2.775,2.775,0,0,1-.3-.53,5.7,5.7,0,0,0-1.2-1.58,7.421,7.421,0,0,0-10.8,0,19.221,19.221,0,0,0-1.2,1.58,2.775,2.775,0,0,1-.3.53c0,.07,0,.12-.1.16v.06h0l.7.28-.7-.28a.553.553,0,0,0,0,.56l.7-.28-.7.28h0v.07c.1.03.1.09.1.15a2.774,2.774,0,0,1,.3.53,19.221,19.221,0,0,0,1.2,1.58,7.421,7.421,0,0,0,10.8,0,5.7,5.7,0,0,0,1.2-1.58,2.774,2.774,0,0,1,.3-.53c0-.06.1-.12.1-.15v-.07Zm-7,1.13a1.41,1.41,0,1,1,1.4-1.41A1.387,1.387,0,0,1,29846.3,1325.34Zm-2.8-1.41a2.839,2.839,0,0,1,2.8-2.82,2.82,2.82,0,0,1,0,5.64A2.839,2.839,0,0,1,29843.5,1323.93Z" transform="translate(-29839.225 -1318.99)" fill="#000" opacity="0.6" fillRule="evenodd" />
        </svg>
        </>
    )
}
const EyeClose = () => {
    return (
        <><svg xmlns="http://www.w3.org/22366EB/svg" width="19.201" height="15.361" viewBox="0 0 19.201 15.361">
            <path id="Icon_awesome-eye-slash" data-name="Icon awesome-eye-slash" d="M9.6,12A4.3,4.3,0,0,1,5.313,8.007L2.166,5.575a10,10,0,0,0-1.1,1.668.971.971,0,0,0,0,.876A9.623,9.623,0,0,0,9.6,13.441a9.319,9.319,0,0,0,2.337-.314l-1.557-1.2A4.324,4.324,0,0,1,9.6,12Zm9.415,1.743L15.7,11.18a9.938,9.938,0,0,0,2.438-3.062.971.971,0,0,0,0-.876A9.623,9.623,0,0,0,9.6,1.92a9.245,9.245,0,0,0-4.42,1.131L1.364.1A.48.48,0,0,0,.69.185L.1.943a.48.48,0,0,0,.084.674L17.837,15.26a.48.48,0,0,0,.674-.084l.589-.758a.48.48,0,0,0-.085-.674ZM13.5,9.483l-1.179-.911A2.843,2.843,0,0,0,8.841,4.914a1.43,1.43,0,0,1,.279.846,1.4,1.4,0,0,1-.046.3L6.866,4.353A4.27,4.27,0,0,1,9.6,3.36a4.318,4.318,0,0,1,4.32,4.32,4.218,4.218,0,0,1-.417,1.8Z" transform="translate(0 0)" fill="#000" opacity="0.6" />
        </svg>
        </>
    )
}


const Password = (props) => {
    const { label, className, name, leftIcon, ...rest } = props;
    const [active, setActive] = useState(false);
    return (
        <Form.Group
            className={`common_input ${className || ''}`}
        >
            {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
            <div className={`common_input_inner ${leftIcon ? 'leftIconInput' : ''} rightIconInput`}>
                {leftIcon && <span className="leftIcon">{leftIcon}</span>}
                <Field
                    {...rest}
                    className='form-control'
                    name={name}
                    id={name}
                    type={active ? "text" : "password"}
                />
                <span onClick={() => setActive(!active)} className="rightIcon cursor-pointer">{active ? <EyeOpen /> : <EyeClose />}</span>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </Form.Group>
    );
};

export default Password;
