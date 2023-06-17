import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   console.log(`Username: ${username}, Password: ${password}`);
  //   // TODO: Handle login logic here
  //   if(isEmpty(username)){
  //     Alert.alert('Enter UserName')
  //     // showToast('Enter UserName',1000,'danger')
  //   }else if(isEmpty(password)){
  //     Alert.alert('Enter password')
  //     // showToast('Enter password',1000,'danger')
  //   }else{
  //     Alert.alert('Success')
  //     // showToast('Success',1000,'success')
  //   }
  // }

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    // TODO: Handle login logic here
    if(username===''){
      Alert.alert('Enter UserName')
    }else if(password===''){
      Alert.alert('Enter password')
    }else if(username!=='admin' && password!=='admin'){
      Alert.alert('Invalid Credentials')
    }else{
      Alert.alert('Success')
    }
  }

  return (
    <View  style={{backgroundColor:'white'}}>
      <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
        testID="userNameTestId"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        testID="passwordTestId"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleLogin} testID="loginBtnTestId" style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor:'white'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  buttonStyle:{
    // flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:40,
    borderRadius:10,
    backgroundColor:'blue'
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  }
});

export default LoginForm;
