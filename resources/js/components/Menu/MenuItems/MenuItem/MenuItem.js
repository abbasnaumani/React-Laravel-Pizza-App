import React from 'react';
import './MenuItem.css';
import Button from "../../../UI/Button/Button";

const menuItem = (props) => {
    console.log(props,"propspropsprops");
    let classes=["menu-item-cls"];
    let btn= <Button btnType="btn btn-white btn-outline-white cart-btn-cls pt-5 pb-5">Add to
        cart</Button>;
    if(props.isSelected){
        classes.push("selected");
        btn= <Button btnType="btn btn-white btn-outline-white cart-btn-cls pt-5 pb-5" clicked={props.removed}>Remove From Cart</Button>;
    }
    return (
        <div className="col-md-3 text-center pt-1 pb-1" onClick={props.isSelected?props.removed:props.added}>
            <div className={classes.join(' ')}>
                <p className="img img-cls mx-auto" style={{backgroundImage: "url(images/" + props.image_url + ")"}}></p>
                <div className="text">
                    <h3><span>{props.name}</span></h3>
                    <p>{props.description}</p>
                    <p><span className="price">${props.price.toFixed(2)}</span></p>
                   {btn}
                </div>
            </div>
        </div>
    );
};
export default menuItem;
