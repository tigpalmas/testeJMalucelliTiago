import React from 'react';
import {gradientColor, purpleTitle} from "../common/colors/index";
import Avatar from '@material-ui/core/Avatar';





const UserHeader = () => {
    return (
        <div style={{
            backgroundColor: purpleTitle,
            display: 'flex',
            color: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: '500',
            width: '100%',
            height: 60,
            padding: 20
        }}>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',

                    fontWeight: '500',
                }}>
                    <i className={`chart line   icon  big`}></i>
                </div>

                <div style={{color: 'white', display: 'flex', flexDirection: 'column', marginLeft: 20}}>
                    <div style={{fontWeight: '700', fontSize: 18}}>Nova Cotação</div>
                    <div style={{fontWeight: '500', fontSize: 14}}>#0980</div>
                </div>
            </div>
            <Avatar alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWhP9ysn4Ro33-1Zkj9vYhwXkWzUMnArj4ABpqk7g4iYxnmgi"
            />


        </div>
    )
        ;
};

export default UserHeader;