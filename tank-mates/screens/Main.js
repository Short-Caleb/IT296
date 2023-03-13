import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image,  } from 'react-native';
import Avatar from '../componets/Avatar';
import { FloatingActionJackson } from '../componets/FloatingActionJackson';
import { InteractionStrip } from '../componets/interactionStrip';
import VideoPlayer from '../componets/VideoPost';
import VideoPost from '../componets/VideoPost';
import { Weblink } from '../componets/Weblink';







export const Main = () => {


    const feedData = [
        {id: 1, text: 'this is the post number 1', videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', webLink: '', user: 'Caleb Short', avatar: ''},
        {id: 2, text: 'this is the post number 2', videoLink: '', webLink: 'http://www.google.com', user: 'Caleb Short', avatar: '' }, 
        {id: 3, text: 'this is the post number 3', videoLink: '', webLink: '', user: 'Caleb Short', avatar: '' },
        {id: 4, text: 'this is the post number 4', videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', webLink: '', user: 'Caleb Short', avatar: '' },
        {id: 5, text: 'this is the post number 5', videoLink: '', webLink: '', user: 'Caleb Short', avatar: '' },
        {id: 6, text: 'this is the post number 6', videoLink: '', webLink: 'http://www.espn.com', user: 'Caleb Short', avatar: '' },
        {id: 7, text: 'this is the post number 7', videoLink: '', webLink: '', user: 'Caleb Short', avatar: '' },
        {id: 8, text: 'this is the post number 8', videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', webLink: 'http://http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', user: 'Caleb Short', avatar: '' },
        {id: 9, text: 'this is the post number 9', videoLink: '', webLink: '', user: 'Caleb Short', avatar: '' },
      
      
      ];
    
      const renderItem = ({item, index}) => {
        return (
          <View style={styles.postView}>
            <View style={styles.avatarCol}>
              <Avatar/>
            </View>
           <View style={styles.otherCol}>
           <Text style={styles.textBold}>{item.user}</Text>
            <Text style={styles.text}>{item.text}</Text>
            {item.webLink !== '' ? <Weblink link={item.webLink}/> : ''}
    
            { item.videoLink  !== '' ? (<VideoPlayer video={item.videoLink} />) : ''}
            <InteractionStrip />
            </View>
             
          </View>
        )
      }

  return (
    <SafeAreaView style={styles.container}>
    <FlatList 
    style={styles.feedList}
    data={feedData}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    />
    <FloatingActionJackson pressHandler={ () => {console.log("Action Jackson Baby!!!!!")}} />
</SafeAreaView>


  )
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
  