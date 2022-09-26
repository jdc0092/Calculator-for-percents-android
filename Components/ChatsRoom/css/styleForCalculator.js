
import { StyleSheet } from 'react-native';
const styleForCalculator = StyleSheet.create({
    contContainer: {
        justifyContent: 'space-between',
        height: '100%'
    },

    contInfo: {
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-between'

    },

    contBtnMenuBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        width: "100%"
    },

    Buttons: {
        borderRadius: 0,
        width: '100%',
        flex: 1,

    },

    viewNumeric: {
        backgroundColor: '#ccc',
        height: 50,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'flex-end',
        padding: 15,
        borderRadius: 10,
        shadowOpacity: 0

    },

    viewText: {
        fontSize: 18,
        fontWeight: '700'
    },

    contButtons: {
        alignContent: 'stretch',
        flexWrap: 'wrap',
    },

    contBtnNumeric: {
        flexDirection: 'row',
    },


    Buttons: {
        flex: 1,
        width: '100%',
        marginBottom: 15,
        marginLeft: 5,
        marginRight: 5,
    },

    ButtonsMenu: {
        flex: 1,
        width: '100%',
    },


    btnNumbersCalculator: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#3a3a3a',
        borderRadius: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnOperator: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#c59a00',
        borderRadius: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnClear: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#b10000',
        borderRadius: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
    },

    btnMenu: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#607e15',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    btnMenuText: {
        color: '#fff',
        fontSize: 18,
    }

});

export default styleForCalculator;