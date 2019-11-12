
$(function(){


  // //CHECK ITEM  
  $(".shopping-item-toggle").on("click",function(event) {
    console.log(event);
    $(this).closest("li").children("span.shopping-item").toggleClass("shopping-item__checked");
    // event.stopPropogation();
    //$("span").closest(".shopping-item").toggleClass("shopping-item__checked")
    // $("span").closest(".shopping-item").toggleClass("shopping-item__checked");
    // console.log("i clicked");
  });

  // $('ul').on('click', '.shopping-item-toggle', 
  // function(event) { $(event.target).closest('li').children('span').toggleClass('shopping-item__checked'); });




  //DELETE 
  $('.shopping-item-delete').on('click',function(event) {
    this.closest("li").remove();
    console.log("Delete Mein entery!")
  });


  //add
  $("button").click(function(event) {
    event.preventDefault();
    console.log("Button Mein entery!")
  
    // $("ul").append(
    //   "<li>" +
    //   ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
    // );
  });

});

  
