import React from 'react';
import Button from '../common/Button'
import {Link} from 'react-router-dom';
import {grey, purpleTitle} from "../common/colors/index";




const IntroPage = () => {

    const {containerStyle,iconContainer, titleStyle, subTitleStyle} = styles;
    return (
        <div style={containerStyle}>
            <div style={iconContainer}>
                <i class={`chart line   icon huge `} ></i>

            </div>
            <div style={titleStyle}>Cotação de Seguros</div>
            <div style={subTitleStyle}>Solução Inovadora da Lider do Mercado</div>

            <div style={{marginTop: 50}}>
                <Link to="/cpfSearch">
                    <Button
                        labelColor={purpleTitle}
                        background={grey}
                        label={"Iniciar"}
                    />
                </Link>

            </div>

        </div>
    );

};

const styles = {

    containerStyle: {display: 'flex', flexDirection: 'column',  alignItems: 'center', justifyContent: 'center' },
    iconContainer: {color: 'white', display: 'flex',   alignItems: 'center',fontWeight: '500', marginTop: 50 },
    titleStyle: {fontSize:24, fontWeight: '700', color: 'white', marginTop: 50},
    subTitleStyle: {fontSize:18, fontWeight: '300', color: 'white', marginTop: 20},


};


export default IntroPage;