import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import { NavigationContainer } from "@react-navigation/native";

const stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerShown: false,
        }}
      >
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="ProductScreen" component={ProductScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
