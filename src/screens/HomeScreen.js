import react from 'react';
import {Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import { HOMES, PLACES, TOP_PLACES } from "../data/index";
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/TripsList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Travel App" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />

        <SectionHeader title="Ofrecemos"/>
        <View style={styles.buttonContainer}>
          <Button title="Casas" onPress={() => {}} />
          <Button title="Apartamentos" onPress={() => {}} />
          <Button title="Hoteles" onPress={() => {}} />
        </View>

        <SectionHeader
          title="Popular Trips"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripsList list={HOMES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // You can adjust this as per your layout
    alignItems: 'center', // Align buttons vertically if needed
    marginVertical: 10, // Add any vertical margin as needed
  },
});

export default HomeScreen;