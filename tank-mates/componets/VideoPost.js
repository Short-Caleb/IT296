import { StatusBar } from 'expo-status-bar';
import React, {useEffect, } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import AntDesign from '@expo/vector-icons/AntDesign'
import { FullScreenActionButton } from './FullScreenActionButton';

export default function VideoPlayer(props) {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [dimensions, setDimensions] = React.useState({});

  useEffect(() => {
    if(video) {
      if(props.fullscreen) video.presentFullscreenPlayer();
    }
  }, [video])


  return (
    <View>
    <FullScreenActionButton pressHandler={() => navigation.navigate('FullScreenVideo')} />
      <Pressable onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
      
      <Video
      onLayout={(event) => {
        var{x, y, heigth, width} = event.nativeEvent.layout; 
     setDimensions({
       x: x,
       y: y,
       width: width,
       heigth: heigth,
       marginTop: heigth * -1
       });
       console.log(x, y, width, heigth);
     }}

        ref={video}
        style={styles.video}
        source={{
          uri: props.video,
        }}

        
        resizeMode= 'contain'
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
     
    <View style={{...styles.iconContainer, marginTop: dimensions.margin}}>
     
      {!status.isPlaying ? 
       (
        <View style={styles.iconBackground}> 
      <AntDesign style={styles.playIcon} name="play" size={32} color= "blue" />
      </View>
       )
     : '' }
    
    </View>

    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: { 
    width: '90%',
    aspectRatio: 16/9, 
    marginBottom: 12,
  },
  iconContainer: {
    width: '90%',
    aspectRatio: 16/9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBackground : {
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    width: 38,
    borderRadius: 19,
  },
  playIcon: {
    marginTop: 0,
    backgroundColor: 'white'
  }



});
