
export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// useReducer @ 1:04:00

// import { useReducer } from "react";

// type Actions =
//  | { type: 'add', payload: string }
//  | { type: 'remove', payload: number }
//  | { type: 'done', payload: number }


// const TodoReducer = (state: Todo[], action:Actions) => {
//   switch (action.type) {
//     case 'add':
//       return [
//         ...state, 
//         { id: Date.now(), todo: action.payload, isDone: false}
//       ]
//     case 'remove': 
//       return state.filter((todo) => todo.id !== action.payload) 
//     case 'done': 
//       return state.map((todo) => {
//         todo.id !== action.payload ? { ...todo, idDone: !todo.isDone} : todo }
//       )
//     default: 
//         return state
//   }
// }

// const reducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, [])
// }