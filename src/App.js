import React, { useState, createContext } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import "./styles.css";

export const AppContext = createContext();

export function App() {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("2021-03-01");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <AppContext.Provider
        value={{
          todoName,
          setTodoName,
          todoDate,
          setTodoDate,
          todoList,
          setTodoList
        }}
      >
        <Header />
        <Form />
        <List />
      </AppContext.Provider>
    </div>
  );
}
