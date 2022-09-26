import React from "react";
import styleTabletForPercents from '../css/styleTabletForPercents';
import {
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
    TouchableHighlight
} from 'react-native';


const ButtonResult = (props) => {
    return (
        <View style={styleTabletForPercents.ButtonsPercent}>
            <TouchableHighlight
                style={styleTabletForPercents.btnNumbersPercent}
                onPress={props.ButtonCalcular}
                underlayColor='#fff'>
                <Text style={styleTabletForPercents.btnText}>Calcular %</Text>
            </TouchableHighlight>
        </View>
    )
}

export default ButtonResult;