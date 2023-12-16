import react, { useState } from 'react';
import {Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import { HOMES, PLACES, TOP_PLACES } from "../data/index";
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/TripsList';

const HomeScreen = () => {

  const [selectedType, setSelectedType] = useState(null);

  const handleButtonPress = (type) => {
    setSelectedType(type);
  };

  return (
    <View style={styles.container}>
      <MainHeader title="Travel App" />
      <ScreenHeader mainTitle="Bienvenido" secondTitle="A Tu Búsqueda Ideal" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />

        <SectionHeader title="Nosotros Ofrecemos"/>
        <View style={styles.buttonContainer}>
          <Button title="Casas" onPress={() => handleButtonPress('casas')} />
          <Button title="Apartamentos" onPress={() => handleButtonPress('apartamentos')} />
          <Button title="Hoteles" onPress={() => handleButtonPress('hoteles')} />
        </View>

        <TripsList selectedType={selectedType} />
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