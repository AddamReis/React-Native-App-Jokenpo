import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AppRegistry,

} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

//PROPS -- permite que as informacoes sejam passadas por parametro para o componente
/*class MeuComponente extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.props1}</Text>
        <Text>{this.props.props2}</Text>
        <Text>{this.props.props3}</Text>
      </View>
    );  
  }
}

class App extends Component{
  render(){
    return(
      <MeuComponente props1='Hello World' props2='Olá Mundo' props3='Opa!'></MeuComponente>
    );
  }
}*/

//STATE --permite criacao de veriaveis cujo valor pode ser alterado a qualquer momento do ciclo de vida da aplicacao
/*class MeuComponente extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    );  
  }
}

class App extends Component{
  
  constructor(props){
    super(props);
    
    this.state = { texto : 'Texto Teste 2'};
    }

    alteraTexto(){
      this.setState({ texto : 'Outra Coisa'}); //setState é a responsável pela atualizacao do valor exibido 
    }

  render(){
    return(
      <View>
      <MeuComponente teste={this.state.texto}></MeuComponente>
      <Button title='Pressione'
      onPress={() => { this.alteraTexto()}}/> 
      </View>
    );
  }
}*/

class App extends Component{
  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '', escolhaComputador : '', resultado : ''}
  }

  jokenpo(escolhaUsuario){
    //alert(escolhaUsuario);

    let nAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch(nAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    if(escolhaComputador === 'pedra'){
      if(escolhaUsuario === 'pedra'){
        resultado = 'Empate';
      }
      if(escolhaUsuario === 'papel'){
        resultado = 'Você Ganhou'; 
      }if(escolhaUsuario === 'tesoura'){
        resultado = 'Você Perdeu';
      }
    }

    if(escolhaComputador === 'papel'){
      if(escolhaUsuario === 'papel'){
        resultado = 'Empate';
      }
      if(escolhaUsuario === 'tesoura'){
        resultado = 'Você Ganhou'; 
      }if(escolhaUsuario === 'pedra'){
        resultado = 'Você Perdeu';
      }
    }

    if(escolhaComputador === 'tesoura'){
      if(escolhaUsuario === 'tesoura'){
        resultado = 'Empate';
      }
      if(escolhaUsuario === 'pedra'){
        resultado = 'Você Ganhou'; 
      }if(escolhaUsuario === 'papel'){
        resultado = 'Você Perdeu';
      }
    }

    /*this.setState({escolhaUsuario : escolhaUsuario, 
                  escolhaComputador : escolhaComputador,
                  resultado : resultado})*/

    this.setState({escolhaUsuario, escolhaComputador, resultado})              
  }

  render(){

    return(
      <View>
        <Topo />
        
        <View style={styles.painelAcoes}>
          
          <View style={styles.btnEscolha}>
          <Button title="Pedra" onPress={() => {this.jokenpo('pedra')}}/>
          </View>

          <View style={styles.btnEscolha}>
          <Button title="Papel" onPress={() => {this.jokenpo('papel')}}/>
          </View>

          <View style={styles.btnEscolha}>
          <Button title="Tesoura" onPress={() => {this.jokenpo('tesoura')}}/>
          </View>

        </View>

        <View style={styles.palco}>

          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='COMPUTADOR' />
          
          <Icone escolha={this.state.escolhaUsuario} jogador='VOCÊ' />

        </View>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
    marginBottom: 10,
    borderWidth: 0,
    borderRadius: 8,
    borderColor: '#000'
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    margin: 8
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 40
  },
});

/*const App = () => {
  return (
    <View>

    </View>
  );
};*/

AppRegistry.registerComponent('AppJokenpo', () => App);
export default App;
