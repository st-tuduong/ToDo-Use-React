const List = ({todos, setTodos}) => {
  const handleRemove = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  return ( 
    <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <p className="todo-content">{todo}</p>
              <button className="btn btn-delete" onClick={() => {handleRemove(index)}}>
              <i className="fa-solid fa-minus" />
            </button>
          </li>            
          ))}
        </ul>
   );
}

export default List;
