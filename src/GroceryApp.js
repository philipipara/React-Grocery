import React, {  useEffect }from "react";
import GroceryList from "./GroceryList";
import GroceryForm from "./GroceryForm";
import useGroceryState from "./hooks/useGroceryState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";


function GroceryApp(){
    const initialGroceries = JSON.parse(window.localStorage.getItem("groceries") || "[]");
    const {groceries, removeGrocery, toggleGrocery, editGrocery, addGrocery} = useGroceryState(initialGroceries);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(groceries));
      }, [groceries]);



  return(
    <Paper
    style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "teal"

    }}
    elevation={0}
    >
        <AppBar color="primary" position="static" style={{ height: "64px"}}>
            <ToolBar>
                <Typography color="inherit">Grocery List</Typography>
            </ToolBar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "2rem"}}> 
        <Grid item xs={11} md={8} lg={4}>
            <GroceryForm addGrocery={addGrocery}/>
            <GroceryList 
               groceries={groceries} 
               removeGrocery={removeGrocery} 
               toggleGrocery={toggleGrocery}
               editGrocery= {editGrocery}
               />
            </Grid>
        </Grid>
    </Paper> 
  );
}

export default GroceryApp;