import { View, Text } from 'react-native'
import React from 'react'
import icon from '../assets/icon.png'

export default function Avatar() {
  return (
    <View>
      <Image style={styles.avatarStyle} source={icon}/>
    </View>
  )
}


const styles = StyleSheet.create({
    avatarStyle: {
        width: '100%',
        heigth: undefined,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: '50%',
        
        
    }
})