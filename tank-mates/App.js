import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Avatar from './componets/Avatar';
import VideoPost from './componets/VideoPost';


export default function App() {

  const feedData = [
    {id: 1, text: 'this is the post number 1', videoLink: '', webLink: '', user: 'Caleb Short', avatar: ''},
    {id: 2, text: 'this is the post number 2', videoLink: '' }, 
    {id: 3, text: 'this is the post number 3', videoLink: '' },
    {id: 4, text: 'this is the post number 4', videoLink: '' },
    {id: 5, text: 'this is the post number 5', videoLink: '' },
    {id: 6, text: 'this is the post number 6', videoLink: '' },
    {id: 7, text: 'this is the post number 7', videoLink: '' },
    {id: 8, text: 'this is the post number 8', videoLink: '' },
  
  
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.postView}>
        <View style={styles.avatarCol}>
          <Avatar/>
        </View>
       <View style={otherCol}>
       <Text style={styles.textBold}>{item.user}</Text>
        <Text style={styles.text}>{item.text}</Text>

        <VideoPost />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
        <FlatList 
        style={styles.feedList}
        data={feedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
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
  
});
