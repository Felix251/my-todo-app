import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../Redux/store'
import { deleteToDo  } from '../../Redux/todoSlice'
import  styled  from 'styled-components'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import TodoItem from '../../Components/TodoItem'

const TodoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const toDos = todos.filter((todo) => todo.isCompleted == false );
  const done = todos.filter((todo) => todo.isCompleted == true );
  return (
    <div style={{border: '1px solid black', padding: '10px', borderRadius: '5px 5px', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
       <div style={{display:'flex', justifyContent:'space-between', width:'100%', paddingLeft:'40px', paddingRight:'30px'}}>
        <h2>Todo List </h2>
       <Link to='/addToDo'> <Button >Add <FaPlus size={15}/></Button></Link>
       </div>
       <div style={{width:'100%', paddingLeft:'20px', paddingRight:'20px'}}>
        <h3 style={{marginLeft:'30px'}}>To do</h3>
       
          {toDos.length>0 ? (<>
            {toDos.map((todo) => (<TodoItem key={todo.id} id={todo.id} text={todo.nom} dateCreation={todo.dateCreation} isCompleted={todo.isCompleted}/>))}
         </> ) 
          :  (<center>
            No task to show   

        </center>)}
       </div>
       <div style={{width:'100%', paddingLeft:'20px', paddingRight:'20px'}}>
        <h3 style={{marginLeft:'30px'}}>Done</h3>
          {done.length>0 ? (<>
            {done.map((todo) => (<TodoItem key={todo.id} id={todo.id} text={todo.nom} dateCreation={todo.dateCreation} isCompleted={todo.isCompleted}/>))}
         </> ) 
          :  (<center>
            No task to show   

        </center>)}
       </div>
    </div>
  )
}

export default TodoList
const Buttone = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0px 0px;
  background-color: #2ecc71;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-item: center;
`;
const Button = styled.button`
 
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
`;