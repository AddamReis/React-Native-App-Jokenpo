import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const imgTesoura = require('../../imgs/tesoura.png');
const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');

class Icone extends Component{
    render(){
  
      if(this.props.escolha === 'pedra'){
        return(
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image resizeMode='contain' source={imgPedra}/>
          </View>
        );
        
      }else if(this.props.escolha === 'papel'){
        return(
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image resizeMode='contain' source={imgPapel}/>
          </View>
        );
  
      }else if(this.props.escolha === 'tesoura'){
        return(
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image resizeMode='contain' source={imgTesoura}/>
          </View>
        );
      }
      return false;
    }
  }

  const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 10
      },
    txtJogador: {
        fontSize: 18
      }
  });

  export default Icone;