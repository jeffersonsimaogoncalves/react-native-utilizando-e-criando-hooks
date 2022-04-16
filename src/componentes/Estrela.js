import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };
  const styleEstrelas = styleEstrelasFunction(grande);
  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image style={styleEstrelas.estrela} source={getImagem()} />
    </TouchableOpacity>
  );
}
const styleEstrelasFunction = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
