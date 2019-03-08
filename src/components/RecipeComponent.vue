<template>
	<div class="card  h-100">
		<img :src="img" alt="">
		<div class="card--information"><br>
				<b>Title: </b> {{title}} <br>
				<b>Ingredients: </b> {{ingredients}} <br>
				<b>Full description: </b><a :href="link" target="_blank">Click Here</a><br>
		</div><!--card-inforamtion-->
	</div><!--card-->
</template>

<script>
	export default {
		name: "RecipeComponent",
		props: ["img", "title", "ingredients", "link"]
	}
</script>

<style scoped>
	img{
		width: auto;
		margin: 15px auto 15px auto;
	}
	.col-sm-4{
		padding-top: 30px;
		margin-bottom: 0;
		padding-bottom: 0;
	}
	.card--information{
		margin: 15px;
		padding: 0 15px 0 15px;
	}
</style>