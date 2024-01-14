import React from 'react';
import { css } from '@emotion/css';

const Main = (props) => {
    const {children}=props;
    return (
        <div 
        className={css`
            height:450px;
            width:70%;
            background-color:#e06666;
            display:flex;
            align-items:center;
            flex-direction:column
            `}>
                {children}
            </div>
    )
}

export default Main