import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    AddForm: {
        bottom: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",

    },
    textInput: {
        width: '85%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#3867d6',
        paddingHorizontal: 15,
        fontSize: 16,
    },
    AddCircle: {
        backgroundColor: '#3867d6',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 5,
    },

})

export default styles;