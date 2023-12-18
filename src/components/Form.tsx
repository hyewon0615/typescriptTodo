import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { addTodo } from '../api/todos';

const FormBox = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #ececec;
  border-radius: 10px;
  width: 100%;
  & input {
    outline: none;
    border: none;
    border-radius: 10px;
    height: 35px;
    margin: 0 10px;
    width: 250px;
  }
  & label {
    font-weight: 600;
  }
  & button {
    border: none;
    border-radius: 10px;
    height: 35px;
    width: 100px;
    background-color: #059369;
    color: white;
    font-size: 12px;
  }
`;

function Form() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation(addTodo, {
    onSuccess: (data) => {
      //입력이 되면
      console.log('data', data);
      queryClient.invalidateQueries('todos'); //성공하면 todos를 invalidate 해
    }
  });
  // form 태그 내부에서의 submit이 실행된 경우 호출되는 함수
  const handleSubmitButtonClick = async (event: React.FormEvent<HTMLFormElement>) => {
    // submit의 고유 기능인, 새로고침(refresh)을 막아주는 역함
    event.preventDefault();

    // 추가하려는 todo를 newTodo라는 객체로 세로 만듦
    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false
    };

    // 인자 : payload
    if (!title || !content) {
      alert('빈칸없이 작성해 주세요!');
    } else {
      mutation.mutate(newTodo);
      setTitle('');
      setContent('');
    }
  };
  return (
    <FormBox onSubmit={handleSubmitButtonClick}>
      <div>
        <label>할일</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>내용</label>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button>TODO 추가</button>
    </FormBox>
  );
}

export default Form;
