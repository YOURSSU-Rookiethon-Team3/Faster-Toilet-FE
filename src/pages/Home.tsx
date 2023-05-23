// 0. 메인 화면
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LandingLogo from '../assets/poo.png';
import { useState } from 'react';

const Home = () => {
  // TODO : 방문자 수 데이터 받아오기
  const [visitor, setVisitor] = useState(1932);
  return (
    <>
    <Container>
      <img src={LandingLogo} alt="landing-logo" style={{ width: "71px" }} />
      <Title>급할때</Title>
      <SubTitle>지금까지 {visitor.toLocaleString()}명이 저에게 추천받았어요.</SubTitle>
      <Button to="/building-list">찾아보기</Button>
    </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30vh;
`;

const Title = styled.div`
  margin: 10px;
  font-weight: bold;
  font-size: 46px;
  color: black;
`;

const SubTitle = styled.div`
  color: var(--sub-text);
  font-size: 12px;
`;

const Button = styled(Link)`
  margin-top: 50px;
  padding: 17px 55px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: var(--star-indicator);
  border-radius: 30px;
  border: none;
  outline: none;
`;