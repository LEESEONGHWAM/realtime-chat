import React from 'react';
/* Styles */
import cl from '../styles/components/MessageComponent.module.css';
import avatar from '../styles/images/avatar.png'

const MessageComponent = (props) => {
    return (
        <div className={props.message.styleID === props.activeUser.id ? cl.messageComponent : cl.secondMessageComponent}>
            {
                props.message.styleID === props.activeUser.id ? 
                <h1>{props.message.body}</h1>
                :
                <div style={{
                    display: 'grid',
                    gridAutoFlow: 'row',
                }}>
                    {/* <img src={avatar} style={{width:40}} alt="" /> */}
                    <h1 style={{float:'right'}}>{props.message.body}</h1>
                </div>
            } 
        </div>
    );
}

export default MessageComponent;