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


const ButtonMontRest = (props) => {
    return (
        <View style={styleTabletForPercents.ButtonsPercent}>
            <TouchableHighlight
                style={styleTabletForPercents.btnNumbersPercent}
                onPress={props.ButtonRest}
                underlayColor='#fff'>
                <Text style={styleTabletForPercents.btnText}>Mont Restant</Text>
            </TouchableHighlight>
        </View>
    )
}

export default ButtonMontRest;