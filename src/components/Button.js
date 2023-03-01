import React from 'react';
import {StyleSheet, Dimensions, Text, TouchableHighlight} from 'react-native';

export default props => {
  const styleButtons = [style.button];
  if (props.double) styleButtons.push(style.buttonDouble);
  if (props.triple) styleButtons.push(style.buttonTriple);
  if (props.operation) styleButtons.push(style.operationButton);

  return (
    <>
      <TouchableHighlight onPress={() => props.onClick(props.label)}>
        <Text style={styleButtons}>{props.label}</Text>
      </TouchableHighlight>
    </>
  );
};

const style = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#888',
  },

  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },

  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});
