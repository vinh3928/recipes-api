var input = document.getElementById("search");
var outTitle = document.getElementById("title");

//function getRecipeJson() {
  //var apiKey = "dvxO6p7w0G02Q5vkUK2HScGLe72Wc1LU";
  //var recipeID = 196149;
  //var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
  //return $.ajax({
           //type: "GET",
           //dataType: 'json',
           //cache: false,
           //url: url,
  //});
//}

//getRecipeJson().done(function(result) {
    //console.log(result.Ingredients.length);
//});

input.addEventListener("keydown", function() {
  function getRecipeJson() {
          var apiKey = "dvxO6p7w0G02Q5vkUK2HScGLe72Wc1LU";
          var titleKeyword = input.value;
          var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
                    + titleKeyword
                    + "&api_key="+apiKey;
          return $.ajax({
              type: "GET",
              dataType: 'json',
              cache: false,
              url: url,
          });
}

getRecipeJson().success(function(results){
  var createLi = document.createElement("li");
  outTitle.appendChild(createLi);
  outTitle.lastChild.innerHTML = results.Results[0].Title;
  console.log(results.Results[0].Title);
});
});


//getRecipeJson()
