import '../css/styleForCalculator';
import styleForCalculator from '../css/styleForCalculator';
import {
    View,
    Text,
    Button,
    TouchableHighlight
} from 'react-native';

const ButtonsNumeric = (props) => {


    return (
        <View style={styleForCalculator.contButtons}>
            <View style={styleForCalculator.contBtnNumeric}>
                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnClear}
                        onPress={() => props.BtnClear('')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>CE</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnOperator}
                        onPress={() => props.insertNumber('%')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>%</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnOperator}
                        onPress={() => props.insertNumber('-+')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>-+</Text>
                    </TouchableHighlight>
                </View>
                        
                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnOperator}
                        onPress={() => props.insertNumbersss('*')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>*</Text>
                    </TouchableHighlight>
                </View>
            </View>



            <View style={styleForCalculator.contBtnNumeric}>
                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('1')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>1</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('2')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>2</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('3')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>3</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnOperator}
                        onPress={() => props.insertNumber('+')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={styleForCalculator.contBtnNumeric}>
                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('4')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>4</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('5')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>5</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('6')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>6</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnOperator}
                        onPress={() => props.insertNumber('-')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>-</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={styleForCalculator.contBtnNumeric}>
                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('7')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>7</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('8')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>8</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('9')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>9</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnOperator}
                        onPress={() => props.insertNumber('/')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>/</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={styleForCalculator.contBtnNumeric}>
                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('.')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>.</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnNumbersCalculator}
                        onPress={() => props.insertNumber('0')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>0</Text>
                    </TouchableHighlight>
                </View>

                <View style={styleForCalculator.Buttons}>
                    <TouchableHighlight
                        style={styleForCalculator.btnOperator}
                        onPress={() => props.calculate('=')}
                        underlayColor='#787878'>
                        <Text style={styleForCalculator.btnText}>=</Text>
                    </TouchableHighlight>
                </View>

                
            </View>

        </View>
    )
}

export default ButtonsNumeric;