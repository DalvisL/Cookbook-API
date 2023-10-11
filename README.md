# Cookbook API

## Project Details
- The Cookbook API uses REST API principles to create an API that will:
  - List recipe ingredients and will allow you to add ingredients to the database.
  - Each ingredient will have an ID associated with it, making it usable for creating other recipes
  - Recipes will make a join query to put together a robust list of ingredients and steps in json 
    which can then be used on the frontend.
## Uses
- Feel free to use this in your front-end, or to keep track of your own recipes in a database.
- You may also modify this API for other instructionals, just make sure to change the table names and endpoints accordingly.

## Endpoints

[GET] - ```:port/api/recipes/:id``` will get the recipe with the specified recipe id
