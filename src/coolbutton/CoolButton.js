import React from 'react'

function CoolButton(props){
    
    
    const {isSmall, isDanger, isSuccess, isPrimary, className} = props;
    let mySize = isSmall ? `is-small`: null
    let myColor = isDanger ? `is-danger`
    :  isSuccess ? `is-success`
    :  isPrimary ? `is-primary`
    : null
    
    let myClass = className ? className + ` ${mySize} ${myColor} ` :null

    return (
        <button className={myClass}>{props.children}</button>
        );
}


export default CoolButton