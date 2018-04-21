import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { dDimensions } from '../constants';

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.ButtonStyles} onPress={onPress}>
  <Text style={styles.ButtonTextStyle}>
    {children}
  </Text>
  </TouchableOpacity>
);
const styles = {
  ButtonStyles: {
  backgroundColor: '#448aff',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: 30,
  padding: 12,
  marginTop: 10
},
ButtonTextStyle: {
  color: 'white',
  alignSelf: 'center',
  fontSize: dDimensions.fontSize,
  fontWeight: 'bold'
 }
};

export { Button };
