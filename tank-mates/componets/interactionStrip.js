import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';  
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export const InteractionStrip = () => {
  return (
    <View style={styles.posticoncontainer}>

    <FontAwesome5 name="thumbs-up" size={24} color="white" />

    <FontAwesome5 name="thumbs-down" size={24} color="white" />

    <Entypo name="message" size={24} color="white" />

    <FontAwesome name="slideshare" size={24} color="white" />

    <FontAwesome5 name="retweet" size={24} color="white" />

    <Ionicons name="stats-chart-sharp" size={24} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({

    posticoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    }
})