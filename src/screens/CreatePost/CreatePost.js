import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
  View,
  Image,
} from 'react-native';
import styles from './CreatePostStyle';
import ImagePicker from 'react-native-image-crop-picker';

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const addPost = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      height: 512,
      width: 512,
      cropping: true,
    })
      .then(image => {
        let uri = image.path;
        setImage(uri);
      })
      .catch(e => {});
  };

  return (
    <SafeAreaView style={styles.container}>
      {image ? (
        <View style={styles.imageCaptionContainer}>
          <Image
            style={styles.postImage}
            source={{uri: image}}
            resizeMode={'contain'}
          />
          <View style={styles.captionContaineer}>
            <TextInput
              value={caption}
              placeholder={'write a caption ...'}
              style={styles.captionInput}
              onChangeText={text => setCaption(text)}
            />
          </View>
        </View>
      ) : (
        <Text style={styles.sampleText}>What's in your mind ?</Text>
      )}
      <TouchableOpacity style={styles.addPostButton} onPress={() => addPost()}>
        <Text style={styles.addPostText}>
          {image ? 'Create Post' : 'Add Post'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreatePost;
