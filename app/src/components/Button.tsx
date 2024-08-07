import * as React from 'react';
import { Button } from 'react-native-paper';

const MyButtonComponent = () => (
  <Button buttonColor='lightblue' mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);

export default MyButtonComponent;