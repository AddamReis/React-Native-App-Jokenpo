import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

const imagem = require('../../imgs/jokenpo.png');

class Topo extends Component{
    render(){
      return(
        <View style={styles.centralizar}>
            <Image style={styles.imagemPrincipal} resizeMode='contain' source={imagem} />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    imagemPrincipal: {
        width: 355,
        marginTop: 5,
        margin: 10,
        borderWidth: 0,
        borderRadius: 8,
        borderColor: '#000',
      },
      centralizar: {
        alignItems: 'center'
      }
  });

  export default Topo;