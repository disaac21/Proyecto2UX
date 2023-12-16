import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { colors, shadow } from '../../constants/theme';
import Icon from './Icon';

const FavoriteButton = ({ active, style, item }) => {
  const handlePress = (item, active) => {
    // Call the provided onToggleFavorite function and pass the item
    console.log('le di favorito');
    console.log(item);

    
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        {
          backgroundColor: colors.white,
          padding: 4,
          borderRadius: 20,
        },
        shadow.light,
        style,
      ]}
    >
      <Icon icon={active ? 'FavoriteFilled' : 'Favorite'} size={24} />
    </TouchableOpacity>
  );
};

export default FavoriteButton;