import React from 'react'
import { View, StyleSheet } from 'react-native'
import VideoPlayer from '../componets/VideoPost'

export const FullScreenVideo = ({navigation, route}) => {

  const { video }= route.params

  return (
    <View style={styles.container}>
        <VideoPlayer video={video} fullscreen />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})