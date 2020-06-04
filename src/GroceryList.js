import React from "react";
import Grocery from "./Grocery";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function GroceryList({groceries, toggleGrocery, removeGrocery, editGrocery}){
    if(groceries.length)
    return(
        <Paper>
          <List>
            {groceries.map((grocery, i) =>(  
              
              <React.Fragment key ={i}>
                 <Grocery
                 {...grocery}
                 key={grocery.id} 
                 removeGrocery={removeGrocery}
                 toggleGrocery={toggleGrocery}
                 editGrocery={editGrocery}
                 />
             
                {i < groceries.length -1  && <Divider/> } 
                </React.Fragment>
        
            ))}
        </List>
        </Paper>
    );
    return null;
}

export default GroceryList;