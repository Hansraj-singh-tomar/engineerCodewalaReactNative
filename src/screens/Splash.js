import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';


export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Resume");
    }, 3000);
  }, []);
  return (
    <SafeAreaView>
    <View 
      style={{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
      }}>
      <Text>Resume UI</Text>
    </View>
    </SafeAreaView>
  );
}
