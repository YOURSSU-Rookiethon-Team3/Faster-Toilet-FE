import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SoomsilImg from "../assets/soomsil.png";

const SoomsilEat = () => {
  return (
    <Container>
      <Text>
        해결되셨나요? 식사 메뉴 고민은<br />
        <HighlightText>
          <span style={{ fontSize: "13px", color: "var(--highlight)" }}>숨쉴때뭐먹지</span>로 해결보세요!
        </HighlightText><br />
        <Button href="https://eat.soomsil.de/">{`자세히 보기 >`}</Button>
      </Text>
      <img src={SoomsilImg} alt="soomsil-best" style={{ width: "35vw" }} />
    </Container>
  );
}

export default SoomsilEat;

const Container = styled.div`
  width: 335px;
  height: 73px;
  background-color: #e9e9e9;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  color: var(--text-default);
  font-size: 12px;
  font-weight: medium;
  margin-left: 3vw;
`;

const HighlightText = styled.span`
  color: var(--text-default);
  font-size: 13px;
  font-weight: bold;
`;

const Button = styled.a`
  outline: none;
  border: none;
  background: none;
  font-size: 10px;
  color: #555555;
`;