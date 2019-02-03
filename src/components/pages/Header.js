import React from 'react';
import {gradientColor} from "../common/colors/index";





const Header = () => {
    return (
        <div className="ui secondary pointing menu" style={{padding: 20, backgroundColor: gradientColor}}>
            <div style={{color: 'white', fontWeight: '700', fontSize: 24}}>JMalucelli Seguradora</div>
        </div>
    )
        ;
};

export default Header;