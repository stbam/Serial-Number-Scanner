import { View, Text,StyleSheet } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'

import React from 'react'


const Dropdown = ({data,selected,onSelect}) => {




  
    return(
        <View style={styles.abs}> 

      <SelectList 
          setSelected={onSelect} 
          data={data} 
          save="value"
          style={{zIndex: 10}}
      />
        </View>
    )
  
}
const styles=StyleSheet.create({
    abs:{
        zIndex:3
    }
})

export default Dropdown