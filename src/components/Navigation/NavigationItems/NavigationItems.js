import React from "react";

import classes from './NavigationItems.css';
import NavigatinItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigatinItem link="/" active>Burger Builder</NavigatinItem>
        <NavigatinItem link="/">Checkout</NavigatinItem>
    </ul>
);

export default navigationItems;