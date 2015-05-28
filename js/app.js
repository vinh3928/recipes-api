function getRecipeJson() {
  var apiKey = "dvxO6p7w0G02Q5vkUK2HScGLe72Wc1LU";
  var recipeID = 196149;
  var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
  $.ajax({
           type: "GET",
           dataType: 'json',
           cache: false,
           url: url,
           success: function (data) {
              alert('success');
              console.log(data);
           }
  });
}

getRecipeJson()

  function getRecipeJson() {
          var apiKey = "dvxO6p7w0G02Q5vkUK2HScGLe72Wc1LU";
          var titleKeyword = "lasagna";
          var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
                    + titleKeyword 
                    + "&api_key="+apiKey;
          $.ajax({
              type: "GET",
              dataType: 'json',
              cache: false,
              url: url,
              success: function (data) {
                  alert('success');
                  console.log(data);
              }
          });
}


getRecipeJson()
