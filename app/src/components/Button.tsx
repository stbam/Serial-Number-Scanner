import * as React from 'react';
import { Button} from 'react-native-paper';
import {StyleSheet} from 'react-native'
const MyButtonComponent = ({title,onPress}) => (
  <Button buttonColor='lightblue' mode="contained" onPress={onPress}
  >
    {title}
  </Button>
);
const styles = StyleSheet.create({
 
})

export default MyButtonComponent;