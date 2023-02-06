import React, { useCallback } from 'react'
import { Alert, Linking, Pressable, StyleSheet, Text } from 'react-native'



export const Weblink = (props) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(props.link);
        if(supported) {
            await Linking.openURL(props.link)
        } else {
            Alert.alert(`Dont know how to open this URL: ${props.link}`);
        }
    }, [props.link]);


  return (
    <Pressable onPress={() => handlePress(props.link)}> 
        <Text style={styles.linkStyle}>{props.link}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({

    linkStyle: {
        color: 'lightblue',
        textDecorationLine: 'underline',
    }
})