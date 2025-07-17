import React, { PropsWithChildren } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconItemsProps = PropsWithChildren<{
  name: string;
}>
function IconItems({name}:IconItemsProps) {
  
     switch (name) {
      case 'cross':
       return  <Icon name='times' size={38} color="#d63031"/>
      case 'circle':
        return <Icon name='circle-thin' size={38} color="#0b8941"/>
     
      default:
        return <Icon name='plus' size={38} color="#dfe6e9"/>
        break;
     }

}

export default IconItems
