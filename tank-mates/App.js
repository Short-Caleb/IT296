import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image,  } from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import Avatar from './componets/Avatar'
import { InteractionStrip } from './componets/interactionStrip';
import VideoPlayer from './componets/VideoPost';
import VideoPost from './componets/VideoPost';
import { Weblink } from './componets/Weblink';
import { Main } from './screens/Main';
import { NewPost } from './screens/NewPost';
import { Context } from './Context';
import { FullScreenVideo } from './screens/FullScreenVideo';


export default function App() {

 const val = [ 
  {id: 1, text: 'this is the post number 1', picLink: '', videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', webLink: '', user: 'Caleb Short', avatar: ''},
  {id: 2, text: 'this is the post number 2', picLink: '', videoLink: '', webLink: 'http://www.google.com', user: 'Caleb Short', avatar: '' }, 
  {id: 3, text: 'this is the post number 3', picLink: '', videoLink: '', webLink: '', user: 'Caleb Short', avatar: '' },
  {id: 4, text: 'this is the post number 4', picLink: '', videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', webLink: '', user: 'Caleb Short', avatar: '' },
  {id: 5, text: 'this is the post number 5', picLink: '', videoLink: '', webLink: '', user: 'Caleb Short', avatar: '' },
  {id: 6, text: 'this is the post number 6', picLink: '', videoLink: '', webLink: 'http://www.espn.com', user: 'Caleb Short', avatar: '' },
  {id: 7, text: 'this is the post number 7', picLink: '', videoLink: '', webLink: '', user: 'Caleb Short', avatar: '' },
  {id: 8, text: 'this is the post number 8', picLink: '', videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', webLink: 'http://http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', user: 'Caleb Short', avatar: '' },
  {id: 9, text: 'this is the post number 9', picLink: '', videoLink: '', webLink: '', user: 'Caleb Short', avatar: '' },
]

 const Stack = createNativeStackNavigator()

  return (
    <Context.Provider value={val} >
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Main} screenOptions={{headerShown: false}}>
      <Stack.Screen name='Main' component={Main} />
      <Stack.Screen name= 'NewPost' component={NewPost}/>
      <Stack.Screen name= 'FullScreenVideo' component={FullScreenVideo}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Context.Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
   marginTop: 30,
  },
  feedList: {
    width: '100%',
    paddingHorizontal: 12,
  },
  postView: {
    marginHorizontal: 8 ,
    marginTop:12,
    padding: 2,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  avatarCol:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '15%',
    backgroundColor: 'black',
    marginHorizontal: 12,
  },
  otherCol:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'black',
    
  },
  textBold: {
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
  },
  strip: {
    marginTop: 10,
    paddingTop: 10,
  }
});
