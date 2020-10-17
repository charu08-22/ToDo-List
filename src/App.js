import React, { useState }  from  'react';
import ToDoList from './ToDoList';

const App = () =>
{
  const [input , setInput] = useState("");
  const [item , setItems]  = useState([]);

  const additem = (event) =>
  {
    setInput(event.target.value);
  }
  const listOfItems = ()=>
  {
      setItems( (oldItems)  =>{
        return [...oldItems , input]
      })
      setInput('');

  }
  const deleteItems = (id) =>
  { 
    setItems((oldItems) => {
      return oldItems.filter((arrElem , index) => {
        return index!==id;
      })
    })

  }

  return(
  <div className="main-div">
    <div className="center-div">
      <br/>
      <h1 className="heading">ToDo List</h1>
      <input type="text" placeholder="Add Items" value={input} onChange={additem} />
      <button onClick={listOfItems}>+</button>
      <ol>
        {item.map( (itemvalue , index) => {
          return <ToDoList key={index} id={index}  text={itemvalue} onSelect={deleteItems}/>
        })}
      </ol>
    </div>
  </div>
  )

};

export default App;
