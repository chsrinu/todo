import React from 'react';
import { View, Text } from 'react-native';
import { dDimensions, colors } from '../constants';

const Header = ({ label }) => (
  <View>
    <Text style={styles.textStyle}>{label}</Text>
  </View>
);
const styles = {
  textStyle: {
    fontSize: dDimensions.headerFontSize,
    color: colors.headerTextColor,
    textAlign: 'center'
  },
  containerStyle: {
    backgroundColor: colors.headerBgColor
  }
};

export { Header };
