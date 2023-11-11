import React, {useLayoutEffect, useEffect} from 'react';

import {FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
// import { recipes } from "../../data/dataArrays";
import MenuImage from '../../components/MenuImage/MenuImage';
import {getCategoryName, fakerRecipes} from '../../data/MockDataAPI';

export default function HomeScreen(props) {
  const {navigation} = props;
  console.log("wrong");
  const recipes = fakerRecipes();
  var faker_recipes = recipes;
  // const categories = fakerCategories();

  // console.log({ re });
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

  useEffect(() => {
    faker_recipes = fakerRecipes();
  }, []);

  const onPressRecipe = item => {
    navigation.navigate('Recipe', {item});
  };

  const renderRecipes = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>
          {getCategoryName(item.categoryId)}
        </Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={faker_recipes}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
}
