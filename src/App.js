import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList'
import { useState } from 'react';


function App() {
    let list = [
      {
        title: 'mua do',
        isComplete: false
      },
      {
        title: 'da bong',
        isComplete: false
      },
      {
        title: 'xem tivi',
        isComplete: false
      }
    ];
    let [newInput, setNewInput] = useState('');
    const [todoList, setTodoList] = useState(list);
    const functionTest = (value) => {
      let newTodoList = [...todoList];
      let index = todoList.indexOf(value);
      newTodoList[index].isComplete = !value.isComplete;
      setTodoList(newTodoList);
      }
    const addItem = (e) => {
      
      if(e.keyCode === 13){
        if(e.target.value === ''){
          return;
        }
        let newTodoList = [...todoList];
        newTodoList.push({title: e.target.value, isComplete: false});
        setTodoList(newTodoList);
        setNewInput(newInput = '');
      }
    }
    const changeItem = (e) => setNewInput(newInput = e.target.value)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table>
          <tbody>
            <tr>
              <td colSpan='2'><input type='text' placeholder='add todo' value={newInput} onChange={(e)=> changeItem(e)} onKeyDown={(e) => addItem(e)}/></td>
            </tr>
            {todoList.length > 0 && todoList.map((props, index)=><TodoList key = {index} todo = {props.title} isComplete = {props.isComplete} click = {() => functionTest(props)}/>)}
            {todoList.length === 0 && <tr><td>Notthing</td></tr>}
            <tr>
              <td><button onClick = {() => setTodoList(todoList.filter((item) => item.isComplete === false))}>Hasn't Done</button></td>
              <td><button onClick = {() => setTodoList([])}>Delete All</button></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );

}

export default App;
