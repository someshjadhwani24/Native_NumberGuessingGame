import { TextInput, Text, View,StyleSheet,Alert,Dimensions} from 'react-native';
import {useState} from 'react';
import PrimaryButton from '../componenets/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../componenets/Title';

function StartGameScreen(props){

    const [enteredNumber,setEnteredNumber] = useState("");

    function numberInputHandler(inputText){
        setEnteredNumber(inputText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <1 || chosenNumber >99){
            Alert.alert('Invalid Number','Number has to be a integer between 1 and 99',[{text:'Okay',style:'default',onPress:resetInputHandler}]);
            return;
        }
        props.onPickNumber(chosenNumber);
    }


    return (
        <View style={styles.screenContainer}>
            <Title>
                Guess My Number
            </Title>
            <View style = {styles.inputContainer}>
                <View style={styles.textInputBox}>
                    <Text style={styles.instructionText}>Enter a Number.</Text>
                    <TextInput placeholder='' style={styles.numInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' value={enteredNumber} onChangeText={numberInputHandler}></TextInput>
                </View>
                <View style = {styles.buttonContainer}>
                    <PrimaryButton size={20} onPress={resetInputHandler} >Reset</PrimaryButton>
                    <PrimaryButton size={20} onPress={confirmInputHandler} >Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screenContainer : {
        flex:1,
        marginTop : deviceHeight < 400 ? 20 : 100,
        alignItems : 'center',

    },
    instructionText : {
        color: 'white',
        fontSize : 20,
        marginTop : 10,


    },
    inputContainer : {
        marginTop : deviceHeight < 400 ? 16 : 36,
        marginHorizontal : 36,
        borderRadius : 10,
        padding:12,
        shadowColor : 'black',
        shadowOffset : {width :0 , height : 2},
        shadowRadius : 6,
        shadowOpacity : 0.25,
        backgroundColor :Colors.primary900,
        opacity : 0.75,
    },
    buttonContainer : {
        padding : 12,
        marginTop : deviceHeight < 400 ? 0 : 10,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
    },
    numInput : {
        height: 50,
        fontSize : 32,
        width : 60,
        borderBottomColor : Colors.secondary500,
        borderBottomWidth : 2,
        color : Colors.secondary500,
        marginTop : 8,
        fontWeight : 'bold',
        textAlign : 'center'
    
    },
    textInputBox : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    }
});