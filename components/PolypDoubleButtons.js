import {View,StyleSheet,Dimensions} from "react-native"
import { Button } from "react-native-paper";
import Colors from "../const/Palette"
import i18n from '../i18n'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function PolypDoubleButtons({onPressContinue,onPressBack, onlyContinue=false}){
    
    return(
        <View style={styles.container}>
            <View style={styles.button}>
                {onlyContinue ? <></> : <Button buttonColor={Colors.PrimaryAccentAlt}  mode="contained-tonal" onPress={onPressBack} >
                           {i18n.t("Btn_Back")}           </Button>}
            </View>
            <View style={styles.button}>
            <Button buttonColor={Colors.Primary} mode="contained" onPress={onPressContinue}>
            {i18n.t("Btn_Continue")}
            </Button>
            </View>
        </View>
        )
}
const styles= StyleSheet.create({
    container: {
        minWidth:windowWidth,
        minHeight:Math.floor(0.11*windowHeight),
        maxWidth:windowWidth,
        maxHeight:Math.floor(0.11*windowHeight),
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:"row",
        flex:1,
        marginVertical:15,
    },
    button:{
        minWidth:"40%",
    },
    })
export default PolypDoubleButtons;