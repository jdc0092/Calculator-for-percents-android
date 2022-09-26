import React from 'react';
import styleTabletForPercents from '../css/styleTabletForPercents';
import {
    Text,
    View,
    TextInput,
    SafeAreaView
} from 'react-native';


const InputsMont = (props) => {

    return (
        <View>
            <SafeAreaView>
                <TextInput
                    style={styleTabletForPercents.input}
                    onChangeText={props.InputsValMont}
                    keyboardType="phone-pad"
                    placeholder='$ Mont'
                />
            </SafeAreaView>
        </View>
    )
}

export default InputsMont;