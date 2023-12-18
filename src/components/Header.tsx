import styled from 'styled-components';

const Banner = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 30px;
  font-weight: 600;
`;
function Header() {
  return <Banner>TodoList</Banner>;
}

export default Header;
