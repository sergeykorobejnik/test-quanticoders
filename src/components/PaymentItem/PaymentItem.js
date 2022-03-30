import React from 'react';
import css from "../MainForm/parts/HelpTypes/HelpTypes.module.scss";
import visa from "../Payment/assets/visa.svg";
// Usage:
//      defClass
//      id
//      src
//      alt
//      descr

const PaymentItem = ({defClass, id, src, alt, descr, name}) => {
    return (
        <div className={defClass}>
            <input type="radio" name={name} id={id} style={{
                opacity: 0,
                visibility: 'hidden',
                position: "absolute",
                zIndex: "-50"
            }}/>
            <label htmlFor={id}>
                <img src={src} alt={alt}/>
                <span>{descr}</span>
            </label>
        </div>
    );
};

export default PaymentItem;