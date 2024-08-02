
import { Text, View,TextInput, Button,Switch} from 'react-native'
import React, { Component,useState } from 'react'


const Form = () => {
    const [cameraIsEnabled,setCameraIsEnabled]=useState(true);
    const [isEnabled,setIsEnabled]=useState(true);
    const [MicrophoneIsEnabled,setMicrophoneIsENabled]=useState(true);
    const [speakerIsEnabled,setSpeakerIsENabled]=useState(true);
    const toggleSwitch = ()=> setCameraIsEnabled(previousState=>!previousState);
    const toggleSecondSwitch = ()=> setIsEnabled(previousState=>!previousState);
    const toggleThirdSwitch=()=>setMicrophoneIsENabled(previousState=>!previousState);
    const toggleFourthSwitch=()=>setSpeakerIsENabled(previousState=>!previousState)
    console.log({speakerIsEnabled})
  return (
    <View>
        <Text>Camera is working? {cameraIsEnabled? 'Yes':'No'}</Text>
        <Switch 
        onValueChange={toggleSwitch}
        value={cameraIsEnabled}
        />
        <Text>Microphone is working? {isEnabled? 'Yes':'No'}</Text>
        <Switch 
        onValueChange={toggleSecondSwitch}
        value={isEnabled}
        />
        
        <Text>Keyboard is working? {MicrophoneIsEnabled? 'Yes':'No'}</Text>
        <Switch 
        onValueChange={toggleThirdSwitch}
        value={MicrophoneIsEnabled}
        />
        <Text>Speaker is working?{speakerIsEnabled? 'Yes':'No'}</Text>
        <Switch 
        onValueChange={toggleFourthSwitch}
        value={speakerIsEnabled}
        />
       <Button title='Submit'/>
      </View>
  )
}

export default Form;