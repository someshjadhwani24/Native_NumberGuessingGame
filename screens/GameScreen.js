import { TextInput, Text, View,StyleSheet,Alert,Dimensions, FlatList} from 'react-native';
import Title from '../componenets/Title';
import { useState , useEffect } from 'react';
import Guess from '../componenets/Guess';
import PrimaryButton from '../componenets/PrimaryButton';
import {Ionicons} from '@expo/vector-icons' ;
import GuessLogItem from '../componenets/GuessLogItem';

function generateRandomBetween(min,max,exclude){
    const randomNum = Math.floor(Math.random() * (max-min)) + min ;
    if(randomNum === exclude){
        return generateRandomBetween(min,max,exclude);
    }
    else {
        return randomNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;


function GameScreen ({userNumber , onGameOver}){
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const[currentGuess,setCurrentGuess] = useState(initialGuess);
    const [guessRounds,setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess , userNumber , onGameOver]);

    useEffect(() => {
        minBoundary =1;
        maxBoundary =100;
    },[]);

    function nextGuessHandler(direction){
        if(
            (direction==='lower' && currentGuess < userNumber) || 
            (direction==='Greater' && currentGuess > userNumber )
            
        ){
            Alert.alert('Invalid Input','Dont Lie.',[{text:'Sorry!',style:'cancel'}]);
            return;
        }

        if(direction==='lower'){
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1; 
        }
        const temp = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(temp);
        setGuessRounds(prevGuessRounds => [temp,...prevGuessRounds]);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View style={styles.screen2}>
                <Guess>{currentGuess}</Guess>
                <View style={styles.mainContainer}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Higher</Text>
                        <PrimaryButton size={28} onPress = {nextGuessHandler.bind(this,'Greater')}  ><Ionicons  name = "md-add" size={24} color='white'/></PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText} >Lower</Text>
                        <PrimaryButton onPress = {nextGuessHandler.bind(this,'lower')} size={28} ><Ionicons  name = "md-remove" size={24} color='white'/></PrimaryButton>
                    </View>
            </View>
                
            </View>
            <View style={styles.listContainer}>
                <FlatList data ={guessRounds} keyExtractor={(item) => item} renderItem={(itemData)=> <GuessLogItem roundNum = {guessRounds.length - itemData.index} guess = {itemData.item} ></GuessLogItem>}/>
            </View>
            
        </View>
    )
}

export default GameScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen:{
        marginTop : deviceHeight < 400 ? 20 :50,
        flex:1,
        padding:12,
        alignItems : 'center',
        
    },
    screen2:{
        alignItems : 'stretch',
        width : '80%',
        
    },
    mainContainer : {
        flexDirection : 'row',
        justifyContent :'space-evenly',

    },
    buttonContainer : {
        marginTop : deviceWidth < 350 ? 10 :20,
        justifyContent : 'center',
        alignContent : 'center',
        
    },
    buttonText : {
        textAlign : 'center',
        fontSize : 25,
        fontWeight : 'bold',
        color : 'white',
        paddingBottom : 5
    },
    listContainer : {
        paddingVertical : 30,
        marginBottom : 5,
        flex:1,
    }
})