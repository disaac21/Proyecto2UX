import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { colors, sizes, spacing } from '../constants/theme';
import { Text } from 'galio-framework';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';

const MainHeader = ({title}) => {
    const insets = useSafeAreaInsets();
    return <View style={[styles.container, {marginTop: insets.top}]}>
        <Icon icon = "Hamburger"/>
        <Text style={styles.title}>
            {title}
        </Text>
        <Icon icon="Notification" />
    </View>
}

export default MainHeader;

const styles = StyleSheet.create({
    container:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.l,
    },
    title: {
        fontSize: sizes.h3,
        fontWeight: 'bold',
    }
})