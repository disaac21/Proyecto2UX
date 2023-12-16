import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import LoginScreen from './LoginScreen';
import TripDetailsScreen from '../screens/TripDetailsScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import TabNavigator from './TabNavigator';

const Stack = createSharedElementStackNavigator();

const MainNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
      if (authUser) {
        setUser(authUser);
        console.log('User email:', authUser.email); // Log user's email
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    // Clean up subscription to avoid memory leaks
    return () => unsubscribe();
  }, [initializing]);

  // Show a loading indicator or splash screen while initializing
  if (initializing) {
    return null; // You can return a loading component here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // If user is logged in, navigate to TabNavigator
          <>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{
                headerShown: false,
                useNativeDriver: true,
              }}
            />
            <Stack.Screen
              name="TripDetails"
              component={TripDetailsScreen}
              options={{
                headerShown: false,
                useNativeDriver: true,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                  cardStyle: {
                    opacity: progress,
                  },
                }),
              }}
            />
          </>
        ) : (
          // If user is not logged in, show LoginScreen
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
