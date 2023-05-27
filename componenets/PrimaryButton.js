import {Text, View,Pressable,StyleSheet,Dimensions} from 'react-native';
import Colors from '../constants/colors';

function PrimaryButton (props){
    return (
        <View style = {styles.buttonOuterContainer}>
            <Pressable onPress={props.onPress} style = {({pressed}) => pressed ? [styles.pressed , styles.buttonInnerContainer]:styles.buttonInnerContainer} >
            <Text style = {{
                color:'white',
                fontSize : props.size,
                textAlign : 'center'
            }} >
                {props.children}
            </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    buttonOuterContainer : {
        borderRadius : 60,
        borderColor : Colors.secondary500,
        borderWidth : 1,
        margin : 6,
        overflow : 'hidden',
        width : 100,
        justifyContent : 'center',
        height : 40,


    },
    buttonInnerContainer : {
        backgroundColor : Colors.primary500,
        paddingVertical : 8,
        paddingHorizontal : 16,
        flex :1,
        justifyContent : 'center',
        

    },
    buttonText : {
        color : 'white',
        textAlign : 'center',
        fontSize : 16,

    },
    pressed : {
        opacity : 0.75
    }

});