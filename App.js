import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {
  const [displayValue, setDisplayValue] = React.useState(0);

  const addDigit = n => {
    setDisplayValue(n);
  };
  function clearMemory() {
    setDisplayValue(0);
  }
  const setOperation = n => {
    
  };

  return (
    <>
      <View style={style.container}>
        <Display value={displayValue} />
        <View style={style.button}>
          <Button label="AC" triple onClick={clearMemory} />
          <Button label="/" operation onClick={setOperation} />
          <Button label="7" onClick={addDigit} />
          <Button label="8" onClick={addDigit} />
          <Button label="9" onClick={addDigit} />
          <Button label="*" operation onClick={setOperation} />
          <Button label="4" onClick={addDigit} />
          <Button label="5" onClick={addDigit} />
          <Button label="6" onClick={addDigit} />
          <Button label="-" operation onClick={setOperation} />
          <Button label="1" onClick={addDigit} />
          <Button label="2" onClick={addDigit} />
          <Button label="3" onClick={addDigit} />
          <Button label="+" operation onClick={setOperation} />
          <Button label="0" double onClick={addDigit} />
          <Button label="." onClick={addDigit} />
          <Button label="=" operation onClick={setOperation} />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
