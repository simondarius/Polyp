import {useState,useEffect} from 'react'
import {View,StyleSheet,ScrollView} from 'react-native'
import PolypGaslight from '../components/PolypGaslight';
import PolypDropdownInput from '../components/PolypDropdownInput';
import PolypTextInput from '../components/PolypTextInput';
import Colors from '../const/Palette';
import * as SecureStore from 'expo-secure-store';
import { Text,BottomNavigation} from 'react-native-paper';
import i18n from '../i18n'
import { debounce } from 'lodash';
const PersonRoute = () => {
    const [pAge, setPAge] = useState("");
    const [pGender, setPGender] = useState("");
    const [pHeight, setPHeight] = useState("");
    const [pWeight, setPWeight] = useState("");
    const [originalPAge, setOriginalPAge] = useState("");
    const [originalPGender, setOriginalPGender] = useState("");
    const [originalPHeight, setOriginalPHeight] = useState("");
    const [originalPWeight, setOriginalPWeight] = useState("");

    const debouncedSave = debounce(() => {
        const changedValues = {};
        if (pAge !== originalPAge) {
            changedValues.pAge = pAge;
        }
        if (pGender.value !== originalPGender) {
            changedValues.pGender = pGender.value;
        }
        if (pHeight !== originalPHeight) {
            changedValues.pHeight = pHeight;
        }
        if (pWeight !== originalPWeight) {
            changedValues.pWeight = pWeight;
        }

        Object.keys(changedValues).forEach(async key => {
            console.log(changedValues[key]);
            await SecureStore.setItemAsync(key, changedValues[key]);
        });
    }, 500);

    useEffect(() => {
        debouncedSave();
        return () => debouncedSave.cancel();
    }, [pAge, pGender.value, pHeight, pWeight]);

    useEffect(() => {
        const loadDataFromStorage = async () => {
            const loadedPAge = await SecureStore.getItemAsync('pAge') || "";
            const loadedPGender = await SecureStore.getItemAsync('pGender') || "";
            const loadedPHeight = await SecureStore.getItemAsync('pHeight') || "";
            const loadedPWeight = await SecureStore.getItemAsync('pWeight') || "";

            setPAge(loadedPAge);
            setPGender(loadedPGender);
            setPHeight(loadedPHeight);
            setPWeight(loadedPWeight);
            setOriginalPAge(loadedPAge);
            setOriginalPGender(loadedPGender);
            setOriginalPHeight(loadedPHeight);
            setOriginalPWeight(loadedPWeight);
        };

        loadDataFromStorage();

        return () => {};
    }, []);

    return(
        <View style={styles.container}>
           <Text style={{textAlign:'center',paddingHorizontal:20,paddingTop:20}}variant='titleMedium'>{i18n.t("AddInfo_PersonPrompt")}</Text>
            <PolypGaslight></PolypGaslight>
            <ScrollView style={styles.scrollContainer}>
            <PolypTextInput keyboardType="numeric" annotation={i18n.t("AddInfo_HowOld")} value={pAge} onChangeText={setPAge} name=""></PolypTextInput>
            <PolypTextInput keyboardType="numeric" annotation={i18n.t("AddInfo_WhatWeight")} value={pWeight} onChangeText={setPWeight} name=""></PolypTextInput>
            <PolypTextInput keyboardType="numeric" annotation={i18n.t("AddInfo_HowTall")} value={pHeight} onChangeText={setPHeight} name=""></PolypTextInput>
            <PolypDropdownInput value={pGender} options={[{label: i18n.t("AddInfo_GenderFem"), value: 'female'},{label: i18n.t("AddInfo_GenderMale"), value: 'male'}]} onValueChange={setPGender}  placeholder={i18n.t("AddInfo_GenderPlaceholder")} annotationText={i18n.t("AddInfo_WhatGender")} iconName="man"></PolypDropdownInput>
            </ScrollView>
        </View>
    )
}

