import React from 'react';
import { useSelector } from 'react-redux';

export const Tasks = () => {
  const tasks = useSelector((state) => state.tasks)

  return (
    <ul>
      {
        tasks.map((task,idx) => {
        return (<li key={idx}>{task}</li>)})
      }
    </ul>
  )
}