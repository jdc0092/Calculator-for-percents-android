import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SectionPercents from "../View/SectionPercents";
import SectionCalculator from "../View/SectionCalculator";
import OtherSesion from "../View/OtherSesion"


const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="SectionPercents"
                    component={SectionPercents}
                    options={{ title: '%' }}
                />


                <Stack.Screen
                    name="SectionCalculator"
                    component={SectionCalculator}
                    options={{ title: 'Calculator' }}
                />

                {/* <Stack.Screen
                    name="Other Sesion"
                    component={OtherSesion}
                    options={{ title: 'Other Sesion' }}
                /> */}


            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;