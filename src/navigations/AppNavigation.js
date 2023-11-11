import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';

import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';

import SubmitRecipeScreen from '../screens/SubmitRecipe/SubmitRecipeScreen';

import SettingsScreen from '../screens/Settings/SettingsScreen';
import UserProfileScreen from '../screens/UserProfile/UserProfileScreen';
import EditProfileScreen from '../screens/UserProfile/EditProfile';


import ShoppingScreen from '../screens/Shopping/ShoppingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';

import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';

const Stack = createStackNavigator();

function MainNavigator() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}>

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
  
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />

      <Stack.Screen name="Shopping" component={ShoppingScreen} />
      <Stack.Screen name="SubmitRecipe" component={SubmitRecipeScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />

      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="RecipesList" component={RecipesListScreen} />
      <Stack.Screen name="Ingredient" component={IngredientScreen} />
      

      <Stack.Screen
        name="IngredientsDetails"
        component={IngredientsDetailsScreen}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Main"
      drawerStyle={{
        width: 250,
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) => (
        <DrawerContainer navigation={navigation} />
      )}>
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
