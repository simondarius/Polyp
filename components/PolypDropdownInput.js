import { Dropdown } from 'react-native-element-dropdown';
import {View,StyleSheet,Dimensions} from 'react-native';
import Colors from '../const/Palette';
import { Text } from 'react-native-paper';
import AntDesigns from '@expo/vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function PolypDropdownInput({value,options,onValueChange,placeholder,annotationText, iconName}){
     return(
        <View style={styles.container}>
        <Text style={styles.text} variant="labelLarge">{annotationText}</Text>
         <Dropdown
         data={options} 
         style={styles.dropdown}
         onChange={onValueChange} maxHeight={300}
         value={value}
         labelField="label"
         valueField="value"
         searchPlaceholder="Search..." placeholder={placeholder}
         renderLeftIcon={()=>(<AntDesigns style={{paddingHorizontal:10}} name={iconName} size={20}></AntDesigns>)}/>
       </View>
     )
}
const styles=StyleSheet.create({
    container:{
        minWidth:windowWidth,
        minHeight:Math.floor(0.11*windowHeight),
        maxWidth:windowWidth,
        maxHeight:Math.floor(0.11*windowHeight),
        flexDirection:'column',
        justifyContent:'center',
        marginTop:Math.floor(0.01*windowHeight),
    },
    dropdown:{
        width:'75%',
        height:Math.floor(0.11*windowHeight)*0.54,
        marginLeft:'5%',
        backgroundColor:'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    text:{
        marginLeft:'5%',
        marginBottom:'2%'
    }
})
export default PolypDropdownInput;