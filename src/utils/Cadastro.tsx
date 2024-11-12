import { VStack, Image, Box, Checkbox, ScrollView } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png';
import {Titulo}  from './componentes/titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import {seccoes} from './utils/CadastroEntradaTexto';


export default function Cadastro() {
  const [numSeccao, setNumSeccao] = useState(0);



  function avancarSecao() {
    if (numSeccao < seccoes.length - 1) {
      setNumSeccao(numSeccao + 1);
    }
  }

  function voltarSecao() {
    if (numSeccao > 0) {
      setNumSeccao(numSeccao - 1);
    }
  }

  return (
    <ScrollView flex={3} p={15} >
      <Image source={Logo} alt="Logo Voll" 
      alignSelf="center" mt={10}/>

      <Titulo>{seccoes[numSeccao].titulo}</Titulo>

      <Box>
        {seccoes[numSeccao]?.entradaTexto?.map(entrada => (
          <EntradaTexto
            label={entrada.label}
            placeholder={entrada.placeholder}
            key={entrada.id}
          />
        ))}
      </Box>    
      <Box>
          

        {seccoes[numSeccao]?.checkbox?.map(entrada => (
          <Checkbox key={entrada.id} value={entrada.value}>
            {entrada.value}
          </Checkbox>
        ))}
      </Box>

      {numSeccao > 0 && (
        <Botao onPress={voltarSecao} bgColor="gray.300">
          Voltar
        </Botao>
      )}

      <Botao onPress={avancarSecao} mt={4}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
