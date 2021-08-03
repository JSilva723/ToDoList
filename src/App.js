import React from 'react';
import { AddTaskC } from './components/add/AddTaskC';
import { Tasks } from './components/tasks/Tasks';
import s from './app.module.css'


const App = () => {
  return (
    <div className={s.container}>
      <AddTaskC />
      <Tasks />
    </div>
  )
};
export default App