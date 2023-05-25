import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StarIcon from '../assets/blue-star-token.png';
import ToiletIcon from '../assets/toilet-token.png';

interface CardProps {
  name: string,
  rating: number,
  toiletCnt: number,
  top?: string,
  left?: string,
}

const BuildingCard = ({ name, rating, toiletCnt, top, left }: CardProps) => {
  return (
    <CardContainer top={top} left={left}>
      <Title>{name}</Title>
      <SubTitle>
        <img src={StarIcon} alt="star-icon" style={{ width: "12px" }} />
        {rating} / 
        <img src={ToiletIcon} alt="toilet-icon" style={{ width: "15px" }} />
        {toiletCnt}개
      </SubTitle>
      <Button to="result/:buildingId">이동하기</Button>
    </CardContainer>
  );
}

export default BuildingCard;

const CardContainer = styled.div<{ top?: string, left?: string }>`
  position: absolute;
  width: 145px;
  height: 95px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #394D6A;
  background-color: rgba(255,255,255,0.8);
  top: ${(props) => props.top || '0'};
  left: ${(props) => props.left || '0'};
`;

const Title = styled.div`
  color: var(--black);
  font-weight: Medium;
`;

const SubTitle = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  color: var(--info-icon);
`;

const Button = styled(Link)`
  padding: 3px 15px;
  font-size: 11px;
  font-weight: bold;
  background-color: var(--primary);
  border-radius: 20px;
  color: #ffffff;
  margin-top: 5px;
`;