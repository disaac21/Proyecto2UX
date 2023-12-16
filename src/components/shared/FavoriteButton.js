import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {colors, shadow} from '../../constants/theme';
import Icon from './Icon';
import axios from 'axios';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

const FavoriteButton = ({active, style, item}) => {
    
  const [mensaje, setMensaje] = useState('');
  const handlePress = async () => {
    // Call the provided onToggleFavorite function and pass the item
    console.log('le di favorito');
    console.log(item);
    try {
      const currentUser = FIREBASE_AUTH.currentUser;
        let contenido = {
            description: item.description,
            gallery: item.gallery,
            hotels: item.hotels,
            id: item.id,
            image: item.image,
            location: item.location,
            pricePeerDay: item.pricePeerDay,
            rating: item.rating,
            reviews: item.reviews,
            title: item.title,
            email: currentUser.email,
        }
        const response = await axios.post(
          'https://wk3pzfqq-5000.use.devtunnels.ms/subirFavorite', contenido,{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        console.log('respuesta del usuario',response);
        setMensaje(response.data)
    } catch (error) {
        setMensaje(error);
        console.log('algo salio mal',response);

    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress} // Corrected this line
      style={[
        {
          backgroundColor: colors.white,
          padding: 4,
          borderRadius: 20,
        },
        shadow.light,
        style,
      ]}>
      <Icon icon={active ? 'FavoriteFilled' : 'Favorite'} size={24} />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
