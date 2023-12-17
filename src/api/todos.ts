import axios from "axios";
import { TodoItem } from "../model/todos";
import { SwitchPayload } from "../model/todos";
const SERVER_URI = "http://localhost:4000";

const getTodos = async () => {
  const response = await axios.get(`${SERVER_URI}/todos`);
  return response.data;
};

const addTodo = async (newTodo: TodoItem) => {
  await axios.post(`${SERVER_URI}/todos`, newTodo);
};

const removeTodo = async (id: string) => {
  await axios.delete(`${SERVER_URI}/todos/${id}`);
};

const switchTodo = async (payload: SwitchPayload) => {
  await axios.patch(`${SERVER_URI}/todos/${payload.id}`, {
    isDone: payload.isDone,
  });
};

export { getTodos, addTodo, removeTodo, switchTodo };
