<template>
	<div class="container-fluid">
		<div class="row">
			<div v-for="recipe in recipes" :key="recipe" class="col-md-4 my-3">
				<RecipeComponent
					v-bind:img="recipe.thumbnail"
					v-bind:title="recipe.title"
					v-bind:ingredients="recipe.ingredients"
					v-bind:link="recipe.href"
				></RecipeComponent>
			</div>
		</div>
	</div>
</template>

<script>
	import RecipeComponent from "./components/RecipeComponent.vue"
	export default {
		name: 'Recipe',
		components:{
			RecipeComponent
		},
		data(){
			return {
				recipes: []
			}
		},
		beforeMount: function(){
			const app = this;
			
			const conversionUrl = "https://cors-anywhere.herokuapp.com/";
			const url = "http://www.recipepuppy.com/api/";
			
			fetch(conversionUrl + url)
			.then(function(response){
				return response.json();
			})
			.then(function(result){
				app.recipes = result.results;
			})
		}
	}
</script>
