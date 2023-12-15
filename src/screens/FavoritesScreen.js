import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/TripsList';
import { FAVORITES, PLACES, TOP_PLACES } from '../data';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Favorites" />
      {/* <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <TopPlacesCarousel list={TOP_PLACES} /> */}
        {/* <SectionHeader title="Favorites"/> */}
        <TripsList list={FAVORITES} />
      </ScrollView>
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
