import react from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/MainHeader';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title='Home'/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    }
})

export default HomeScreen;
