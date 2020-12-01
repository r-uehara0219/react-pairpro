import React, { useState } from "react";

type Props = {
  addTodo: (v: string) => void;
};

export const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => addTodo(value)}>add</button>
    </>
  );
};
