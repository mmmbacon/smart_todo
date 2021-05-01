## REST  
BREAD - BROWSE, READ, EDIT, ADD DELETE

### users

* **B GET**     users/      <-- Get all Users
* **R GET**     users/:id   <-- Get specific User
* *E PUT    users/:id       <-- Edit User Info(stretch)*
* **A POST**    users/:id   <-- Maybe not needed>
* *D DELETE  users/:id      <-- Edit User Info(ignore)*

### items

* **B GET**     items/          <-- Get all Items
* **B GET**     items/:category <-- All items in a category
* *R GET    items/:id           <-- Get specific Item(maybe)*
* **E PUT**     items/:id       <-- Editing(completed) a specific Item
* **A POST**    items/:id       <-- Create a new Item
* **D DELETE**  items/:id       <-- Delete an Item
