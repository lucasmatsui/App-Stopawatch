/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState} from 'react';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';


import Timer from './components/Timer';

export default function App(){

  const [start, setStart] = useState(0);
  const [now, setNow] = useState(0);
  const [timer, setTimer] = useState(null);

  const[timeBefore, setTimeBefore] = useState(0);

  const [nameButton, setNameButton] = useState('Iniciar');

  function handleStart() {
    if(timer !== null) {
      clearInterval(timer);
      setTimeBefore(time);
      setStart(0);
      setNow(0);
      setTimer(null);
      setNameButton("Iniciar");
    } else {
        setNameButton("Pausar");
        setStart(new Date().getTime());
        setNow(new Date().getTime());
        setTimer(setInterval(() => {
          setNow(new Date().getTime() );
        }, 100));
    }
  }

  function handleReset() {
    clearInterval(timer);
    setTimeBefore(0);
    setStart(0);
    setNow(0);
    setTimer(null);
  }

  const time = (now - start) + timeBefore;

  return (

    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c1f30" />
      <View style={styles.body}>
        <View style={styles.cicle}>
          <Timer interval={time}/>
        </View>
        <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.buttonToggle} onPress={handleStart}  >
              <Text style={styles.toggleText}>{nameButton}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonReset} onPress={handleReset} >
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
