const Form = ({input, setInput, setTodos}) => {
  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input !== '') {
      setTodos(oldTodo => {
        const newTodo = [...oldTodo, input];
        localStorage.setItem('todos', JSON.stringify(newTodo));
        return newTodo;
      })      
    }else {
      alert('Vui lòng nhập thông tin');
    }
    setInput('');
  }

  return ( 
    <form className="todo-form"  onClick={handleSubmit}>
      <input 
      type="text" className="todo-input" placeholder="Add your new todo" 
      value={input} required onChange={handleInput}
      />
      <button className="btn btn-primary">
        <i className="fa-solid fa-plus" />
      </button>
    </form>
   );
}

export default Form;
