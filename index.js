
$(function main(){


  // //CHECK ITEM  
  $(".shopping-item-toggle").on("click",function(event) {
    console.log(event);
    $(this).closest("li").children("span.shopping-item").toggleClass("shopping-item__checked");
    console.log("Check Mein entery!")
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
    console.log(event);
    console.log("Delete Mein entery!")
  });


  //ADD

  $("#js-shopping-list-form").submit(function(event){
    event.preventDefault();console.log('Button entry');
    const entry=$(event.currentTarget).find('#shopping-list-entry');
    console.log(entry.val());
    
    $("ul").append(
      '<li><span class="shopping-item">'+entry.val()+"</span>"+
      '<div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');

    entry.val("");
    main();

});

});

  
