import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";

import { TodoType } from "./types/todo";
import { User } from "./types/user";

const user: User = {
  name: "あああ"
  //s  hobbies: ["映画", "読書"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
    console.log();
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
        //        <p>{todo.title}</p>
      ))}
    </div>
  );
}
