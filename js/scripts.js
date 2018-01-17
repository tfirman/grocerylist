var grocerylist = [];

$(document).ready(function() {
  $("div#groceries form#formOne").submit(function(event) {
    event.preventDefault();
    var userInputs = ["grocery1", "grocery2", "grocery3"];

    userInputs.forEach(function(formInputId) {
      var groceryInputString = $("input#" + formInputId).val();

      grocerylist.push(groceryInputString);
    });
    console.log(grocerylist);


  });

  $("button#show").click(function() {
    var upperArray = [];
    grocerylist.map(function(item){upperArray.push(item.toUpperCase())})
    upperArray.sort();
    upperArray.forEach(function(grocery) {
      $("#output").append(grocery + " ");
    });
    jQuery("#output").show();
    $("div#groceries").hide();
  });

});
