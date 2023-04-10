import React, { useState, useEffect, useRef, useContext } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TextInput, Button, Alert, Modal, Pressable, ImagePickerIOS, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {Video,  AVPlaybackStatus } from 'expo-av'
import { Context } from '../Context';

export const NewPost = () => {
  
const data = useContext(Context)

  const [post, setPost ] = useState({}); 
  const [postText , setPostText] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [ picLink, setPicLink] = useState('');
  const [ webLink, setWebLink] = useState('');
  const [modalvisible, setModalVisible] = useState(false)  
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null)
  const inputRef = useRef(null);

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setVideo('');
        }
}

const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setVideo(result.assets[0].uri);
            setImage('');
        }
}


  useEffect( () => {
    inputRef.current.focus();
   }, []);
  
  const submitPost = () => {
    let newpost = {
         id: 8,
         text: 'this is the post number 8',
         picLink: picLink,
         videoLink: videoLink,
         webLink: webLink,
         user: 'Caleb Short', 
         avatar: '' 
    }
    data.push(newpost)
  }


    return (
    <SafeAreaView style={styles.container}>
     

     <View style={styles.post}>
        <Text style={styles.title}>NEW POST</Text>
       <Text style={styles.text}>{postText}</Text>
       <Text style={styles.linktext}>{webLink}</Text>
       <Text>{image && <Image source={{uri: image}} style={styles.image} />}</Text>
       <Text>{video && <Video source={{uri: video}} style={styles.image} />} </Text>
     </View>
     <Modal
        animationType='slide'
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => {
            Alert.alert('Modal is closing now!');
            setModalVisible(!modalvisible);
        }}>

    <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.modalText}>does this work </Text>
       <View style={styles.modalInput}>
        <TextInput
        style={styles.textbox}
        editable
        multiline
        maxLength={240}
        numberOfLines={2}
        onChangeText={setWebLink}
        value={webLink}
        />
        </View>
        <Pressable 
        style={[styles.button, styles.buttonClose]}
        onPress={() => {
            setModalVisible(!modalvisible)
        }}
        >
            <Text style={styles.text}>Add webLink!</Text>
        </Pressable>
        </View>
    </View>
   </Modal>
      

     <View style={styles.iconRow} >
        <View style={styles.icons}>
        <Pressable
        onPress={() => setModalVisible(true)}>  
        <FontAwesome5 name="link" size={24} color="white" />          
        </Pressable>

        <Pressable
        onPress={pickImage}>
        <AntDesign name="picture" size={24} color="white" />
        </Pressable>
        <Pressable 
        onPress={pickVideo}>
        <Entypo name="video-camera" size={24} color="white" />
        </Pressable>
        </View>
        <Pressable>
            onPress={submitPost}
            <Button title='Submit'></Button>
        </Pressable>
       
     </View>
     
     <View style={styles.input}>
        <TextInput
        style={styles.textbox}
            ref={inputRef}
            editable
            numberOfLines={4}
            maxLength={240}
            onChangeText={setPostText}
            value={postText}
        />
     </View> 
 
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

    container:{
        flex: 1,
        display: 'flex',
        backgroundColor: '#000',
        alignItems: 'center',
        marginTop: 30,
        padding: 30,
    },
    post: {
        marginHorizontal: 10,
        flex: 4,
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },

        input: { 
            flex: 2,
            borderColor: 'white',
            borderWidth: 2,
            borderRadius: 2,
            color: 'white',
            marginHorizontal: 10,
            width: '100%'
        },
    
    text: { 
        color: 'white',
        fontSize: 14,
    },

    textbox: {
        color: 'white',
        fontSize: 14,
        backgroundColor: 'gray',
        textAlign: 'vertical',
    },
    iconRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 24,
        
    },
    icons:{
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buttonOpen: {
        backgroundColor: 'blue',
      },
      buttonClose: {
        backgroundColor: 'blue',
      },
      modalText: { 
        color: 'black',
        fontSize: 14,
    },
    linktext: {
        color: 'lightblue',
        fontSize: 14,
        textDecorationLine: 'underline'
    },
    modalInput: { 
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 2,
        color: 'black',
        width: '100%'
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center'
      },

})