import React, { useState, useLayoutEffect } from "react";
import { View, TextInput, Button } from "react-native";
import MenuImage from "../../components/MenuImage/MenuImage";

const ShoppingScreen = (props) => {

  const { navigation } = props;

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [birthday, setBirthday] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       title: route.params?.name,
  //     });
  //   }, []);

  const handleAddIngredient = () => {
    // Update user profile here
  };

  return (
    <View>
      <TextInput
        value={ingredientName}
        onChangeText={setIngredientName}
        placeholder={"Ingredient Name"}
      />
      <TextInput
        value={ingredientQuantity}
        onChangeText={setIngredientQuantity}
        placeholder={"Quantity"}
      />
      <Button title={"Add Ingredient"} onPress={handleAddIngredient} />
    </View>
  );
};

export default ShoppingScreen;
