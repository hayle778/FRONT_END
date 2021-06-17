import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Account Offerings</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='https://moneycrashers-sparkchargemedia.netdna-ssl.com/wp-content/uploads/2018/08/best-free-checking-account-1068x713.jpg'
                            text='Explore checking account options'
                            label='Personal'
                            path='/Checking'
                        />
                        <CardItem 
                            src='http://assets-cdn.ekantipur.com/images/third-party/money-finance/14062016083617M-Banking-copy-1000x0.jpg'
                            text='Explore savings account options'
                            label='Savings'
                            path='/Saving'
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='https://assets.imksb.net/sites/14/2017/05/individual-retirement-account.jpg'
                            text='Explore IRA account options'
                            label='IRA'
                            path='/IRAAcc'
                        />
                        <CardItem 
                            src='https://i.pinimg.com/originals/75/fc/c1/75fcc1457add16558ea8954ea961bcd4.png'
                            text='Explore CD account options'
                            label='CD'
                            path='/CDAcc'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;