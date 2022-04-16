import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {carregaProdutores} from '../../../servicos/carregaDados';

export default function Produtores() {
  useEffect(() => {
    return () => {
      const retorno = carregaProdutores();
      console.log(retorno);
    };
  }, []);

  return (
    <View>
      <Text>Produtores</Text>
    </View>
  );
}
