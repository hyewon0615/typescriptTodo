export type Todos = TodoItem[];
export type TodoItem = {
  id: string;
  content: string;
  title: string;
  isDone: boolean;
};
export type SwitchPayload = {
  id: string;
  isDone: boolean;
};
