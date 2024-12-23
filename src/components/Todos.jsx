import { removeTodo } from "@/app/features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-2 p-2 w-3/4 bg-gray-800 rounded-md shadow-md mt-4 mb-4">
        {todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-2 gap-2 bg-gray-700 rounded-md"
            >
              <span className="text-lg font-semibold text-gray-100 break-words w-3/4 sm:w-4/5">
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="p-1 border border-red-500 rounded-md bg-red-200"
              >
                {/* Add SVG delete trash icon here in red color and border around it */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
