import React, { useState, useLayoutEffect } from "react";
import { View, TextInput, Button } from "react-native";
import MenuImage from "../../components/MenuImage/MenuImage";

const SubmitRecipeScreen = (props) => {
    const { navigation } = props;

    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
  
    const handleSubmit = () => {
      // Submit recipe for review here
    };
  
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

      
    return (
      <View>
        <TextInput
          value={recipeName}
          onChangeText={setRecipeName}
          placeholder={'Recipe Name'}
        />
        <TextInput
          value={ingredients}
          onChangeText={setIngredients}
          placeholder={'Ingredients'}
          multiline
        />
        <TextInput
          value={instructions}
          onChangeText={setInstructions}
          placeholder={'Instructions'}
          multiline
        />
        <Button title={'Submit Recipe'} onPress={handleSubmit} />
      </View>
    );
  };


  export default SubmitRecipeScreen;