import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastrar from "./screens/Cadastrar";
import Lista from "./screens/Lista";

const Stack = createNativeStackNavigator();

export default function App() {
  const [pessoas, setPessoas] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cadastrar">
          {(props) => (
            <Cadastrar {...props} pessoas={pessoas} setPessoas={setPessoas} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Lista">
          {(props) => (
            <Lista {...props} pessoas={pessoas} setPessoas={setPessoas} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
