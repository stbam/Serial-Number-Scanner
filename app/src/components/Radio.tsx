import * as React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioComponent = ({checked,setChecked}) => {
console.log("This is checked",checked);
console.log("this is set checked",setChecked);
  return (
    <View style={styles.radioStyles}>
      <View style={styles.radioTitleAlign}>
        <Text style={{backgroundColor:'green',color:'white',borderRadius:4}}>Repair</Text>
        <RadioButton
        value="Repair"
        status={ checked === 'Repair' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Repair')}
      />
      </View>
     
     <View style={styles.radioTitleAlign}>
        <Text style={{backgroundColor:'darkred',color:'white',borderRadius:4}}>Recycle</Text>
        <RadioButton
            value="Recycle"
            status={ checked === 'Recycle' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Recycle')}
        />
     </View>
   
   <View style={styles.radioTitleAlign}>
    <Text style={{backgroundColor:'darkblue',color:'white',borderRadius:4}}>Active</Text>
        <RadioButton
                value="Active"
                status={ checked === 'Active' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Active')}
            />
   </View>

    </View>
  );
};
const styles=StyleSheet.create({
    radioTitleAlign:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    radioStyles:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    }
})
export default RadioComponent;