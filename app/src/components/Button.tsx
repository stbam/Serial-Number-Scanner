import * as React from 'react';
import { Button } from 'react-native-paper';

const MyComponent = () => (
  <Button buttonColor='red' mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);

export default MyComponent;