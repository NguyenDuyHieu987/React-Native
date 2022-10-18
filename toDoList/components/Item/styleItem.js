import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Item: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e4e4e4',
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    BoxNumber: {
        marginRight: 20,
        padding: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    even: {
        backgroundColor: '#2d98da',
    },
    odd: {
        backgroundColor: '#00b894',
    },
    Number: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    Info: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default styles;