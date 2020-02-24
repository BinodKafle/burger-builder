import React from "react";

import classes from './NavigationItems.css';
import NavigatinItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigatinItem link="/" exact>Burger Builder</NavigatinItem>
        <NavigatinItem link="/orders">Orders</NavigatinItem>
    </ul>
);

export default navigationItems;