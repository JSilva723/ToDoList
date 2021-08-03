import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../../actions"
import s from './add.module.css'

export const AddTaskC = () => {
  // Capturamos en input.value en task
  const [task, setTask] = useState('')
  // Instanciamos dispach en el componente
  const dispatch = useDispatch()
  const handleOnClick = () => {
    // Ejecutamos dispatch pasandole como cb la funcion addTask que nos permite agregar una tarea al estado global
    dispatch(addTask(task))
    // Reseteamos el input.value
    setTask('')
  }
  return (
    <div className={s.container}>
      <input
      className={s.input}
        type='text'
        placeholder='Add Task...'
        value={task}
        onChange={(e) => setTask(e.target.value) }
      />
      <input
      className={s.button}
        type='submit'
        value='Add Task'
        onClick={handleOnClick}
      />
    </div>
  )
}