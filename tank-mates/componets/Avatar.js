import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import batman from '../assets/batman_90804.png'

export default function Avatar() {
  return (
    <View>
      <Image style={styles.avatarStyle} source={batman}/>
    </View>
  )
}


const styles = StyleSheet.create({
    avatarStyle: {
        width: 60,
        heigth: undefined,
        resizeMode: 'cover',
        aspectRatio: 1,
        borderRadius: 30,
        
        
    }
})