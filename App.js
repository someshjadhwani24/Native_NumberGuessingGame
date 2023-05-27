import { StyleSheet, ImageBackground ,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import Finish from './screens/Finish';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber,setUserNumber]=useState();
  const [gameIsOver , setGameIsOver] = useState(true);
  const [roundsNumber , setRoundsNumber] = useState(0);

  const [fontsLoaded]=useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setRoundsNumber(numberOfRounds);
  }


  function startNewGameHandler(){
    setUserNumber(null);
    setGameIsOver(true);
    setRoundsNumber(0);
  }


  function startGameHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }


  let screen =<StartGameScreen onPickNumber = {startGameHandler}/>
  if(userNumber) {
    screen=<GameScreen userNumber = {userNumber} onGameOver = {gameOverHandler}/>
  }

  if(gameIsOver && userNumber ){
    screen=<Finish
      rounds = {roundsNumber}
      userNumber = {userNumber}
      onStartNewGame = {startNewGameHandler}
    />
  }


  return (
    <LinearGradient colors={[Colors.primary700 , Colors.secondary500]} style={styles.mainContainer}>
      <ImageBackground source={require('./assets/Images/bg.jpg')} resizeMode='cover' style={styles.mainContainer} imageStyle= {styles.backgroundImage}>
      <SafeAreaView style={styles.mainContainer}>
         {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1
  },
  backgroundImage : {
    opacity : 0.20
  }

});
