// jQuery Code

//1. Adding a new item to the list:

function newItem() {
    let li = $('<li></li>'); // Creates a new <li> element
    let inputValue = $('#input').val(); // Gets the input field value
    li.append(inputValue); // Adds the text to the <li>

    if (inputValue === '') {
        alert("You must write something!"); // Shows an alert if input is empty
    } else {
        $('#list').append(li); // Appends the <li> to the #list
    }


    // 2. Crossing an item out
    li.on("dblclick", function () {
        $(this).toggleClass("strike");
    });

    //3. Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>'); // Create a new <crossOutButton> element
    crossOutButton.append(document.createTextNode('X'));  // Add the "X" text to the button
    li.append(crossOutButton); // Append the button to the current list item (li)

    // Add a click event listener to the delete button
    crossOutButton.on("click", deleteListItem);

    // Function to handle the delete action
    // When the delete button is clicked, it adds the "delete" class to the list item (li),
    // which hides it by applying the CSS "display: none" from the ".delete" class
    function deleteListItem() {
        li.addClass("delete")
    }

    // 4. Reordering the items: 
    $('#list').sortable(); // Make the list sortable by enabling drag-and-drop functionality for the list items

}
