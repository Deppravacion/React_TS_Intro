import React from 'react'
import '../App.css'
import '../components/styles.css'


interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;

}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {


  return (
  <form
    className="input"
    action="" >
      <input 
        type="input" 
        placeholder='Enter a task' className='input__box'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
      <button className='input__submit'>Go</button>

  </form>
  )
}

export default InputField
