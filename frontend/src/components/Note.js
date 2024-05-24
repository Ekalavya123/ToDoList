import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Note(props) {
  const handleDeleteClick = () => {
    props.onDelete(props.id);
  }

  const handleEditClick = () => {
    props.onEdit(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.date}</p>
      <button onClick={handleDeleteClick}><DeleteIcon /></button>
      <button onClick={handleEditClick}><EditIcon /></button>
    </div>
  );
}

export default Note;
