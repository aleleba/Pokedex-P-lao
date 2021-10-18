import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    titleText: {
        color: "black",
        textAlign: "center",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 25
    },
    btn: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16,
        cursor: "pointer"
    },
    btnText: {
        color: "white",
        textAlign: "center"
    },
    pokemonName: {
        color: "black",
        textAlign: "center",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 18
    },
    containerList: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        borderTopWidth: 0.2
    },
    rowList:{
        flexDirection: "row",
        alignItems: "center"
    },
    textList: {
        fontSize: 20
    },
    imageList: {
        width: 400,
        height: 400
    }
});

export default styles