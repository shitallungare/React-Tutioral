import React from 'react'
import {Todo} from "./MyComponents/Todo";

export const Todo = (props) => {
  return (
    <div className="container">
        <h3>Todos List</h3>
        <Todo todo={Todo[0]}/>
        </div>
  )
}
