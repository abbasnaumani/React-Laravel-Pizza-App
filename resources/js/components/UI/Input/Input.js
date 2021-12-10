import React from 'react';

import './Input.css';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import MaskedInput from 'react-text-mask'

const normalizePhoneNumber = (value) => {
    return value.replace(/\s/g,"").match(/.{1,4}/g).join(" ").substr(0,19) || "";
}
const input = (props) => {
    let inputElement = null;
    const inputClasses = ["form-control", "input-text-cls"];
    let LabelClasses = null;
    if (props.labelClassName) {
        LabelClasses = [...props.labelClassName];
    }

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("Invalid");
    }
    switch (props.elementType) {
        case ('input_phone'):
            inputElement = <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}            />;
            break;
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('checkbox'):
            inputElement = <Auxiliary>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}/>
                    <label className="form-check-label">{props.elementConfig.label}</label>
                </div>
            </Auxiliary>;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
    }

    return (
        <div className="form-group">
            {props.label ? <label className={LabelClasses ? LabelClasses.join(' ') : null}>{props.label}</label> : null}
            {inputElement}
            <span className="text-danger validation-error d-none">This field is required.</span>
        </div>
    );

};

export default input;
