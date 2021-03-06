/**
 * Use bootstrap-select to enhance the functionality of dropdown on this page.
 *
 *
 * Here's what this you will need to do:
 *
 * 1. Inlclude the following DataTables css in layout.ejs
 *    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/css/bootstrap-select.min.css">
 *
 * 2. Include the following bootstrap-select JavaScript in layout.ejs
 *    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/js/bootstrap-select.min.js"></script>
 *
 * 3. Using the bootstrap-selct plugin render dropdown on the page
 *
 * 4. Use the live search functionality to make the dropdown searchable
 *
 * 5. Add the user glyphicons next to each student in the list
 *
 * 7. Add a menu header to the dropdown
 *
 * 8. Customize further with anything you find intersting
 *
 * Here's the documentation you need:
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 *
 */

 (function(){

   $(function(){

      $('#recipeList').selectpicker({
        size: 4,
        title: 'Select'
      });

      $("#recipeList").on("change", function(){
         console.log('value from select:', $(this).val());

         const recipeId = $(this).val();
         // Do some AJAX get to get the recipe
         console.log("http://localhost:1338/" + recipeId)
            $.get("http://localhost:1338/" + recipeId, function(recipe){
               if(typeof recipe.ingredients != "undefined" && recipe.ingredients.length > 0){
                  recipe.ingredients.forEach(function(ingredient){
                     $("#deleteIngredientTable").append(`
                        <tr>
                           <td>
                              <form method="POST" action="/${recipeId}/deleteingredient/${ingredient.id}">
                                 <button type="submit">DELETE!</button>
                              </form>
                           </td>
                           <td>${ ingredient.quantity }</td>
                           <td>${ ingredient.unitOfMeasurement }</td>
                           <td>${ ingredient.nameOfFoodItem }</td>
                        </tr>
                        `)
                  })
               }
            })
    })




   })

 })();
