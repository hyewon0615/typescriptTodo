import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getTodos } from '../api/todos';
import { TodoItem } from '../model/todos';
import Todo from './Todo';

const Category = styled.h1`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 600;
`;
const TodoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  height: 100%;
`;
function TodoList({ isActive }: { isActive: boolean }) {
  const { isLoading, isError, data } = useQuery('todos', getTodos, {
    staleTime: 1000,
    retry: 7 //연결 시도 횟수
  });

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <div>
      <Category>{isActive ? 'Working..🔥' : 'Done..!🎉'}</Category>

      <TodoCards>
        {data
          .filter((item: TodoItem) => item.isDone === !isActive)
          .map((item: TodoItem) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </TodoCards>
    </div>
  );
}

export default TodoList;
