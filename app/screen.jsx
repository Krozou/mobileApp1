import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Share, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import africa2 from '../assets/images/africa2.png';
import africa1 from '../assets/images/africa1.jpeg';
import children from '../assets/images/children.jpeg';
import students from '../assets/images/students.jpeg';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: viewportWidth } = Dimensions.get('window');

const Screen = () => {

  const images = [children, students, africa1];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / viewportWidth);
    setActiveSlide(slideIndex);
  };


  const onShare = async()=>{
    try {
      const result = await Share.share({
        message: 'www.linkedin.com/in/krozou',
      });
    } catch (error) {
      console.error('Erreur de partage:', error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>Spidi</Text>
      </View>
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={image} style={styles.carouselImage} />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.buttonsContainer}>

            <TouchableOpacity style={styles.button}>
                <Ionicons style={styles.emoji} name="happy-outline" size={24} color="black" />
                <Text style={styles.buttonText}>25k</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onShare}>
                <Ionicons style={styles.emoji} name="arrow-redo-outline" size={24} color="black" />
                <Text style={styles.buttonText}>600</Text>
            </TouchableOpacity>

      </View>
        
      <Text style={styles.desc}>L'Afrique le Soleil du monde · 600 vues</Text>

      <View style = {styles.lastview}>
        <TouchableOpacity style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Image
              source={africa2}
              style={styles.image}
            />
          </View>
          <View style={styles.plusCircle}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.MkAf}>Make Africa Great</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    opacity: 0.7,
  },
  headerImage: {
    width: 60,
    height: 60,
  },
  headerText: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: viewportWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: viewportWidth,
    height: 500,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji:{
    color: "gray"
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },

  desc:{
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },

  outerCircle: {
    width: 100,
    height: 100,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 25,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  plusCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'black',
    justifyContent: 'spapce-around',
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  plusText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  lastview:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  MkAf:{
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default Screen;
