// To use React-native navigation
// npm install @react-navigation/native
// npm expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Resume from './resume/Resume';
import Splash from "./screens/Splash";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Resume"
          component={Resume}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





