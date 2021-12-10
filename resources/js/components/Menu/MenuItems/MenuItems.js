import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const MenuItems = (props) => {
    let menuItems = Object.keys(props.items)
        .map(menuKey => (
            <MenuItem key={props.items[menuKey].id} image_url={props.items[menuKey].image.path}
                      name={props.items[menuKey].name} price={parseFloat(props.items[menuKey].price)}
                      description={props.items[menuKey].description}
                      added={() => props.itemAdded(props.items[menuKey])}
                      removed={() => props.itemRemoved(props.items[menuKey].id)}
                      // isSelected={props.isSelectedId(props.items[menuKey].id,props.cartItems)}
                      isSelected={(props.cartItems && props.cartItems[props.items[menuKey].id] && props.cartItems[props.items[menuKey].id].id&&props.cartItems[props.items[menuKey].id].id==props.items[menuKey].id)?1:0}>

            </MenuItem>
        ));
    return (
        <Auxiliary>
            {menuItems}
        </Auxiliary>
    )
}

export default MenuItems;
