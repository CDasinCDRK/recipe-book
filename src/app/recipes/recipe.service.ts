import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>(); 
    
    private recipes: Recipe[] = [
        new Recipe(
            'Perfect Pizza', 
            'The best homemade pizza!', 
            'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
        [
            new Ingredient('Flour', 1), 
            new Ingredient('Oil', 1),
            new Ingredient('Tomato Sauce', 1),
            new Ingredient('Mozarella', 1),
            new Ingredient('Cherry Tomatoes', 10), 
            new Ingredient('Salami Slices', 5), 
            new Ingredient('Basil', 6)
        ]),
        new Recipe(
            'Super Salad',
            'A salad that actually tastes good!', 
            'https://img.taste.com.au/CCQsxomy/w643-h428-cfill-q90/taste/2016/11/asian-style-chopped-salad-83466-1.jpeg',
        [
            new Ingredient('Head of Lettuce', 1), 
            new Ingredient('Carrots', 3), 
            new Ingredient('Chili', 1), 
            new Ingredient('Peanuts', 20), 
            new Ingredient('Cilantro', 1), 
            new Ingredient('Beans', 1)
        ])
    ];

    constructor(private slService: ShoppingListService){
        this.slService; 
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes; 
        this.recipesChanged.next(this.recipes.slice()); 
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index]; 
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice()); 
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe; 
        this.recipesChanged.next(this.recipes.slice()); 
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1); 
        this.recipesChanged.next(this.recipes.slice()); 
    }
}