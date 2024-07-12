import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View>
      <Image source={require('./../Assets/Image/login.png')}/>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to School App</Text>
        <Text style={{textAlign: 'center', marginTop: 80, fontSize: 25}}>Login/Signup</Text>
      </View>
      <View style={styles.button}>
        <Ionicons name="logo-google" size={24} color="white" style={{marginRight: 10}}/>
        <Text style={{color: Color.white}}>
          Sign In with 
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -25,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    welcomeText: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
      backgroundColor: Color.primary,
      padding: 10,
      margin: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
})