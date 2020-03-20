import React from "react";

import classes from './NavigationItems.css';
import NavigatinItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigatinItem link="/" exact>Burger Builder</NavigatinItem>
        <NavigatinItem link="/orders">Orders</NavigatinItem>
        { !props.isAuthenticated
            ? <NavigatinItem link="/auth">Authenticate</NavigatinItem>
            : <NavigatinItem link="/logout">Logout</NavigatinItem>}
    </ul>
);

export default navigationItems;