import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { removeTodo, switchTodo } from '../api/todos';
import { TodoItem } from '../model/todos';
const TodoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid #059369;
  border-radius: 10px;
  padding: 20px;
  height: 200px;
  width: 285px;

  & h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;
const Button = styled('button')<{ $bordercolor: string }>`
  border: 1px solid ${(props) => props.$bordercolor};
  background-color: white;
  margin: 5px;
  width: 45%;
  height: 35px;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.$bordercolor};
    color: white;
  }
`;

function Todo({ todo, isActive }: { todo: TodoItem; isActive: boolean }) {
  const queryClient = useQueryClient();
  // 삭제 확인 용 메시지 관리

  const deleteMutation = useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  const switchMutation = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  // 완료, 취소를 handling하는 함수
  const handleSwitchButton = () => {
    const payload = {
      id: todo.id,
      isDone: !todo.isDone
    };
    console.log(todo.id, !todo.isDone);
    switchMutation.mutate(payload);
  };

  // [삭제] 버튼 선택 시 호출되는 함수(user의 confirmation 필요)
  const handleRemoveButton = () => {
    deleteMutation.mutate(todo.id);
  };
  return (
    <div>
      <TodoCard>
        <h1>{todo.title}</h1>
        <p>{todo.content}</p>
        <div>
          <Button $bordercolor={'red'} onClick={handleSwitchButton}>
            {isActive ? '완료' : '취소'}
          </Button>
          <Button $bordercolor={'#059369'} onClick={handleRemoveButton}>
            삭제
          </Button>
        </div>
      </TodoCard>
    </div>
  );
}

export default Todo;
