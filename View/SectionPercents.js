
import React, { useState } from "react";
import styleTabletForPercents from "../Components/ComponetsPercent/css/styleTabletForPercents";
import InputPercents from "../Components/ComponetsPercent/InputPercents/InputPercents";
import InputsMont from "../Components/ComponetsPercent/InputMont/InputMont";
import ButtonCalcular from "../Components/ComponetsPercent/ButtonCalcular/ButtonCalcular";
import ButtonMontRest from "../Components/ComponetsPercent/ButtonMontRest/ButtonMonsRest";
import {
    View,
    Text,
    Button,
    ScrollView,
    TouchableHighlight
} from 'react-native';

const SectionPercents = ({ navigation }) => {

    const [valPercents, setvalPercent] = useState(0);
    const [montTotal, setMontTotal] = useState(0);
    const [valMont, setValMont] = useState(0)
    const [montPag, setMontPag] = useState(0);
    const [valMontRest, setValMontRest] = useState(0);
    const [percTotal, setpercTotal] = useState(0)

    const numPercent = 100;
    const montImp = valMont;
    const montPagImp = montPag;
    const montRestImp = valMontRest;
    const restPerc = numPercent - percTotal


    const btnClacular = () => {
        // setPercRest(numPercent - percTotal)
        setValMont(montTotal)
        setMontPag((valPercents * montTotal) / numPercent);
        setpercTotal(valPercents)

    }

    const btnMonRest = () => {
        setValMontRest(montTotal - montPag);
    }


    return (
        <View style={styleTabletForPercents.contContainer}>
            <ScrollView>
                <View style={styleTabletForPercents.contTablet}>
                    <View style={styleTabletForPercents.tabletHeadBgColor}>
                        <View style={styleTabletForPercents.tabletHead}>
                            <Text style={styleTabletForPercents.infoHeadTablet}>N</Text>
                            <Text style={styleTabletForPercents.infoHeadTablet}>%</Text>
                        </View>
                    </View>

                    <View style={styleTabletForPercents.contInfoTablet}>
                        <View style={styleTabletForPercents.displayTable}>
                            <Text style={styleTabletForPercents.infoTablet}>Monto Total: ${montImp.toLocaleString("it-IT")}</Text>
                            <Text style={styleTabletForPercents.infoTablet}>(100%)</Text>
                        </View>
                        <View style={styleTabletForPercents.displayTable}>
                            <Text style={styleTabletForPercents.infoTablet}>Pago: ${montPagImp}</Text>
                            <Text style={styleTabletForPercents.infoTablet}>{percTotal}%</Text>
                        </View>
                        <View style={styleTabletForPercents.displayTable}>
                            <Text style={styleTabletForPercents.infoTablet}>Monto Rest: ${montRestImp}</Text>
                            <Text style={styleTabletForPercents.infoTablet}>Rest: {restPerc}%</Text>
                        </View>
                    </View>
                </View>

                <View style={styleTabletForPercents.contInput}>
                    <View style={styleTabletForPercents.contInfo}>
                        <InputPercents
                            inputValPercents={setvalPercent}
                        />

                        <InputsMont
                            InputsValMont={setMontTotal}
                        />

                    </View>
                    <View style={styleTabletForPercents.contBtn}>
                        <ButtonCalcular
                            ButtonCalcular={btnClacular}
                        />
                        <ButtonMontRest
                            ButtonRest={btnMonRest}
                        />
                    </View>
                </View>
            </ScrollView>





            <View style={styleTabletForPercents.contBtnMenuBottom}>
                <View style={styleTabletForPercents.ButtonsMenu}>
                    <TouchableHighlight
                        style={styleTabletForPercents.btnMenu}
                        onPress={() => navigation.navigate('SectionPercents')}
                        underlayColor='#787878'>
                        <Text style={styleTabletForPercents.btnMenuText}>%</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleTabletForPercents.ButtonsMenu}>
                    <TouchableHighlight
                        style={styleTabletForPercents.btnMenu}
                        onPress={() => navigation.navigate('SectionCalculator')}
                        underlayColor='#787878'>
                        <Text style={styleTabletForPercents.btnMenuText}>Calculator</Text>
                    </TouchableHighlight>
                </View>

                {/* <View style={styleTabletForPercents.ButtonsMenu}>
                    <TouchableHighlight
                        style={styleTabletForPercents.btnMenu}
                        onPress={() => navigation.navigate('OtherSesion')}
                        underlayColor='#787878'>
                        <Text style={styleTabletForPercents.btnMenuText}>Other Sesion</Text>
                    </TouchableHighlight>
                </View> */}
            </View>
        </View>

    )
}


export default SectionPercents;



