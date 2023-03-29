import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image,  } from 'react-native';
import Avatar from './componets/Avatar'
import { InteractionStrip } from './componets/interactionStrip';
import VideoPlayer from './componets/VideoPost';
import VideoPost from './componets/VideoPost';
import { Weblink } from './componets/Weblink';
import { Main } from './screens/Main';
import { NewPost } from './screens/NewPost';


export default function App() {

 const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NewPost} screenOptions={{headerShown: false}}>
      <Stack.Screen name= 'NewPost' component={NewPost}/>
      <Stack.Screen name='Main' component={Main} />
      
      </Stack.Navigator>
    </NavigationContainer>
  
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
