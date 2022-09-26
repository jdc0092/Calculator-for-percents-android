
import React, { useState } from "react";
import styleForCalculator from "../Components/ComponetsCalculator/css/styleForCalculator";
import ButtonsNumeric from "../Components/ComponetsCalculator/ButtonsNumeric/ButtonsNumeric";
import ViewNumeric from "../Components/ComponetsCalculator/ViewNumeric/ViewNumeric";
import { evaluate } from 'mathjs'
import {
    View,
    Text,
    Button,
    ScrollView,
    TouchableHighlight
} from 'react-native';



const SectionCalculator = ({ navigation }) => {

    const [Numbers, setNumbers] = useState('')

    const marcNumbers = (val) => {
        setNumbers(Numbers + val)
    }



    const calculate = (val) => {
        if (Numbers) {
            setNumbers(evaluate(Numbers))
        }
        else {
            alert('Introdusca un valor')
        }
    }




    return (
        <View style={styleForCalculator.contContainer}>
            <ScrollView>
                <View style={styleForCalculator.contInfo}>

                    <View>
                        <ViewNumeric
                            insertNumber={Numbers}
                        />
                    </View>

                    <View>
                        <ButtonsNumeric
                            insertNumber={marcNumbers}
                            calculate={calculate}
                            BtnClear={setNumbers}
                        />
                    </View>
                </View>
            </ScrollView>



            <View style={styleForCalculator.contBtnMenuBottom}>
                <View style={styleForCalculator.ButtonsMenu}>
                    <TouchableHighlight
                        style={styleForCalculator.btnMenu}
                        onPress={() => navigation.navigate('SectionPercents')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnMenuText}>%</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.ButtonsMenu}>
                    <TouchableHighlight
                        style={styleForCalculator.btnMenu}
                        onPress={() => navigation.navigate('SectionCalculator')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnMenuText}>Calculator</Text>
                    </TouchableHighlight>
                </View>

                {/* <View style={styleForCalculator.ButtonsMenu}>
                    <TouchableHighlight
                        style={styleForCalculator.btnMenu}
                        onPress={() => navigation.navigate('OtherSesion')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnMenuText}>Other Sesion</Text>
                    </TouchableHighlight>
                </View> */}
            </View>
        </View>
    )
}


export default SectionCalculator;
