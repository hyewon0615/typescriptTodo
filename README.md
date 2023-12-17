### 프로젝트 소개

#### 타입스크립트를 이용하여 투두리스트 만들기

투두를 완료하면 완료칸으로 이동하고 취소하면 다시 working칸으로 이동한다. 그리고 삭제도 가능하다.

json-server를 이용하여 정보가 유지되도록 했다.

##### 사용 라이브러리

react-query
axios
json-server
styled-component
uuid

##### 컴포넌트

기능이 분리되는 구간, 컴포넌트로 분리되어도 props로 내려주는 것이 변경되지 않는 기준으로 분리를해보았다.

크게 Header, Form, Todolist 나눠졌고 Todolist안에 Todo가 하위텀포넌트로 위치해있다.
