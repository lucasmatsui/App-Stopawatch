import React from 'react';
import {Text , StyleSheet} from 'react-native';
import moment from 'moment';

export default function Timer({ interval }) {
  const duration = moment.duration(interval);

  const pad = (n) => n < 10 ? '0' + n : n;

  return (
    <Text style={duration >= 60000 ? styles.timer : styles.timer2}>
      {duration >= 60000 && `${pad(duration.minutes())}:`}
      {pad(duration.seconds())}:
      {pad(Math.floor(duration.milliseconds() / 10))}
    </Text>
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 30,
    color: "#C0A7CC",
    letterSpacing: 2,
    fontWeight: '700'
  },
  timer2: {
    fontSize: 45,
    color: "#C0A7CC",
    letterSpacing: 2,
    fontWeight: '700'
  }
  
});