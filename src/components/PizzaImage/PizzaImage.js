import React from 'react';

import classes from './PizzaImage.css';
import pizzaImageFile from '../../assets/pizza.jpg';

const pizzaImage = (props) => {
    return <div className={classes.PizzaImage}>
        <img src={pizzaImageFile} className={classes.PizzaImg}></img>
    </div>
}

export default pizzaImage;