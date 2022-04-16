import React from 'react';
import {Image, Text, View} from 'react-native';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  return (
    <View>
      <Image source={imagem} accessibilityLabel={nome} />
      <View>
        <Text>{nome}</Text>
        <Text>{distancia}</Text>
      </View>
    </View>
  );
}
