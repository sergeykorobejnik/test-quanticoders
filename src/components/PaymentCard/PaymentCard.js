import React, {useContext} from 'react';
import css from './PaymentCard.module.scss'
import {Field} from "formik";
import {FormContext} from "../MainForm/MainForm";



const PaymentCard = props => {

    const context = useContext(FormContext)
    const errors = context?.errors
    const touched = context?.touched


    return (
        <div className={css.paymentCard}>
            <div className={css.paymentRow}>
                <span>Номер карти</span>
                <Field className={errors?.cardNum1 && touched?.cardNum1 ? css.error : null} name={'cardNum1'}/>
                <Field className={errors?.cardNum2 && touched?.cardNum2 ? css.error : null} name={'cardNum2'}/>
                <Field className={errors?.cardNum3 && touched?.cardNum3 ? css.error : null} name={'cardNum3'}/>
                <Field className={errors?.cardNum4 && touched?.cardNum4 ? css.error : null} name={'cardNum4'}/>
            </div>
            <div className={`${css.paymentRow} ${css.paymentRowCvv}`}>
                <div className={css.col}>
                    <span>Термін дії</span>
                    <Field name={'validity'} type={'date'}/>
                </div>
                <div className={css.col}>
                    <span>CVC/CVV</span>
                    <Field className={errors?.cvv && touched?.cvv ? css.error : null} name={'cvv'} type={'password'}/>
                </div>
            </div>
        </div>
    );
};

export default PaymentCard;