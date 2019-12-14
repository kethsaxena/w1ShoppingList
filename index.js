
$(function(){


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
  // $('.js-form').submit(event => {
  //   // this stops the default form submission behavior
  //   event.preventDefault();
  //   const userTextElement = $(event.currentTarget).find('#user-text');
  //   $(".js-display-user-text").text(`user text is:  ${userTextElement.val()}`);
  //   userTextElement.val("");
  // });

  $("#js-shopping-list-form").submit(function(event){
    event.preventDefault();console.log('Button entry');
    const entry=$(event.currentTarget).find('#shopping-list-entry');
    console.log(entry.val());
    
    $("ul").append(
      "<li>"+entry.val()+"</li>");

    entry.val("");





});

  // $("js-shopping-list-form").submit( event => {
  //   event.preventDefault();
  //   const entry=$(event.currentTarget).find('#shopping-list-entry');
  //   console.log("Button Mein entery!");
  //   console.log(entry.val());
  //   entry.val("");
  
 
  // });

});

  
