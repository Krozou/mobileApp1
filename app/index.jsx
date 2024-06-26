import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { Link } from 'expo-router';
import logo from "../assets/images/logo.png";



const  IndexScreen = () => {
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [visible, setVisible] = useState(false);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style = {styles.imgContainer}>
        <Image
          source={logo}
          style={styles.image}
          fill
        />
      </View>
      
      <Text style={styles.title}>Spidi</Text>

      <TextInput style={styles.input} placeholder="Nom d'utilisateur" placeholderTextColor="#1115"/>
      <View style={styles.pickerContainer}>
        <CountryPicker
          withFilter
          withFlag
          withCallingCode
          withModal
          visible={visible}
          onClose={() => setVisible(false)}
          onSelect={(country) => {
            setSelectedCountry(country);
            setVisible(false);
          }}
          countryCode={selectedCountry ? selectedCountry.cca2 : undefined}
          region = 'Africa'
          translation='fra'
          placeholder='Votre Pays'
          placeholderTextColor="#1115"
        /></View>
      
      <TextInput style={styles.input} placeholder="+000   Numéro de téléphone" keyboardType="phone-pad" placeholderTextColor="#1115" />

      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" placeholderTextColor="#1115"/>

      <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry placeholderTextColor="#1115"/>
      <Link href='screen' style = {styles.butContainer}>
        Dream Big make big
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imgContainer:{
    width: 150,
    height: 130,
    marginTop: 40,
    display: 'flex',
    alignSelf: "center",
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title:{
    fontSize: 50,
    alignSelf: "center",
    marginBottom: 60,
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    height: 50,
  },
  butContainer:{
    alignSelf: 'center',
    height: 50,
    backgroundColor:"black",
    width: "90%",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 15  ,
  },

});
export default  IndexScreen