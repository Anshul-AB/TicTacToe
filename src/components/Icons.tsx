import React from 'react'
import { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name}: IconProps) => {
   switch (name) {
    case 'circle':
        return <Icon name='circle-thin' size={38} color='#AE1438' />                                    
        break;
    case 'cross':
        return <Icon name='times' size={38} color='#0A3D62' />                                    
        break;
   
    default:
        return <Icon name='pencil' size={38} color='#2C3335' />                                    
   }
}

export default Icons
