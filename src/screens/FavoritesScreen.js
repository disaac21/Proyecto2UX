import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/TripsList';
import FavsList from '../components/FavsList';
import { FAVORITES, PLACES, TOP_PLACES } from '../data';
import axios from 'axios';

const FavoriteScreen = () => {

  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const response = await axios.get('http://192.168.0.15:5000/listFavorites'); // replace with your actual backend URL
        setHotels(response.data);
        console.log(hotels);
      } catch (error) {
        console.error('Error getting hotels', error);
        setError('Error getting hotels. Please check your network connection and try again.');
      }
    };

    getHotels();
  }, []);

  return (
    <View style={styles.container}>
      <MainHeader title="Favorites" />
      {/* <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <TopPlacesCarousel list={TOP_PLACES} /> */}
        {/* <SectionHeader title="Favorites"/> */}
        {/* {console.log('hola')} */}
        <FavsList selectedType={null} />
      </ScrollView>

      {console.log('hola')}

        


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default FavoriteScreen;
