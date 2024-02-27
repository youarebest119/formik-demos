import React from 'react';
import Checkbox from './Checkbox';
import Date from './Date';
import Input from './Input';
import Password from './Password';
import Radio from './Radio';
import Select from './Select';
import './style.scss';
import Textarea from './Textarea';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        case 'password':
            return <Password {...rest} />;
        case 'textarea':
            return <Textarea {...rest} />;
        case 'select':
            return <Select {...rest} />;
        case 'radio':
            return <Radio {...rest} />;
        case 'checkbox':
            return <Checkbox {...rest} />;
        case 'date':
            return <Date {...rest} />;
        default:
            return null;
    }
}

export default FormikControl
