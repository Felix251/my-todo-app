import React, { FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../Redux/store'
import { deleteToDo  } from '../../Redux/todoSlice'
import  styled  from 'styled-components'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import TodoItem from '../../Components/TodoItem'
import {  MdOutlineArrowDropDown, MdOutlineArrowRight } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { useGetTodosQuery } from '../../services/api/todos'

const TodoList: FC = () => {
  // const todos = useSelector((state: RootState) => state.todos.todos)
  const { data = [], isLoading} = useGetTodosQuery();
  const toDos = data.filter((todo) => todo.isCompleted == false );
  const done = data.filter((todo) => todo.isCompleted == true );
  const [isSelected, setisSelected] = useState(true);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div style={{border: '1px solid black', padding: '10px', borderRadius: '5px 5px', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
       <div style={{display:'flex', justifyContent:'space-between', width:'100%', paddingLeft:'40px', paddingRight:'30px'}}>
        <h2 style={{display:'flex', alignItems:'center', cursor:'pointer'}}><FcTodoList style={{marginRight:'10px'}}/>  Todo List  </h2>
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
        <h3 style={{marginLeft:'20px', display:'flex', alignItems:'center', cursor:'pointer'}} onClick={() => setisSelected(!isSelected)}>
          {isSelected ? <MdOutlineArrowDropDown size={20}/> : <MdOutlineArrowRight size={20}/>} Done
        </h3>
       {isSelected && (
        <>
             {done.length>0 ? (<>
            {done.map((todo) => (<TodoItem key={todo.id} id={todo.id} text={todo.nom} dateCreation={todo.dateCreation} isCompleted={todo.isCompleted}/>))}
         </> ) 
          :  (<center>
            No task to show   

        </center>)}
        </>
       )}
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