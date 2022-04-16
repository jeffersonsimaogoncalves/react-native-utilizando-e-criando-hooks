import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Estrela from './Estrela';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  const RenderEstrelas = () => {
    const listaEstrela = [];
    for (let i = 0; i < 5; i++) {
      listaEstrela.push(
        <Estrela
          key={i}
          onPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />,
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

const styleEstrelas = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
  },
});
