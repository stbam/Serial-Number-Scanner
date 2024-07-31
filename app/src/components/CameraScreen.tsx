import { View, Text, ActivityIndicator } from 'react-native'
import { SafeAreaView, StyleSheet} from 'react-native';
import {useCameraPermission,useCameraDevice,Camera} from 'react-native-vision-camera';
import React from 'react'
import { useEffect } from 'react';


const CameraScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission()
  const device =  useCameraDevice('back'); {/* back means we use camera from the back */}


  useEffect(() =>{
      if(!hasPermission){
        requestPermission();

      }
  },[hasPermission])
  if(!hasPermission){
    return <ActivityIndicator/>
  }

  console.log(hasPermission);

  if(!device){
    return <Text>Camera device not found</Text>
  }
  return (
    <SafeAreaView style={{flex:1}}>
          <View style={{flex:1}}>
             <Camera style={StyleSheet.absoluteFill} device={device} isActive={true}></Camera>
        </View>
    </SafeAreaView>
   
  )
  
}

export default CameraScreen