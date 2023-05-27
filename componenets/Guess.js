import {Text, View,StyleSheet,Dimensions} from 'react-native';
import Colors from '../constants/colors';

function Guess({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
        
    )
}

export default Guess;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container : {
        borderWidth : 2,
        borderColor : Colors.secondary500,
        padding : deviceWidth < 350 ? 12 :24 ,
        margin : deviceWidth < 350 ? 12 :24 ,
        borderRadius : 8,
        alignItems : 'center',
        justifyContent : 'center'
    },
    numberText :{
        color : Colors.secondary500,
        fontSize : deviceWidth < 350 ? 28 :36 ,
        fontWeight : 'bold'
    }

});
