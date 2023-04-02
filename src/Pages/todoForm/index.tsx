// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FormContainer = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 16px;
// `;

// const Input = styled.input`
//   flex: 1;
//   border: none;
//   border-radius: 4px;
//   padding: 8px;
//   font-size: 16px;
//   margin-right: 8px;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
// `;

// const Button = styled.button`
//   border: none;
//   border-radius: 4px;
//   padding: 8px 16px;
//   background-color: #2ecc71;
//   color: white;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
// `;

// interface TodoFormProps {
//   onAdd: (text: string) => void;
// }

// export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
//   const [text, setText] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (text.trim()) {
//       onAdd(text.trim());
//       setText('');
//     }
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <Input
//         type="text"
//         placeholder="Add new todo"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <Button>Add</Button>
//     </FormContainer>
//   );
// };
import React, { FC, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../Redux/store'
import { addToDo  } from '../../Redux/todoSlice'

const TodoForm: FC = () => {
  const [nom, setnom] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const onSubmit = () => {
    dispatch(addToDo(nom));
    navigate("/");
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
       <div className='' style={{border: '1px solid black', padding: '10px', borderRadius: '5px 5px', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
            <h3>Add task form</h3>
           <div className='form-control'>
            <label>Nom de la tache</label>
            <Input
            type="text"
            placeholder="Add new todo"
            value={nom}
            onChange={(e) => setnom(e.target.value)}
          />
           </div>
           <Button onClick={onSubmit} >Add <FaPlus size={15}/></Button>
        </div>
    </div>
  )
}

export default TodoForm
const Button = styled.button`
 
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
`;
const Buttone = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #2ecc71;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
`;
const Input = styled.input`
background-color: #f2f2f2; /* Light gray background */
border: none; /* Remove border */
border-radius: 4px; /* Add rounded corners */
padding: 6px 12px; /* Add padding */
font-size: 16px; /* Increase font size */
margin-left: 10px;

&:focus {
  outline: none; /* Change the color and thickness of the outline */
}
`;
