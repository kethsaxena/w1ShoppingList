
function main(){


  //This checks your list item
  $("ul").on("click", ".shopping-item-toggle", function() {
    $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
});

//This deletes your list item
$("ul").on("click", ".shopping-item-delete", function() {
    event.preventDefault();
  $(event.target).closest("li").remove();
});


  // // //CHECK ITEM 6 
  // $(".shopping-item-toggle").on("click",function(event) {
  //   // alert('clickCheck');

  //   console.log(event);
  //   $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
  //   console.log("Check Mein entery!")
   
  // });

  // //DELETE  
  // $('.shopping-item-delete').on('click',function(event) {
  //   // alert('clickDelete');

  //   $(this).closest("li").remove();
  //   console.log(event);
  //   console.log("Delete Mein entery!")
    
  // });


  //ADD

  $("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
    console.log('Button entry');
    const entry=$(event.currentTarget).find('#shopping-list-entry');
    console.log(entry.val());
    
    $(".shopping-list").append(
      '<li><span class="shopping-item">'+entry.val()+"</span>"+
      '<div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');

    entry.val("");

});

}

$(main);

  
