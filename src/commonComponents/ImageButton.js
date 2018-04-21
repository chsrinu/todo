import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const ImageButton = ({ onPress, imgSrc }) => (
<TouchableOpacity onPress={onPress}>
  <Image style={{ flex: 0.5, aspectRatio: 1.5, resizeMode: 'contain' }} source={imgSrc} />
</TouchableOpacity>
);
export { ImageButton };
