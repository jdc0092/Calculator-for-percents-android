import React from "react-native";
import styleForCalculator from '../css/styleForCalculator';
import {
    View,
    Text,
    Button
} from 'react-native';

const ViewNumeric = (props) => {
    return (
        <View style={styleForCalculator.viewNumeric}>
            <Text style={styleForCalculator.viewText}>
                {props.insertNumber}
            </Text>
        </View>
    )
}

export default ViewNumeric;