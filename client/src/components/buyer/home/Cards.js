import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Services!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/waste_items.jpg"
                            text='Search for Waste'
                            path='/services'
                        />
                        <CardItem
                            src='images/company.jpg'
                            text='Search for Companies'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/view_post.jpg'
                            text='View Posts'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/accepted.jpg'
                            text='View Accepted Offers'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/pending_offers.jpg'
                            text='View Pending Offers'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;