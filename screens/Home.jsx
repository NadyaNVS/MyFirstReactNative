import {
  Text,
  View,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Post } from '../components/Post';
import axios from 'axios';
import React from 'react';
import { Loading } from '../components/Loading';

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);

  const fetchPost = () => {
    setIsLoading(true);
    axios
      .get('https://649f3ff4245f077f3e9d7536.mockapi.io/post')
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('error', 'Cannot receive date');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPost, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: 40,
        justifyContent: 'center',
      }}
    >
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPost} />
        }
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FullPost', {
                id: item.id,
                title: item.title,
              });
            }}
          >
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
