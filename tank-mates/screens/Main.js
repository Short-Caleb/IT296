import React, {useContext, useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, Pressable,  } from 'react-native';
import {AsyncStorage} from 'react-native';
import Avatar from '../componets/Avatar';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FloatingActionJackson } from '../componets/FloatingActionJackson';
import { InteractionStrip } from '../componets/interactionStrip';
import VideoPlayer from '../componets/VideoPost';
import VideoPost from '../componets/VideoPost';
import { Weblink } from '../componets/Weblink';
import { useState } from 'react';
import { Context } from '../Context';
import { NewPost } from './NewPost';
import { FullScreenActionButton } from '../componets/FullScreenActionButton';
import { FullScreenVideo } from './FullScreenVideo';




export const Main = ({navigation}) => {

  const [initialDataLoaded, setInitialDataLoaded] = useState(false)
   let data = useContext(Context);


/*
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('myData');
        if (storedData) {
          setData(JSON.parse(storedData));
        }
      } catch (error) {
        console.log(error);
      }
      setInitialDataLoaded(true);
    };

    const saveData = async () => {
      try {
        await AsyncStorage.setItem('myData', JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };
if(!initialDataLoaded) {
    loadData();
  } else {
    saveData();}
    console.log(saveData)
  }, [data]);

  const setPostText = (item) => {
    setData([...data, item]);
  };*/

   useEffect(() => {
    //if initialDataLoaded  === false
    //load data from asyncstorage 
    //check for error if the key doesnt exist create it and store it in empty array
    //data  = the array we load above 
    //setinitialDataLoaded = true
    //if initialDataLoaded === true
    //save data to asycstorage 
    async function getData() {
    try{
      const jsonValue = await AsyncStorage.getItem('@stored_posts')
      if(jsonValue != null) {
        data = JSON.parse(jsonValue)
      } else {
        const emptyValue = JSON.stringify([])
        await AsyncStorage.setItem('@stored_posts', emptyValue)
        data = [];
      }
    } catch(e) {
      console.log('error in getting async stuff', + e.message)
    }
    setInitialDataLoaded(true);
  }

  async function setData() {
    try{
      await AsyncStorage.setItem('@stored_posts', data)
      console.log('i stored the post its true its true');
    } catch(e) {
      console.log('error in the storage of the info')
    }
  }

  if(!initialDataLoaded) {
    getData();
  } else { 
    setData();
    console.log(data)
  }
    
   }, [data]);


    
     const fullScreenHandler = (item) => {
      console.log(item);

      if(item.videoLink !== '') {
        navigation.navigate('FullScreenVideo', {video: item.videoLink})
      }
      if(item.picLink !== '') {
        navigation.navigate("FullScreenImage", { image: item.picLink });
      }
     }
 

      const renderItem = ({item, index}) => {
        return (
          <View style={styles.postView}>
            <View style={styles.avatarCol}>
              <Avatar/>
            </View>
           <View style={styles.otherCol}>
           <Text style={styles.textBold}>{item.user}</Text>
            <Text style={styles.text}>{item.text}</Text>
            { item.videoLink !== '' || item.picLink !== '' ? (
                <Pressable onPress={() => fullScreenHandler(item)} style={styles.fullScreen}>
                  <SimpleLineIcons name="size-fullscreen" size={24} color="white" />
                </Pressable>
                ) : '' }
            { item.videoLink  !== '' ? 
            (    <VideoPlayer video={item.videoLink}  /> ) : ''}
            {item.picLink !== '' ? 
            <Image source={{uri: item.picLink}} style={styles.image} /> : ''}
           
            {item.webLink !== '' ? <Weblink link={item.webLink}/> : ''}
            <InteractionStrip />
            </View>
           
  
          </View>
        )
      }

  return (
    <SafeAreaView style={styles.container}>
    <FlatList 
    style={styles.feedList}
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    />
    <FloatingActionJackson pressHandler={() => navigation.navigate('NewPost')} />
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
    },
    image: {
      width: 200,
      height: 200,
      alignSelf: 'center'
    },
    fullAction: {
     
    },
    press: {
      borderWidth: 3,
      borderColor: 'white',
      borderStyle: 'solid',
      marginBottom: -10,
      zIndex: 10
    },
    fullScreen: {
      marginBottom: -20,
      zIndex: 10,
    },
  });
  