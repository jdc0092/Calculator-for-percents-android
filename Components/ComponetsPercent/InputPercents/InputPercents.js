import React, { useState, } from 'react';
import styleTabletForPercents from '../css/styleTabletForPercents';
import {
    Text,
    View,
    TextInput,
    SafeAreaView
} from 'react-native';


const InputsPercents = (props) => {

    return (
        <View>
            <SafeAreaView>
                <TextInput
                    style={styleTabletForPercents.input}
                    onChangeText={props.inputValPercents}
                    keyboardType="phone-pad"
                    placeholder='% Here...'
                    // maxLength={3}
                />
            </SafeAreaView>
        </View>
    )
}

export default InputsPercents;