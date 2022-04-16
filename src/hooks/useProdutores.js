import {useEffect, useState} from 'react';
import {carregaProdutores} from '../servicos/carregaDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    return () => {
      const retorno = carregaProdutores();
      setTitulo(retorno.titulo);
      setLista(retorno.lista);
    };
  }, []);

  return [titulo, lista];
}
