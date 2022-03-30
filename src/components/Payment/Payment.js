import React from 'react';
import css from "./Payment.module.scss";
import PaymentItem from "../PaymentItem/PaymentItem";

//payment img
import bank from './assets/bank.svg'
import paypal from './assets/paypal.svg'
import privatLogo from './assets/privatLogo.svg'
import terminal from './assets/terminal.svg'
import visa from './assets/visa.svg'
import webmoney from './assets/bank.svg'



const Payment = props => {
    return (
            <div className={css.paySystems}>
                <PaymentItem
                    defClass={css.payItem}
                    id={'visa'}
                    name={'Payment'}
                    src={visa}
                    alt={'visa'}
                    descr={'Payment'}
                />
                <PaymentItem
                    defClass={css.payItem}
                    id={'privat'}
                    name={'Payment'}
                    src={privatLogo}
                    alt={'visa'}
                    descr={'Payment'}
                />
                <PaymentItem
                    defClass={css.payItem}
                    id={'terminal'}
                    name={'Payment'}
                    src={terminal}
                    alt={'visa'}
                    descr={'Payment'}
                />
                <PaymentItem
                    defClass={css.payItem}
                    id={'webmoney'}
                    name={'Payment'}
                    src={webmoney}
                    alt={'visa'}
                    descr={'Payment'}
                />
                <PaymentItem
                    defClass={css.payItem}
                    id={'paypal'}
                    name={'Payment'}
                    src={paypal}
                    alt={'visa'}
                    descr={'Payment'}
                />
                <PaymentItem
                    defClass={css.payItem}
                    id={'bank'}
                    name={'Payment'}
                    src={bank}
                    alt={'visa'}
                    descr={'Payment'}
                />
            </div>
    );
};

export default Payment;