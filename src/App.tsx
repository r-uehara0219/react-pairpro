import React, { useState } from "react";
import { render } from "react-dom";
import { TodoInput } from "Todo";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<string>>([]);
  return (
    <>
      <div>TodoList by uehara</div>
      <TodoInput
        addTodo={(v: string) => {
          setTodos([...todos, v]);
        }}
      ></TodoInput>
      {todos.map((v) => {
        return <div>{v}</div>;
      })}
    </>
  );
};

const app = document.querySelector("#app");
render(<App />, app);
