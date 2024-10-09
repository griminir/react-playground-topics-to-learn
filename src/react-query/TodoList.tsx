import useTodos from '../hooks/useTodos';

const TodoList = () => {
  const { data: todos, error: todoError, isLoading: todoLoading } = useTodos();

  if (todoLoading) return <p>Loading...</p>;

  if (todoError) return <p>{todoError.message}</p>;

  return (
    <ul className='list-group'>
      {todos?.map((todo) => (
        <li key={todo.id} className='list-group-item'>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
