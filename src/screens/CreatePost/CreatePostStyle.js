import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  imageCaptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  postImage: {width: 120, height: 120, marginLeft: 15},

  sampleText: {
    fontWeight: 'bold',
    margin: 3,
    alignSelf: 'center',
  },

  captionContaineer: {
    width: '60%',
    borderBottomWidth: 0.5,
    borderRadius: 5,
    marginTop: 1,
    borderColor: 'grey',
    marginRight: 15,
  },

  captionInput: {height: 40, padding: 5},

  addPostButton: {
    height: 45,
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'blue',
    marginTop: 10,
  },

  addPostText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