const HealthRoute = () => {
    const [hDescribe, setHDescribe] = useState("");
    const [hImpair, setHImpair] = useState("");
    const [hMedication, setHMedication] = useState("");
    const [hSmoke, setHSmoke] = useState("");
    const [hMisc1, setHMisc1] = useState("");
    const [hMisc2, setHMisc2] = useState("");
    const [hMedic, setHMedic] = useState("");
    const [originalHDescribe, setOriginalHDescribe] = useState("");
    const [originalHImpair, setOriginalHImpair] = useState("");
    const [originalHMedication, setOriginalHMedication] = useState("");
    const [originalHSmoke, setOriginalHSmoke] = useState("");
    const [originalHMisc1, setOriginalHMisc1] = useState("");
    const [originalHMisc2, setOriginalHMisc2] = useState("");
    const [originalHMedic, setOriginalHMedic] = useState("");

    const debouncedHealthSave = debounce(() => {
        const changedValues = {};
        if (hDescribe !== originalHDescribe) {
            changedValues.hDescribe = hDescribe;
        }
        if (hImpair !== originalHImpair) {
            changedValues.hImpair = hImpair;
        }
        if (hMedication !== originalHMedication) {
            changedValues.hMedication = hMedication;
        }
        if (hSmoke !== originalHSmoke) {
            changedValues.hSmoke = hSmoke;
        }
        if (hMisc1 !== originalHMisc1) {
            changedValues.hMisc1 = hMisc1;
        }
        if (hMisc2 !== originalHMisc2) {
            changedValues.hMisc2 = hMisc2;
        }
        if (hMedic !== originalHMedic) {
            changedValues.hMedic = hMedic;
        }

        Object.keys(changedValues).forEach(async key => {
            console.log(key);
            await SecureStore.setItemAsync(key, changedValues[key]);
        });
    }, 500);

    useEffect(() => {
        debouncedHealthSave();
        return () => debouncedHealthSave.cancel();
    }, [hDescribe, hImpair, hMedication, hSmoke, hMisc1, hMisc2, hMedic]);

    useEffect(() => {
        const loadDataFromStorage = async () => {
            const loadedHDescribe = await SecureStore.getItemAsync('hDescribe') || "";
            const loadedHImpair = await SecureStore.getItemAsync('hImpair') || "";
            const loadedHMedication = await SecureStore.getItemAsync('hMedication') || "";
            const loadedHSmoke = await SecureStore.getItemAsync('hSmoke') || "";
            const loadedHMisc1 = await SecureStore.getItemAsync('hMisc1') || "";
            const loadedHMisc2 = await SecureStore.getItemAsync('hMisc2') || "";
            const loadedHMedic = await SecureStore.getItemAsync('hMedic') || "";

            setHDescribe(loadedHDescribe);
            setHImpair(loadedHImpair);
            setHMedication(loadedHMedication);
            setHSmoke(loadedHSmoke);
            setHMisc1(loadedHMisc1);
            setHMisc2(loadedHMisc2);
            setHMedic(loadedHMedic);

           
            setOriginalHDescribe(loadedHDescribe);
            setOriginalHImpair(loadedHImpair);
            setOriginalHMedication(loadedHMedication);
            setOriginalHSmoke(loadedHSmoke);
            setOriginalHMisc1(loadedHMisc1);
            setOriginalHMisc2(loadedHMisc2);
            setOriginalHMedic(loadedHMedic);
        };

        loadDataFromStorage();

        return () => {};
    }, []);
    return(
        <View style={styles.container}>
            
            <ScrollView style={styles.scrollContainer}>
            <Text style={{textAlign:'center',paddingHorizontal:20,paddingTop:20}}variant='titleMedium'>{i18n.t("AddInfo_HealthPrompt")}</Text>
            <PolypGaslight></PolypGaslight>
            <PolypTextInput annotation={i18n.t("AddInfo_HealthDescribe")} isBig={true} value={hDescribe} onChangeText={setHDescribe} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_HealthImpair")} isBig={true} value={hImpair} onChangeText={setHImpair} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_HealthMedication")} isBig={true} value={hMedication} onChangeText={setHMedication} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_SmokeHabbit")} isBig={true} value={hSmoke} onChangeText={setHSmoke} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_HealthMedic")}  value={hMedic} onChangeText={setHMedic} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_HealthMisc1")} value={hMisc1} onChangeText={setHMisc1} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_HealthMisc2")} value={hMisc2} onChangeText={setHMisc2} name=""></PolypTextInput>
            <View style={{height:40}}/>
            
            </ScrollView>
        </View>
    )
}

