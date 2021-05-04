import React from 'react'

function CoolButton(props){
    
    
    const {isSmall, isDanger, isSuccess, isPrimary, className} = props;
    let mySize = isSmall ? `is-small`: null
    let myColor = isDanger ? `is-danger`
    :  isSuccess ? `is-success`
    :  isPrimary ? `is-primary`
    : null
    
    let myClass = className ? className + ` ${mySize} ${myColor} ` :null

    let classes = {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',
      }
      let names = Object.keys(props)

      names.forEach((e)=>{
          if(classes(e) == className){
              className += classes(e) + ' '
          }
          return className
      })
    return (
        <button className={myClass}>{props.children}</button>
        );
}


export default CoolButton