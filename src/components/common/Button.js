import React from 'react';

import {grey, purpleTitle} from "./colors/index";





const Button = ({label, background, labelColor, disabled, onClick}) => {
    return (
        <div

            onClick={onClick}
            style={{width: 300,
            height: 100,
            padding: 20,

            backgroundColor:  background,
            borderRadius: 8,
            justifyContent: 'space-between',
            display: 'flex', flexDirection:'row', alignItems: 'center'}}>
            <div style={{color: labelColor, fontWeight: '700', fontSize: 24}}>{label}</div>
            <div style={{color: labelColor}}>
                <i className={`arrow right   icon big `} ></i>
            </div>

        </div>
    ) ;
};

export default Button;