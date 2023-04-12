import React from 'react'
import { View } from 'react-native'
import VideoPlayer from '../componets/VideoPost'

export const FullScreenVideo = ({navigation, route}) => {

  const { video }= route.param

  return (
    <View>
        <VideoPlayer video={video} fullscreen />
    </View>
  )
}