const LifestyleRoute = () => {
    const [lStress, setLStress] = useState("");
    const [lWorkH, setLWorkH] = useState("");
    const [lFamily, setLFamily] = useState("");
    const [lSports, setLSports] = useState("");
    const [lActivity, setLActivity] = useState("");
    const [lTravel, setLTravel] = useState("");
    const [lChange, setLChange] = useState("");
    const [originalLStress, setOriginalLStress] = useState("");
    const [originalLWorkH, setOriginalLWorkH] = useState("");
    const [originalLFamily, setOriginalLFamily] = useState("");
    const [originalLSports, setOriginalLSports] = useState("");
    const [originalLActivity, setOriginalLActivity] = useState("");
    const [originalLTravel, setOriginalLTravel] = useState("");
    const [originalLChange, setOriginalLChange] = useState("");

    const debouncedLifestyleSave = debounce(() => {
        const changedValues = {};
        if (lStress !== originalLStress) {
            changedValues.lStress = lStress;
        }
        if (lWorkH !== originalLWorkH) {
            changedValues.lWorkH = lWorkH;
        }
        if (lFamily !== originalLFamily) {
            changedValues.lFamily = lFamily;
        }
        if (lSports !== originalLSports) {
            changedValues.lSports = lSports;
        }
        if (lActivity !== originalLActivity) {
            changedValues.lActivity = lActivity;
        }
        if (lTravel !== originalLTravel) {
            changedValues.lTravel = lTravel;
        }
        if (lChange !== originalLChange) {
            changedValues.lChange = lChange;
        }

        Object.keys(changedValues).forEach(async key => {
            console.log(key);
            await SecureStore.setItemAsync(key, changedValues[key]);
        });
    }, 500);

    useEffect(() => {
        debouncedLifestyleSave();
        return () => debouncedLifestyleSave.cancel();
    }, [lStress, lWorkH, lFamily, lSports, lActivity, lTravel, lChange]);

    useEffect(() => {
        const loadDataFromStorage = async () => {
            const loadedLStress = await SecureStore.getItemAsync('lStress') || "";
            const loadedLWorkH = await SecureStore.getItemAsync('lWorkH') || "";
            const loadedLFamily = await SecureStore.getItemAsync('lFamily') || "";
            const loadedLSports = await SecureStore.getItemAsync('lSports') || "";
            const loadedLActivity = await SecureStore.getItemAsync('lActivity') || "";
            const loadedLTravel = await SecureStore.getItemAsync('lTravel') || "";
            const loadedLChange = await SecureStore.getItemAsync('lChange') || "";

            setLStress(loadedLStress);
            setLWorkH(loadedLWorkH);
            setLFamily(loadedLFamily);
            setLSports(loadedLSports);
            setLActivity(loadedLActivity);
            setLTravel(loadedLTravel);
            setLChange(loadedLChange);

            setOriginalLStress(loadedLStress);
            setOriginalLWorkH(loadedLWorkH);
            setOriginalLFamily(loadedLFamily);
            setOriginalLSports(loadedLSports);
            setOriginalLActivity(loadedLActivity);
            setOriginalLTravel(loadedLTravel);
            setOriginalLChange(loadedLChange);
        };

        loadDataFromStorage();

        return () => {};
    }, []);
    return(
        <View style={styles.container}>
            
            <ScrollView style={styles.scrollContainer}>
            <Text style={{textAlign:'center',paddingHorizontal:20,paddingTop:20}}variant='titleMedium'>{i18n.t("AddInfo_LifestylePrompt")}</Text>
            <PolypGaslight></PolypGaslight>
            <PolypTextInput annotation={i18n.t("AddInfo_LifestyleStress")}  value={lStress} onChangeText={setLStress} name=""></PolypTextInput>
            <PolypTextInput keyboardType="numeric" annotation={i18n.t("AddInfo_LifestyleWorkHours")} value={lWorkH} onChangeText={setLWorkH} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_LifestyleFamily")} value={lFamily} onChangeText={setLFamily} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_LifestyleSports")} isBig={true} value={lSports} onChangeText={setLSports} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_LifestyleActivityLevel")}  value={lActivity} onChangeText={setLActivity} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_LifestyleTravel")} value={lTravel} onChangeText={setLTravel} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_LifestyleChange")} value={lChange} onChangeText={setLChange} name=""></PolypTextInput>
            <View style={{height:40}}/>
            
            </ScrollView>
        </View>
    )
};

