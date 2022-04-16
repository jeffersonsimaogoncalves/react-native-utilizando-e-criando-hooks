import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={styleProdutores.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} />}
      ListHeaderComponent={TopoLista}
      keyExtractor={({nome}) => nome}
    />
  );
}

const styleProdutores = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 36,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
