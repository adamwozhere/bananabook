# banana-button

Example for dynamically creating reusable items/components with a delete feature that functions without using ID's.
(note: unique ID function added, but this isnt used for functionality - just an example so that it can be used as an ID for a `label` and `input` pair.)
Banana's and Tea both use the same delete handler, as the handler targets the closest `data-item`.

1. Add an item using a template literal, with a button inside.
2. pass the clicked item to event handler `<button onclick="delete(this)">delete</button>`
3. remove the closest item to the button (the item itself) `theClickedButton.closest('.item-class').remove()`
