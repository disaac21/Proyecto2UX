// Import necessary React Native components and React Navigation
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { Block, Text, theme, Button as GaButton } from 'galio-framework';

import { Button } from './components';
import { Images, nowTheme } from './constants';
import { HeaderHeight } from './constants/utils';
import MainNavigator from './src/navigation/MainNavigator';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;


// Create a functional component for the Travel App UI
const TravelApp = () => {
  return (
    <View style={styles.container}>
      {/* Header with Search Bar */}
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for destinations"
        />
      </View>

      {/* Categories Carousel */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Houses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Hotels</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Apartments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Apartments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Apartments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Apartments</Text>
        </TouchableOpacity>

        {/* Add more categories as needed */}
      </ScrollView>

      {/* Accommodation Components */}
      <ScrollView>
        <TouchableOpacity style={styles.accommodationCard}>
          <Image
            source={require('./images/ParkLine-apartment-in-Miami-FL.jpg')}
            style={styles.accommodationImage}
          />
          <View style={styles.accommodationDetails}>
            <View style={styles.favoriteButton}>
              <TouchableOpacity>
                <Text>❤️</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.rating}>4.5</Text>
            <Text style={styles.price}>$120/night</Text>
            <Text style={styles.accommodationName}>Cozy Cottage</Text>
            <TouchableOpacity style={styles.viewProfileButton}>
              <Text style={styles.viewProfileButtonText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Add more accommodation cards with different data */}
      </ScrollView>
    </View>
  );
};

// Accommodations Screen
const AccommodationsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Accommodations Screen</Text>
    </View>
  );
};

// Favorites Screen
const FavoritesScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

// Sample data for bookings
const bookingsData = [
  { id: '1', name: 'Paris Luxury Apartment', checkIn: '2023-01-15', checkOut: '2023-01-20' },
  { id: '2', name: 'Tokyo Boutique Hotel', checkIn: '2023-02-10', checkOut: '2023-02-15' },
  // Add more data as needed
];

// Profile Screen
const ProfileScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>

      
      {/* Profile Picture and User Info */}
      {/* <View style={styles.profileHeader}>
        <Image
          source={require('./images/descarga.jpeg')} // Replace with the user's profile picture
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
        </View>
      </View> */}

      {/* Bookings Section */}
      {/* <View style={styles.bookingsSection}>
        <Text style={styles.sectionTitle}>Your Bookings</Text>
        <FlatList
          data={bookingsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookingItem}>
              <Text style={styles.bookingName}>{item.name}</Text>
              <Text>Check-in: {item.checkIn}</Text>
              <Text>Check-out: {item.checkOut}</Text>
            </View>
          )}
        />
      </View> */}

      {/* Add more sections or customize based on your needs */}
    </View>
    </View>
  );
};

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Main App Component with Bottom Tabs Navigator
const App = () => {
  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator>
  //       <Tab.Screen name="Explore" component={TravelApp} />
  //       <Tab.Screen name="Accommodations" component={AccommodationsScreen} />
  //       <Tab.Screen name="Favorites" component={FavoritesScreen} />
  //       <Tab.Screen name="Profile" component={ProfileScreen} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );

  return <MainNavigator/>
};

// Styles
const styles = StyleSheet.create({

  profileContainer: {
    width,
    height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width,
    height: height * 0.6
  },

  info: {
    marginTop: 30,
    paddingHorizontal: 10,
    height: height * 0.8
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  avatar: {
    width: thumbMeasure,
    height: thumbMeasure,
    borderRadius: 50,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  social: {
    width: nowTheme.SIZES.BASE * 3,
    height: nowTheme.SIZES.BASE * 3,
    borderRadius: nowTheme.SIZES.BASE * 1.5,
    justifyContent: 'center',
    zIndex: 99,
    marginHorizontal: 5
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#777',
  },
  bookingsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookingItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookingName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },



  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 350
  },
  // Add other styles as needed
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  categoryButton: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#3498db',
    height: 40,
  },
  categoryButtonText: {
    color: '#fff',
  },
  accommodationCard: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  accommodationImage: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
  },
  accommodationDetails: {
    flex: 1,
    padding: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#3498db',
  },
  accommodationName: {
    fontSize: 16,
    marginTop: 5,
  },
  viewProfileButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  viewProfileButtonText: {
    color: '#fff',
  },
});

export default App;
