import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import FavoriteButton from './shared/FavoriteButton';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import Card from './shared/Card/Card';
import CardMedia from './shared/Card/CardMedia';
import CardContent from './shared/Card/CardContent';
import {HOMES, APARTMENTS, PLACES} from '../data/index'; // Import your data sources
import axios from 'axios';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 220;

const FavsList = ({}) => {
  const navigation = useNavigation();

  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHotels = async () => {
      const currentUser = FIREBASE_AUTH.currentUser;

      try {
        const response = await axios.get(
          `http://192.168.0.15:5000/listFavorites/${currentUser.email}`,
        ); // replace with your actual backend URL
        setHotels(response.data);
        // console.log(hotels);
      } catch (error) {
        console.error('Error getting hotels', error);
        setError(
          'Error getting hotels. Please check your network connection and try again.',
        );
      }
    };

    getHotels();
  }, []);
  let trips = hotels;
  // trips = hotels //Aca se agarra el arreglo de favoritos

  return (
    <View style={styles.container}>
      {trips.map((item, index) => {
        return (
          <Card
            key={item.id}
            style={styles.card}
            onPress={() => {
              navigation.navigate('TripDetails', {trip: item});
            }}>
            <SharedElement id={`trip.${item.id}.image`} style={styles.media}>
              <CardMedia source={item.image} />
            </SharedElement>
            <CardContent style={styles.content}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
              <FavoriteButton />
            </CardContent>
          </Card>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  media: {
    flex: 1,
  },
  content: {
    paddingRight: spacing.m / 2,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: 'bold',
    color: colors.primary,
  },
  location: {
    fontSize: sizes.body,
    color: colors.lightGray,
  },
});

export default FavsList;
