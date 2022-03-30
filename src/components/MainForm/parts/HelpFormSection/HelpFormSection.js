import React from 'react';
import css from "./HelpFormSection.module.scss";
import SwitchOrg from "../../../SwitchOrg/SwitchOrg";
import FormInput from "../../../FormInput/FormInput";

const HelpFormSection = props => {
    return (
        <>
            <h1 className={css.h1}>Заповніть форму</h1>
            <SwitchOrg switchClass={css.switch} defClass={css.switchBtn} activeClass={css.switchBtnActive}/>
            <div className={css.fromContent}>
                <div className={css.col}>
                    <div className={css.doubledInput}>
                        <FormInput name={'name'} labelname={"Ім'я"}/>
                        <FormInput name={'surname'} labelname={'Фамілія'}/>
                    </div>
                    <FormInput name={'company'} labelname={'Назва компанії, організації'}/>
                    <FormInput name={'email'} labelname={'Email-адрес'}/>
                    <FormInput name={'tel'} labelname={'Номер телефону'}/>
                    <div className={css.bankInfo}>
                        <FormInput name={'legalAddress'} labelname={'Юридична адреса'}/>
                        <div className={css.doubledInput}>
                            <FormInput name={'bankName'} labelname={'Найменування банку '}/>
                            <FormInput name={'mfi'} labelname={'МФО банку'}/>
                        </div>
                        <FormInput name={'currentAcc'} labelname={'Розрахунковий рахунок'}/>
                    </div>
                </div>
                <div className={css.col}>
                    <FormInput name={'country'} labelname={'Країна'}/>
                    <div className={css.doubledInput}>
                        <FormInput name={'city'} labelname={"Місто"}/>
                        <FormInput name={'region'} labelname={'Штат, район'}/>
                    </div>
                    <FormInput name={'address'} labelname={'Адреса'}/>
                    <FormInput name={'postCode'} labelname={'Поштовий індекс'}/>
                    <div className={css.doubledInput}>
                        <FormInput name={'zkpo'} labelname={"ЗКПО"}/>
                        <FormInput name={'ipTax'} labelname={'Тип оподаткування'}/>
                    </div>
                    <div className={css.doubledInput}>
                        <FormInput name={'itn'} labelname={"ІНН"}/>
                        <FormInput name={'taxSys'} labelname={'Система оподаткування'}/>
                    </div>
                    <div className={css.doubledInput}>
                        <FormInput name={'accountingTel'} labelname={"Телефон бугалтерії"}/>
                        <FormInput name={'fax'} labelname={'Факс'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HelpFormSection;