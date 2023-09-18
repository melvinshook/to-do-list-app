
function newItem() {

  // 1.  Adding a new item using jQuery:

  let list = $('#list');
  let inputValue = $('#input').val();
  let li = $('<li></li>');
  li.append(inputValue);

  if (inputValue === '') {
    alert("Please type something in the box before clicking ADD.");
  } else {
    list.append(li);
  }

  //2. Crossing out an item using jQuery:

  function crossOut() {
    li.toggleClass('strike');
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass('strike');
  });


  //3. Adding the delete button in jQuery: 

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }


  // 4. Reordering the items in jQuery: 

  $('#list').sortable();

}