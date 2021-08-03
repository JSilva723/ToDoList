import { ADD_TASK } from "../utils";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  }
}