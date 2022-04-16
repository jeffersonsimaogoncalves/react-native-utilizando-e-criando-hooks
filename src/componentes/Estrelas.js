import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import estrela from '../assets/estrela.png';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const styleEstrelas = styleEstrelasFunction(grande);
  return (
    <View style={styleEstrelas.estrelas}>
      <Image style={styleEstrelas.estrela} source={estrela} />
      <Image style={styleEstrelas.estrela} source={estrela} />
      <Image style={styleEstrelas.estrela} source={estrela} />
      <Image style={styleEstrelas.estrela} source={estrela} />
      <Image style={styleEstrelas.estrela} source={estrela} />
    </View>
  );
}

const styleEstrelasFunction = grande =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
