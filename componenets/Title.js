import {Text,StyleSheet} from 'react-native';
import Colors from '../constants/colors';
function Title(props)
{
    return(
        <Text style={styles.title}>{props.children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title :{
        fontSize : 40,
        fontWeight : 'bold',
        color : 'white',
        textAlign : 'center',
        padding : 15,
        maxWidth : '80%',
    }
})