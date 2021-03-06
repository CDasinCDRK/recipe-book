import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription; 
  loggedIn = false; 

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes; 
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    if(this.isAuth()) {
      this.router.navigate(['new'], {relativeTo: this.route});
    } else {
      this.router.navigate(['../signin']); 
    }
    
  }

  isAuth(){
    return this.authService.isAuthenticated(); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

}
