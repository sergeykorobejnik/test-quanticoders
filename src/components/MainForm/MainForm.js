import React, {useContext, useEffect, useState} from 'react';
import {Form, Formik, useFormik, Field, ErrorMessage} from "formik";
import css from './MainForm.module.scss'
import * as yup from 'yup'
import 'yup-phone'
import HelpFormSection from "./parts/HelpFormSection/HelpFormSection";
import HelpTypes from "./parts/HelpTypes/HelpTypes";



export const FormContext = React.createContext(null)


const MainForm = props => {


    const validationSchema = yup.object().shape({
        name: yup.string().max(50,true).required(true),
        surname: yup.string().max(50, true).required(true),
        company: yup.string().max(50, true).required(true),
        email: yup.string().email(true).required(true),
        tel: yup.string().phone('' , true, true).required(true),
        legalAddress: yup.string().max(50).required(true),
        bankName: yup.string().max(50).required(true),
        mfi: yup.number().required(true),
        currentAcc: yup.number().required(true),
        country: yup.string().max(50).required(true),
        city: yup.string().max(50).required(true),
        region: yup.string().max(50).required(true),
        address: yup.string().max(50).required(true),
        postCode: yup.number().required(true),
        area: yup.string().max(50).required(true),
        zkpo:  yup.number().required(true),
        ipTax:  yup.string().max(50).required(true),
        itn:  yup.number().required(true),
        taxSys:  yup.string().max(50).required(true),
        accountingTel: yup.string().phone('' , true, true).required(true),
        fax: yup.string().phone('' , true, true).required(true),
        cardNum1: yup.number().max(1e4, true).required(true),
        cardNum2: yup.number().max(1e4, true).required(true),
        cardNum3: yup.number().max(1e4, true).required(true),
        cardNum4: yup.number().max(1e4, true).required(true),
        cvv: yup.number().max(1e3, true).required(true)
    })



    return (
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    company: '',
                    email: '',
                    tel: '',
                    legalAddress: '',
                    bankName: '',
                    mfi: '',
                    currentAcc: '',
                    country: '',
                    city: '',
                    region: '',
                    address: '',
                    postCode: '',
                    zkpo: '',
                    ipTax: '',
                    itn: '',
                    taxSys: '',
                    accountingTel: '',
                    fax: '',
                    cardNum1: '',
                    cardNum2: '',
                    cardNum3: '',
                    cardNum4: '',
                    validity: '',
                    cvv: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                        <Form className={css.form}>
                            <FormContext.Provider value={{errors: errors, touched: touched}}>
                                <HelpFormSection/>
                                <HelpTypes/>
                                <button type="submit" className={css.submit}>Допомогти</button>
                            </FormContext.Provider>
                        </Form>
                )}
            </Formik>
    );
};


export default MainForm;