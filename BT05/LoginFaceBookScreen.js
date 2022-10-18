import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import image from './assets/ec82b31d8151450f1c40.jpg';

const { width, height } = Dimensions.get('window');
const LoginFaceBookScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerImage}>
        <ImageBackground
          style={styles.Image}
          source={image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <View>
            <TextInput
              style={{
                ...styles.input,
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
              }}
              placeholder="Số điện thoại hoặc email"
            />
            <TextInput
              style={{ ...styles.input, borderWidth: 1 }}
              placeholder="Mật khẩu"
            />
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                width: width / 1.2,
                backgroundColor: '#3498db',
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  paddingVertical: 13,
                }}
              >
                Đăng nhập
              </Text>
            </TouchableOpacity>
            <Text
              style={{ textAlign: 'center', marginTop: 20, color: '#3498db' }}
            >
              Quên mật khẩu
            </Text>
            <Text
              style={{ textAlign: 'center', marginTop: 20, color: '#3498db' }}
            >
              Quay lại
            </Text>
          </View>
          <View style={{ marginTop: 150 }}>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: 'gray',
                width: width / 2.2,
                alignSelf: 'center',
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  translateY: -22,
                  backgroundColor: 'black',
                  padding: 10,
                  zIndex: 2,
                }}
              >
                Hoặc
              </Text>
            </View>

            <TouchableOpacity
              style={{
                alignSelf: 'center',
                width: width / 1.2,
                backgroundColor: '#a5b1c2',
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  paddingVertical: 13,
                  color: '#3498db',
                }}
              >
                Tọa tài khoản mới
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginFaceBookScreen;

const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
  },
  Image: {
    flex: 1,
  },
  content: {
    flex: 2,
    backgroundColor: 'black',
  },
  input: {
    paddingVertical: 10,
    alignSelf: 'center',
    width: width / 1.2,
    paddingHorizontal: 15,
    borderColor: 'gray',
  },
});
