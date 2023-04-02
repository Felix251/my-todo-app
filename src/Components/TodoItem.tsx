
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCheck, BsPencil } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteToDo, done, modify, todo } from '../Redux/todoSlice';


interface TodoItemProps {
      id: number,
      text: string,
      dateCreation: Date,
      isCompleted: boolean
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  background-color: #f8f8f8;
  margin-bottom: 8px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #e8e8e8;
  }
  ${(props: { isCompleted: boolean }) =>
    props.isCompleted &&
    `
    background-color: #d8d8d8;
    text-decoration: line-through;
  `}
`;

const DoneButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #218838;
  }
`;

const ModifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #0069d9;
  }
`;
const ModifyButtone = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 35px;
  height: 24px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #0069d9;
  }
`;

const TodoText = styled.span`
  flex: 1;
  font-size: 18px;
`;

const TodoItem: React.FC<TodoItemProps> = ({ id, text, dateCreation, isCompleted}) => {
  const dispatch =useDispatch();
  const handleToggle = () => {
    if(!isCompleted)
      dispatch(done(id));
    if(isCompleted)
      dispatch(todo(id));
    // onToggle(id);
  };
  const [nom, setnom] = useState<string>(text);
  const [editingText, setEditingText] = useState<string>(text);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleModify = () => {
    if (isEditing) {
      dispatch(modify({ id: id, nom: nom , dateCreation: dateCreation, isCompleted: isCompleted}));
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };
  const handleDelete = () => {
    dispatch(deleteToDo(id));
    // onDelete(todo.id);
  };

  return (
    <ListItem isCompleted={isCompleted} >
      <DoneButton onClick={handleToggle}>
        <BsCheck />
      </DoneButton>
     
      {isEditing ? (
      <>
        <TodoInput value={nom} onChange={(e) => setnom(e.target.value)} />
        <ModifyButtone onClick={handleModify}>
          save
        </ModifyButtone>
      </>
    ) : (
      <>
        <TodoText>{text}</TodoText>
        <TodoText>{dateCreation.toLocaleDateString()}</TodoText>
        <ModifyButton onClick={() => setIsEditing(true)}>
          <BsPencil />
        </ModifyButton>
        
      <DeleteButton onClick={handleDelete}>
      <FaTrash  />
    </DeleteButton>
      </>
    )}
     
    </ListItem>
  );
};

export default TodoItem;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #c62828;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #0069d9;
  }
`;
const TodoInput = styled.input`
  border: none;
  padding: 8px;
  border-radius: 4px;
  background-color: #f8f8f8;
  margin-right: 8px;
  &:focus {
    outline: none;
    box-shadow: 0 0 4px #0069d9;
  }
`; 
