/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';

export default function App(){

  const [time, setTime] = useState(0);
  const [timer , setTimer] = useState(null);
  const [botao, setBotao] = useState('Iniciar');

  
  function handleToggle() {
    if(timer !== null ) {
      clearInterval(timer);
      setTimer(null);
      setBotao('Iniciar');
    } else {
      setTimer(setInterval(() => {
        setTime(time => time + 0.1);
      }, 100));
      setBotao('Pausar');
    }
  }

  function handleReset() {
    if (timer != null) {
      clearInterval(timer);
      setTimer(null);
    }
    setTime(0);
    setBotao('Iniciar');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c1f30" />
      <View style={styles.body}>
        <View style={styles.cicle}>
          <Text style={styles.timer}>{time.toFixed(2)}</Text>
        </View>
        <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.buttonToggle} onPress={handleToggle} >
              <Text style={styles.toggleText}>{botao}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonReset} onPress={handleReset}>
              <Text style={styles.resetText}>Resetar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#2c1f30',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  cicle: {
    width: 200,
    height: 200,
    borderRadius: 200/2,
    padding: 10,
    alignItems:'center',
    justifyContent: 'center',
    borderWidth:2,
    borderColor:"#C0A7CC"
  },
  timer: {
    fontSize: 40,
    color: "#C0A7CC",
    letterSpacing: 3,
    fontWeight: '700'
  },
  buttonArea: {
    marginTop: 150,
    flexDirection: 'row'
  },
  buttonToggle: {
    width: 120,
    height: 45,
    marginRight: 30,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:10,
    elevation:5,
    backgroundColor: '#C0A7CC',
  },
  toggleText: {
    fontWeight: '700',
    fontSize: 15,
    letterSpacing:1,
    color: '#2c1f30'
  },
  buttonReset: {
    width: 120,
    height: 45,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:10,
    elevation:5,
    backgroundColor: '#2c1f30',
    borderWidth:2,
    borderColor: '#C0A7CC',
  },
  resetText: {
    fontWeight: '700',
    fontSize: 15,
    letterSpacing:1,
    color: '#C0A7CC'
  }
});
