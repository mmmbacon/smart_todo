## REST  
BREAD - BROWSE, READ, EDIT, ADD DELETE

    ### users
    * <s>***B GET** users/:userid/items               <-- Get all Users*</s>
    * **R GET**     users/:userid                     <-- Get specific User (items for that user)
    * *E PUT        users/:id                         <-- Edit User Info(stretch)*
    * **A POST**    users/:userid                     <-- Maybe not needed>
    * <s>*D DELETE  users/:id                         <-- Edit User Info(ignore)*</s>

    ### items

    * B **GET**     users/:userid/items               <-- Get all Items
    * B **GET**     users/:userid/items/:category     <-- All items in a category
    * *R GET        users/:userid/items/:id           <-- Get specific Item(maybe)*
    * E **PUT**     users/:userid/items/:itemid       <-- Editing(completed) a specific Item
    * A **POST**    users/:userid/items/:itemid       <-- Create a new Item
    * D **DELETE**  users/:userid/items/:itemid       <-- Delete an Item
