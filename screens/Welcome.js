import {StyleSheet,View,Image} from "react-native"
import { Text } from "react-native-paper";
import PolypDoubleButtons from "../components/PolypDoubleButtons";
import { useNavigation } from '@react-navigation/native';
import i18n from '../i18n'
function Welcome(){
    const navigation = useNavigation();

    return(
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
            <Text variant="headlineSmall">{i18n.t("Welcome_Headline")}</Text>
            <Text style={styles.tinyText} variant="titleMedium">{ i18n.t("Welcome_CallToAction")}</Text>
            <Image style={styles.logoImage} source={require('../assets/Polyp-logo.png')}></Image>
            
            </View>
        <PolypDoubleButtons onlyContinue onPressContinue={()=>{
             navigation.navigate('AddInfo');
         }}>  
         </PolypDoubleButtons>   
         </View>
        )
}
const styles=StyleSheet.create({
     mainContainer:{
         flex:1,
         flexDirection:'column',
         backgroundColor:'white'
     },
     contentContainer:{
         height:'80%',
         width:'100%',
         justifyContent:'space-evenly',
         alignItems:'center'
     },
     logoImage:{
         width:'60%',
         height:'60%',
         opacity:0.6
     },
     tinyText:{
         textAlign:'center',
         paddingHorizontal:'10%'
     }
})
export default Welcome;