import {useState} from 'react';
import { Appbar,Menu} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import i18n from '../i18n';
function PolypAppBar({title,icon1Name,icon2Press,icon1Press,icon2Name,simple=false}){
  const navigation=useNavigation();
  if(simple){
    const [visible, setVisible] = useState(false);
    return(
      <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.Content title="" />
        <Menu
          visible={visible}
          onDismiss={()=>{setVisible(false)}}
          anchor={<Appbar.Action icon="dots-vertical" onPress={() => {setVisible(true)}} />}>
          <Menu.Item onPress={() => {}} title={i18n.t("Welcome_AppBar_Info")}/>
        </Menu>
      </Appbar.Header>
      )
  } else{ 
  return(
    <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {navigation.goBack()}} />
    <Appbar.Content title={title} />
      {icon1Name ? <Appbar.Action icon={icon1Name} onPress={() => {icon1Press()}} /> : <></>}
      {icon2Name ? <Appbar.Action icon={icon2Name} onPress={() => {icon2Press()}} /> : <></>}
    </Appbar.Header>
    )
  }
};
  
  export default PolypAppBar;