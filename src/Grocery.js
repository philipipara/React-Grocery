import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditGroceryForm from "./EditGroceryForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Grocery({ id, task, completed, removeGrocery, toggleGrocery, editGrocery }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditGroceryForm
          editGrocery={editGrocery}
          id={id}
          task={task}
          toggleGroceryForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleGrocery(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeGrocery(id)}>
              <DeleteIcon style={{color: "red"}}/>
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon style={{color: "teal"}}/>
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Grocery;
