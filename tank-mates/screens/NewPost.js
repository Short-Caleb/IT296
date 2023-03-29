import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export const NewPost = () => {
  
  const [post, setPost ] = useState({}); 
  const [postText , setPostText] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [ picLink, setPicLink] = useState('');
  const [ webLink, setWebLink] = useState('');

  const inputRef = useRef(null);



  useEffect( () => {
    inputRef.current.focus();
   }, []);
  
    return (
    <SafeAreaView style={styles.container}>
     

     <View style={styles.post}>
        <Text style={styles.title}>NEW POST</Text>
       <Text style={styles.text}>{postText}</Text>
     </View>
     <View style={styles.iconRow} >
        <View style={styles.icons}>
        <FontAwesome5 name="link" size={24} color="white" />
        <AntDesign name="picture" size={24} color="white" />
        <Entypo name="video-camera" size={24} color="white" />
        </View>
        <Button title='Submit'></Button>
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
})