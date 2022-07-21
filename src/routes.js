import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Markets from './pages/Markets';
import Prices from './pages/Prices';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Markets" component={Markets} />
        <Stack.Screen name="Prices" component={Prices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;