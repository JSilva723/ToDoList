import { ADD_TASK } from "../utils"

const initialState = {
  tasks: [],
}
// Este objeto contiene en sus propiedades los metodos que van a modificar el estado global
const actionsObj = {
  [ADD_TASK]: (state, action ) => ({...state, tasks: [...state.tasks, action.payload]})
}

export const rootReducer = (state = initialState, action) =>{
  // Si el tipo de accion que le llega no esta definido en el objeto retorna el stado (return default)
  if (!actionsObj.hasOwnProperty(action.type)) return state
  // Si el tipo esta defino retorna un llamado al metodo pasando el estado previo y el obj action
  return actionsObj[ADD_TASK](state, action)
}


