import {StatusBar} from 'expo-status-bar';
import {Text, View, Alert, Image} from 'react-native';
import {Post} from './components/Post';
import axios from 'axios';
import React, {useState} from 'react';


export default function App() {
  const [posts, setPosts] = useState();
  React.useEffect(() => {
    axios
      .get('https://649f3ff4245f077f3e9d7536.mockapi.io/post')
      .then(({data}) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('error', 'Connot receive date')
      })
  }, []);
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <StatusBar style="auto" />
      {posts.map((post, idx) => (
        <Post
          key={idx}
          title={post.title}
          imageUrl={post.imageUrl}
          createdAt={post.createdAt} />
      ))}
    </View>
  );
}
