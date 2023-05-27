import { TextInput, Text, View,StyleSheet,Alert} from 'react-native';
import Colors from '../constants/colors';

function GuessLogItem ({roundNum ,guess }){
    return (
        <View style={styles.listItem}>
            <Text style = {styles.textItem}>#{roundNum}</Text>
            <Text style = {styles.textItem}>Opponenet's Guess : {guess}</Text>
        </View>


    );
}

export default GuessLogItem ;

const styles = StyleSheet.create({
    listItem : {
        borderColor : Colors.primary700,
        borderRadius : 15,
        borderWidth : 2,
        padding : 16,
        marginVertical: 8,
        backgroundColor : Colors.secondary500,
        flexDirection :'row',
        justifyContent : 'space-between',
        width : '100%',
        opacity : 0.75
    },
    textItem : {
        fontWeight : 'bold',
        fontSize : 16,
    }
})