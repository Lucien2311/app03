import { VStack, Image, Text, Box, FormControl, 
Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { Titulo } from '../componentes/Titulo'
import { EntradaTexto } from '../componentes/EntradaTexto';
import { Botao } from '../componentes/Botao';


export default function Login({navigation}) {
  return (
      <VStack flex={3} alignItems="center" p={15}
      justifyContent="center">
        <Image source={Logo} alt="Logo Voll" /> 

        <Titulo>
        Faça login em sua conta
        </Titulo>     
        <Box>
          <EntradaTexto
          label= "CPF"
          placeholder = "Somente números"
          />
            <EntradaTexto
          label= "Senha"
          placeholder = "Insira a sua senha"
          />
        </Box>
        
         <Botao> Entrar </Botao>
        
        <Link href
        ='https://blog-static.petlove.com.br/wp-content/uploads/2021/08/Gato-filhote-7.jpg?_gl=1*1qcpk6g*_gcl_au*NjMyNzgwODAyLjE3MzA4NDgxMjE.'
        mt={2}>
        Esqueci minha senha?
        </Link>
        <Box w="100%" flexDirection="row"
        justifyContent="center" mt={8}> 
          <Text>Primeiro acesso. </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
           <Text color="blue.500"> 
            Faça seu cadastro
            </Text> 
          </TouchableOpacity>
        </Box>
      </VStack>
  );
}