const DietRoute = () => {
    const [dHealth, setDHealth] = useState("");
    const [dMeals, setDMeals] = useState("");
    const [dGoals, setDGoals] = useState("");
    const [dPref, setDPref] = useState("");
    const [dAllergies, setDAllergies] = useState("");
    const [dSkip, setDSkip] = useState("");
    const [originalDHealth, setOriginalDHealth] = useState("");
    const [originalDMeals, setOriginalDMeals] = useState("");
    const [originalDGoals, setOriginalDGoals] = useState("");
    const [originalDPref, setOriginalDPref] = useState("");
    const [originalDAllergies, setOriginalDAllergies] = useState("");
    const [originalDSkip, setOriginalDSkip] = useState("");

    const debouncedDietSave = debounce(() => {
        const changedValues = {};
        if (dHealth !== originalDHealth) {
            changedValues.dHealth = dHealth;
        }
        if (dMeals !== originalDMeals) {
            changedValues.dMeals = dMeals;
        }
        if (dGoals !== originalDGoals) {
            changedValues.dGoals = dGoals;
        }
        if (dPref !== originalDPref) {
            changedValues.dPref = dPref;
        }
        if (dAllergies !== originalDAllergies) {
            changedValues.dAllergies = dAllergies;
        }
        if (dSkip !== originalDSkip) {
            changedValues.dSkip = dSkip;
        }

        Object.keys(changedValues).forEach(async key => {
            console.log(key);
            await SecureStore.setItemAsync(key, changedValues[key]);
        });
    }, 500);

    useEffect(() => {
        debouncedDietSave();
        return () => debouncedDietSave.cancel();
    }, [dHealth, dMeals, dGoals, dPref, dAllergies, dSkip]);

    useEffect(() => {
        const loadDataFromStorage = async () => {
            const loadedDHealth = await SecureStore.getItemAsync('dHealth') || "";
            const loadedDMeals = await SecureStore.getItemAsync('dMeals') || "";
            const loadedDGoals = await SecureStore.getItemAsync('dGoals') || "";
            const loadedDPref = await SecureStore.getItemAsync('dPref') || "";
            const loadedDAllergies = await SecureStore.getItemAsync('dAllergies') || "";
            const loadedDSkip = await SecureStore.getItemAsync('dSkip') || "";

            setDHealth(loadedDHealth);
            setDMeals(loadedDMeals);
            setDGoals(loadedDGoals);
            setDPref(loadedDPref);
            setDAllergies(loadedDAllergies);
            setDSkip(loadedDSkip);

            setOriginalDHealth(loadedDHealth);
            setOriginalDMeals(loadedDMeals);
            setOriginalDGoals(loadedDGoals);
            setOriginalDPref(loadedDPref);
            setOriginalDAllergies(loadedDAllergies);
            setOriginalDSkip(loadedDSkip);
        };

        loadDataFromStorage();

        return () => {};
    }, []);
    return(
        <View style={styles.container}>
            
            <ScrollView style={styles.scrollContainer}>
            <Text style={{textAlign:'center',paddingHorizontal:20,paddingTop:20}}variant='titleMedium'>{i18n.t("AddInfo_DietPrompt")}</Text>
            <PolypGaslight></PolypGaslight>
            <PolypTextInput annotation={i18n.t("AddInfo_DietHealth")}  value={dHealth} onChangeText={setDHealth} name=""></PolypTextInput>
            <PolypTextInput keyboardType="numeric" annotation={i18n.t("AddInfo_DietMeals")} value={dMeals} onChangeText={setDMeals} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_DietGoals")} value={dGoals} onChangeText={setDGoals} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_DietPreferences")} isBig={true} value={dPref} onChangeText={setDPref} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_DietAllergies")} value={dAllergies} isBig={true} onChangeText={setDAllergies} name=""></PolypTextInput>
            <PolypTextInput annotation={i18n.t("AddInfo_DietSkip")} value={dSkip} onChangeText={setDSkip} name=""></PolypTextInput>
            <View style={{height:40}}/>
            
            </ScrollView>
        </View>
    )
};

function AddInfo(){
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'person', title: i18n.t("AddInfo_BottomBar_Me"), focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline'},
      { key: 'health', title: i18n.t("AddInfo_BottomBar_Health"), focusedIcon: 'heart-pulse', unfocusedIcon: 'heart-outline' },
      { key: 'lifestyle', title: i18n.t("AddInfo_BottomBar_Lifestyle"), focusedIcon: 'briefcase', unfocusedIcon: 'briefcase-outline' },
      { key: 'diet', title: i18n.t("AddInfo_BottomBar_Diet"), focusedIcon: 'food-apple', unfocusedIcon: 'food-apple-outline' },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        person: PersonRoute,
        health: HealthRoute,
        lifestyle: LifestyleRoute,
        diet: DietRoute,
      });
      return(<BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}/>
      )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
    },
    scrollContainer:{
        marginBottom:'4%',
    
        
    }
})
export default AddInfo;