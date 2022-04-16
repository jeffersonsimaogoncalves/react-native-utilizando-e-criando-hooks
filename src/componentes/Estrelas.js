import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  const styleEstrelas = styleEstrelasFunction(grande);
  const getImage = index => {
    if (index < quantidade) {
      return estrela;
    }
    return estrelaCinza;
  };
  const RenderEstrelas = () => {
    const listaEstrela = [];
    for (let i = 0; i < 5; i++) {
      listaEstrela.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQuantidade(i + 1)}
          disabled={!editavel}>
          <Image style={styleEstrelas.estrela} source={getImage(i)} />
        </TouchableOpacity>,
      );
    }
    return listaEstrela;
  };
  return (
    <View style={styleEstrelas.estrelas}>
      <RenderEstrelas />
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
