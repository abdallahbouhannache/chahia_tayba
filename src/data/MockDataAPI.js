import { Text } from "react-native";
import React, { Component } from "react";
import { recipes, categories, ingredients } from "./dataArrays";
import { faker } from "@faker-js/faker";

var faker_recipes = recipes,
  faker_categories = categories,
  faker_ingredients = ingredients;

// faker.seed(123);
function idsGenerators(minV, maxV, length) {
  var ids = [];
  while (ids.length < length) {
    var randomId = Math.floor(Math.random() * (maxV - minV + 1)) + minV;
    if (!ids.includes(randomId)) {
      ids.push(randomId);
    }
  }
  return ids;
}

const categoryPics=()=>{
  let pics=[]
  for (let i = 0; i < 4; i++) {
  const imageUrl = faker.image.urlLoremFlickr({ category: 'food' });
  pics.push(imageUrl);
  }
  return pics
}

export function getCategoryById(categoryId) {
  let faker_categories;
  categories.map((data) => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getIngredientName(ingredientID) {
  let name;
  faker_ingredients.map((data) => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID) {
  let url;
  faker_ingredients.map((data) => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId) {
  let name;
  faker_categories.map((data) => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(categoryId) {
  const recipesArray = [];
  faker_recipes.map((data) => {
    if (data.categoryId == categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

// modifica
export function getRecipesByIngredient(ingredientId) {
  const recipesArray = [];
  faker_recipes.map((data) => {
    data.ingredients.map((index) => {
      if (index[0] == ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  faker_recipes.map((data) => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map((index) => {
    faker_ingredients.map((data) => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  faker_ingredients.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map((item) => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];
  faker_categories.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id); // return a vector of recipes
      recipes.map((item) => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  faker_recipes.map((data) => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

export function fakerRecipes() {
  // Generate data
  const data = Array.from({ length: 10 }, () => ({
    recipeId: faker.string.uuid(),
    title: faker.commerce.productName(),
    photo_url: faker.image.urlLoremFlickr({ category: "food" }),
    description: faker.lorem.paragraph(),
    photosArray: categoryPics(),
    time: "15",
    ingredients: [
      [0, "200ml"],
      [1, "5g"],
      [2, "300g"],
    ],
    categoryId: faker.helpers.arrayElement(categories).id,
  }));

  return data;

}

export function fakerCategories() {
  var uniqueIds = idsGenerators(0,10,4);
  let categor = Array.from({ length: 4 }, () => ({
    id: uniqueIds.pop(),
    name: faker.commerce.productName(),
    photo_url: faker.image.urlLoremFlickr({ category: "food" }),
  }));
  return categor;
}

export async function fakerIngredient() {
  var uniqueIds = idsGenerators(0, 150, 60);
  const ingredients = await Promise.all(
    Array.from({ length: 60 }, async () => {
      const ingredientId = uniqueIds.pop();
      const name = faker.commerce.productMaterial();
      const photo_url = await fetchPhotoUrl();
      return { ingredientId, name, photo_url };
    })
  );
  return ingredients;
}