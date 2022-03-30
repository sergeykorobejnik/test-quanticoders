import React, {useContext} from 'react';
import {ErrorMessage, Field} from "formik";
import css from './FormInput.module.scss'
import {FormContext} from "../MainForm/MainForm";




const FormInput = props => {
    const context = useContext(FormContext)
    const errors = context?.errors
    const touched = context?.touched
    return (
        <div className={css.formInput}>
            <label htmlFor={props.name}>{props.labelname}</label>
            <Field className={errors?.[props.name] && touched?.[props.name] ? css.error : null} name={props.name} {...props} />
        </div>
    );
};

export default FormInput;