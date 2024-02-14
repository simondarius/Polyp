import {View,StyleSheet,Dimensions} from "react-native"
import Colors from "../const/Palette"
import {TextInput,Text,HelperText} from 'react-native-paper'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const bigHeight=Math.floor(0.25*windowHeight)
const height=Math.floor(0.11*windowHeight)
const marginTop=Math.floor(0.03*windowHeight)


function PolypTextInput({name="undefined",keyboardType,onChangeText,mode="outlined",hasError,errorMessage,annotation,value="undefined",isBig=false}){
    return(
       <View style={isBig ? styles.big_container : styles.container}>
           {annotation && (<Text style={{marginLeft:'6%',marginBottom:'2%',marginRight:'25%',fontSize:14}} variant="labelMedium">{annotation}</Text>)}
           <TextInput keyboardType={keyboardType} mode={mode} multiline={isBig} style={isBig ? styles.big_field : styles.field} label={name} value={value} onChangeText={onChangeText}/>
           {hasError &&(<HelperText type="error" visible={hasError}>{errorMessage}</HelperText>)}
       </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:windowWidth,
        height:height,
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        marginTop:marginTop,
    },
    big_container:{
        width:windowWidth,
        height:bigHeight,
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    field:{
        backgroundColor:'white',
        width:'80%',
        height:height*0.54,
        marginLeft:'5%',
        
    },
    big_field:{
        backgroundColor:'white',
        width:'85%',
        height:bigHeight*0.64,
        marginLeft:'5%',
    }


})
export default PolypTextInput;