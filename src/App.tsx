import styled from 'styled-components';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import GlobalStyle from './globalStyle/GlobalStyle';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentContainer = styled.div`
  width: 1200px;
  min-width: 800px;
`;
function App() {
  return (
    <Container>
      <ContentContainer>
        <GlobalStyle />
        <Header />
        <Form />
        <TodoList isActive={true} />
        <TodoList isActive={false} />
      </ContentContainer>
    </Container>
  );
}

export default App;
