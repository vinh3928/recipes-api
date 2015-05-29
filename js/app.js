var input = document.getElementById("search");
var outTitle = document.getElementById("title");
var idHolder = {};

function getRecipeId(id) {
  var apiKey = "dvxO6p7w0G02Q5vkUK2HScGLe72Wc1LU";
  var recipeID = id;
  var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
  return $.ajax({
           type: "GET",
           dataType: 'json',
           cache: false,
           url: url,
  });
}

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

input.addEventListener("keypress", function(e) {
  var key = e.keyCode
  if (key === 13) {

    getRecipeJson().success(function(results){
      $(".list").remove();
      for (var i = 0; i < results.Results.length; i ++) {
        var createLi = document.createElement("li");
        outTitle.appendChild(createLi);
        outTitle.lastChild.className = "list";
        outTitle.lastChild.innerHTML = "<img src=" + results.Results[i].ImageURL + ">" + results.Results[i].Title + "-"
        idHolder[results.Results[i].RecipeID] = "";
        console.log(results.Results[i])
      }
    });
  }
});


//getRecipeJson()
