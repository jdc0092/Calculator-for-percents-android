
import React from "react";
import styleForCalculator from "../Components/ChatsRoom/css/styleForCalculator";
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight
} from 'react-native';

const SectionChatsRoom = ({ navigation }) => {

    return (
        <View style={styleForCalculator.contContainer}>
            <ScrollView>
                {/* <Chats /> */}
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

                <View style={styleForCalculator.ButtonsMenu}>
                    <TouchableHighlight
                        style={styleForCalculator.btnMenu}
                        onPress={() => navigation.navigate('OtherSesion')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnMenuText}>Other Sesion</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>

    )
}


export default SectionChatsRoom;



