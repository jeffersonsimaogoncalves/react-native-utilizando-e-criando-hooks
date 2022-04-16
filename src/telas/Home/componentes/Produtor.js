import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  return (
    <View style={styleProdutor.cartao}>
      <Image
        source={imagem}
        accessibilityLabel={nome}
        style={styleProdutor.imagem}
      />
      <View style={styleProdutor.informacoes}>
        <Text style={styleProdutor.nome}>{nome}</Text>
        <Text style={styleProdutor.distancia}>{distancia}</Text>
      </View>
    </View>
  );
}

const styleProdutor = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
