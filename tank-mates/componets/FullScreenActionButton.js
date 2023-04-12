import React from 'react'
import { StyleSheet, Text, View, Pressable,  } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';



 

export const FullScreenActionButton = ({pressHandler}) => {

    const clickHandler = () => {
        //function to handle click on floating Action Button
        alert('Floating Button Clicked');
      };
   

  return (
    <View style={styles.viewStyle}>
        <Pressable 
        style={styles.pressableStyle}
        onPress={pressHandler}
        >
      <SimpleLineIcons name="size-fullscreen" size={24} color="black" />
        
        </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    viewStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      right: 30,
      bottom: 30,
      backgroundColor: 'blue',
      borderRadius: '50',
      justifyContent: 'center'
    },
    pressableStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
  });
  