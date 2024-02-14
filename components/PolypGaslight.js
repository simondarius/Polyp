import { Text} from 'react-native-paper';
import {View,StyleSheet,Dimensions} from 'react-native';
import AntDesigns from '@expo/vector-icons/AntDesign';
import i18n from '../i18n'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function PolypGaslight(){
  return(
      <View style={styles.container}>
          <AntDesigns style={{padding:10, color:'gray'}} name={"lock"} size={20}></AntDesigns>
         <Text style={styles.text} variant="labelMedium">{i18n.t("Data_Disclaimer")}</Text>
      </View>
  )
};

const styles=StyleSheet.create({
    container:{
        minWidth:windowWidth,
        minHeight:Math.floor(0.08*windowHeight),
        maxWidth:windowWidth,
        maxHeight:Math.floor(0.08*windowHeight),
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row",
        flex:1,
        marginVertical:5,
    },
    text:{
       color:'gray',
       fontWeight:'bold'
    }
})

export default PolypGaslight;