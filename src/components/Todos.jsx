import { removeTodo } from "@/app/features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};
