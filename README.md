# banana-button

Example for dynamically creating reusable items/components with a delete feature that functions without using ID's.

1. Add an item using a template literal, with a button inside.
2. pass the clicked item to event handler `<button onclick="delete(this)">delete</button>`
3. remove the closest item to the button (the item itself) `theClickedButton.closest('.item-class').remove()`
