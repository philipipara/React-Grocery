import UseLocalStorageState from "./UseLocalStorageState"
import uuid from 'uuid/dist/v4';
export default initialGroceries => {
    const [groceries, setGroceries] = UseLocalStorageState("groceries",initialGroceries);
    return {
      groceries,
      addGrocery: newGroceryText => {
        setGroceries([...groceries, { id: uuid(), task: newGroceryText, completed: false }]);
      },
      removeGrocery: groceryId => {
        //filter out removed todo
        const updatedGroceries = groceries.filter(grocery => grocery.id !== groceryId);
        //call setTodos with new todos array
        setGroceries(updatedGroceries);
      },
      toggleGrocery: groceryId => {
        const updatedGroceries = groceries.map(grocery =>
          grocery.id === groceryId ? { ...grocery, completed: !grocery.completed } : grocery
        );
        setGroceries(updatedGroceries);
      },
      editGrocery: (groceryId, newTask) => {
        const updatedGroceries = groceries.map(grocery =>
            grocery.id === groceryId ? { ...grocery, task: newTask } : grocery
          );
        setGroceries(updatedGroceries);
      }
    };
  };
