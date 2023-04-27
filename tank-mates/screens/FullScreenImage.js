import React from 'react'
import { View, StyleSheet, Image } from 'react-native'


export const FullScreenImage = ({navigation, route}) => {

  const { image }= route.params;
  console.log(image)

  return (
    <View style={styles.container}>
       <Image source={{uri: image}} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    width: 480,
    resizeMode: 'contain' ,
    alignSelf: 'center'
  },
})