// App.js file
import axios, {isCancel, AxiosError} from 'axios';
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    Button,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    View,
    TouchableOpacity,
    FlatList
} from "react-native";
import { PaperProvider } from 'react-native-paper';
import MyButtonComponent from './Button'
import Form from "./Form";
import Dropdown from './Dropdown';
import React from 'react';
import * as ImagePicker from "expo-image-picker";

export default function App() {

    const [selected, setSelected] = React.useState("");

  
    // State to hold the selected image
    const [image, setImage] = useState(null); 
    
    // State to hold extractedr text
    const [extractedText, setExtractedText] = 
        useState("AXDSPQ4"); // AXDSPQ4 hardcoded value that must later be replaced to look for matching value in a database.****
        
        const data = [
            {key:'1', value:'ukl'},
            {key:'2', value:'uk'},
            {key:'3', value:'uka'},
            {key:'4', value:'u38'}
        ]

        const handleDropDownSelect= (value)=>{
            setSelected(value)
        }

    // Function to pick an image from the 
    // device's gallery
    const pickImageGallery = async () => {
        let result =
            await ImagePicker.launchImageLibraryAsync({
                mediaTypes:
                    ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                base64: true,
                allowsMultipleSelection: false,
            });
        if (!result.canceled) {
        
            // Perform OCR on the selected image
            performOCR(result.assets[0]); 
            
            // Set the selected image in state
            setImage(result.assets[0].uri); 
        }
    };
   

    // Function to capture an image using the 
    // device's camera
    const pickImageCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
            allowsMultipleSelection: false,
        });
        if (!result.canceled) {
        
               // Perform OCR on the captured image
            // Set the captured image in state
            performOCR(result.assets[0]); 
            setImage(result.assets[0].uri);
        }
    };

    // Function to perform OCR on an image 
    // and extract text
    const performOCR = (file) => {
        let myHeaders = new Headers();
        myHeaders.append(
            "apikey",
            
            // ADDD YOUR API KEY HERE 
            "FEmvQr5uj99ZUvk3essuYb6P5lLLBS20"  
        );
        myHeaders.append(
            "Content-Type",
            "multipart/form-data"
        );

        let raw = file;
        let requestOptions = {
            method: "POST",
            redirect: "follow",
            headers: myHeaders,
            body: raw,
        };

        // Send a POST request to the OCR API
        fetch(
            "https://api.apilayer.com/image_to_text/upload",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
            
                // Set the extracted text in state
                setExtractedText(result["all_text"]); 
            })
            .catch((error) => console.log("error", error));
    };
   const [serialNumberStore,setSerialNumber]=useState('')
    
    useEffect(()=>{
       
        return()=>{
            console.log("component unmounted")
        }
    },[image]);

//this fetch serial number from the database.
{/*    useEffect(() => {
        // Fetch posts from the server when the component mounts
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://192.168.1.2:3000/posts'); // Update the IP address
                console.log("Fetched posts:", response.data[1].body);
               setSerialNumber(response.data[1].body);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);*/}
console.log('did it work?',serialNumberStore)
console.log('this works?',selected)

    return (
    <PaperProvider>   
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading2}>
                this app takes image,extracts text/serial number and sends it to google sheets
            </Text>
            <View style={styles.abs}>
                            <Dropdown 
                            data={data}
                            onSelect={handleDropDownSelect}
                            ></Dropdown>
                </View>


            <View style={styles.buttonLayout}>
                <View>
                    <Button
                        title="Pick an image from gallery"
                        onPress={pickImageGallery}/>
                </View>  
                    
                <Button
                    title="Pick an image from camera"
                    onPress={pickImageCamera}
                />
            </View>
          

            {image && (
                <Image
                    source={{ uri: image }}
                    style={{
                        width: 400,
                        height: 300,
                        objectFit: "contain",
                    }}
                />
            )}
            
            <View>


                <View>
                    <Text style={styles.text1}>
                        Extracted text:
                    </Text>
                    <Text style={styles.text1}>
                        {extractedText}
                    </Text>
                    <StatusBar style="auto" />
                    <Form extractedText={extractedText} selected={selected}/>
                </View>
            </View>

        </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        height: "100%",
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "blue",
        textAlign: "center",
    },
    heading2: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "black",
        textAlign: "center",
    },
    text1: {
        fontSize: 16,
        marginBottom: 10,
        color: "black",
        fontWeight: "bold",
    },
    buttonLayout:{
        display:'flex',
        flexDirection:'row'
    },
    buttonSpecs:{
        fontSize:8,
        
    },
    abs:{
        //position:'absolute',
        zIndex:999,
        top:200,
        width:150
    }
  
});