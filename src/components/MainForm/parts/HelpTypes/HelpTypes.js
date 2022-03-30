import React from 'react';
import css from './HelpTypes.module.scss'
import handSvg from './assets/handSvg.svg'
import clothesSvg from './assets/clothesSvg.svg'
import heartSvg from './assets/heartSvg.svg'
import walletSvg from './assets/walletSvg.svg'
import Payment from "../../../Payment/Payment";
import PaymentCard from "../../../PaymentCard/PaymentCard";


const HelpTypes = props => {
    return (
        <div className={css.helpTypes}>
            <h2 className={css.title}>Види допомоги</h2>
            <span className={css.description}>Ви можете змінити вид допомоги</span>
            <div className={css.contentHolder}>
                <div className={css.iconHolder}>
                    <div className={css.item}>
                        <div className={css.imageHolder}>
                            <img src={handSvg} alt="hand"/>
                        </div>
                        <span>Зробити</span>
                    </div>
                    <div className={`${css.item} ${css.itemActive}`}>
                        <div className={css.imageHolder}>
                            <img src={walletSvg} alt="wallet"/>
                        </div>
                        <span>Фінансова <br/> допомога</span>
                    </div>
                    <div className={css.item}>
                        <div className={css.imageHolder}>
                            <img src={clothesSvg} alt="clothes"/>
                        </div>
                        <span>Матеріальна <br/> допомога</span>
                    </div>
                    <div className={css.item}>
                        <div className={css.imageHolder}>
                            <img src={heartSvg} alt="heart"/>
                        </div>
                        <span>Волонтерство</span>
                    </div>
                </div>
                <div className={css.helpContent}>
                    <div className={css.paymentSystems}>
                        <span>Спосіб оплати</span>
                        <Payment/>
                    </div>
                    <div className={css.paymentCard}>
                        <span>Введіть наступін дані</span>
                        <PaymentCard/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpTypes;