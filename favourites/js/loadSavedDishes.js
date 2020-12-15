
$(window).on('load', function(){
  let savedIds = JSON.parse(localStorage.getItem("savedIds"));
  $('div.grid-container').empty();
  for (id in savedIds){
    getOneDish(savedIds[id])
    .then((data) => {
      var itemHtml = `
      <div class="item">
      <a href="../dish/index.html?id=${data.idMeal}"></a>
      <div class="item-img">
        <img src="${data.strMealThumb}">
      </div>
      <div>
        <p>${data.strMeal}</p>
      </div>
      </div>
      `;
      $('.grid-container').append(itemHtml);
    })
    .catch((err) => {
      console.log(err);
    })
  }
});