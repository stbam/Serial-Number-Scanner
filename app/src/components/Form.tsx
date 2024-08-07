import { Text, View, Switch, Button,StyleSheet } from 'react-native';
import React, { useState } from 'react';
import MyButtonComponent from './Button';
import CustomSwitch from './Switch'


const Form = ({extractedText,data,selected}) => {
  
  const [cameraIsEnabled, setCameraIsEnabled] = useState(true);
  const [microphoneIsEnabled, setMicrophoneIsEnabled] = useState(true);
  const [keyboardIsEnabled, setKeyboardIsEnabled] = useState(true);
  const [speakerIsEnabled, setSpeakerIsEnabled] = useState(true);
console.log('this is in the forn',selected);

  const toggleCameraSwitch = () => setCameraIsEnabled(previousState => !previousState);
  const toggleMicrophoneSwitch = () => setMicrophoneIsEnabled(previousState => !previousState);
  const toggleKeyboardSwitch = () => setKeyboardIsEnabled(previousState => !previousState);
  const toggleSpeakerSwitch = () => setSpeakerIsEnabled(previousState => !previousState);

  const handleSubmit = async () => {
    const formData = {
      selected:selected,
        serialNumber: extractedText, // Use static text for testing
      cameraIsEnabled: cameraIsEnabled ? 'yes':'no',
      microphoneIsEnabled:microphoneIsEnabled? 'yes':'no',
      keyboardIsEnabled:keyboardIsEnabled? 'yes':'no',
      speakerIsEnabled:speakerIsEnabled? 'yes:':'no'
    };
//https://script.google.com/macros/s/AKfycbxvXJ4dR9Bd5DnLl6VY0OZ1MskhzSO2GI3DWzzhdU8WkHvDv2IFbLLSvwvQMXCx-gI2nw/exec
    var fetch_link = 'https://script.google.com/macros/s/AKfycbxGcNCelWJTzdY4PwGSe2ujY4sRQtGeRKY2Bp3wNhRgEmsWvREiDMKq6TVLawOLqtAuJw/exec';
    try {
      const response = await fetch(fetch_link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Form data submitted successfully:', responseData);
      // Handle successful response data as needed
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle error as needed
    }
    console.log("Extracted Text in App:", extractedText);

  };

  return (
    <View>

      <Text>Camera is working? {cameraIsEnabled ? 'Yes' : 'No'}</Text>
      <Switch
        onValueChange={toggleCameraSwitch}
        value={cameraIsEnabled}
      />
      <Text>Microphone is working? {microphoneIsEnabled ? 'Yes' : 'No'}</Text>
      <Switch
        onValueChange={toggleMicrophoneSwitch}
        value={microphoneIsEnabled}
      />
      <Text>Keyboard is working? {keyboardIsEnabled ? 'Yes' : 'No'}</Text>
      <Switch
        onValueChange={toggleKeyboardSwitch}
        value={keyboardIsEnabled}
      />
      <Text>Speaker is working? {speakerIsEnabled ? 'Yes' : 'No'}</Text>
      <Switch
        onValueChange={toggleSpeakerSwitch}
        value={speakerIsEnabled}
      />
      <Button title='Submit' onPress={handleSubmit} />
    </View>
  );
};


export default Form;
