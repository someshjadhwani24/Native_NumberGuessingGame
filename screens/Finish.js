import { Image, Text, View,StyleSheet,Dimensions} from 'react-native';
import Title from '../componenets/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../componenets/PrimaryButton';
function Finish({rounds,userNumber,onStartNewGame}){
    return (
        <View style={styles.mainContainer}>
            <Title>Game Over!!</Title>
            <View style={styles.imageContainer}>
                <Image style = {styles.image} source={require('../assets/Images/success.png')} />
            </View>
            <Text style = {styles.text}>
                The phone needed <Text style={styles.textBold}>{rounds}</Text> rounds to guess <Text style={styles.textBold}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress = {onStartNewGame}>New Game</PrimaryButton>
        </View>
    );

}

export default Finish;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    imageContainer : {
        borderRadius : deviceWidth < 350 ? 75 :150,
        overflow : 'hidden',
        width : deviceWidth < 350 ? 150 :300,
        height : deviceWidth < 350 ? 150 :300,
        borderWidth : 4,
        borderColor : Colors.primary700,
        margin : 36,
    },
    image : {
        width :'100%',
        height : '100%'
    },
    mainContainer : {
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent :'center',
        padding : 24,
        flex:1,

    },
    textBold : {
        fontWeight : 'bold',
        color : Colors.primary500
    },
    text :{
        color : 'white',
        fontSize : 22,
        textAlign : 'center',
        marginBottom : 24,
    }



});


