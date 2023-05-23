// 0. 메인 화면
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    Home
    <Button to="/building-list">찾아보기</Button>
    </>
  );
}

export default Home;

const Button = styled(Link)`
  background-color: var(--primary);
  color: white;
  border: none;
  outline: none;
`;