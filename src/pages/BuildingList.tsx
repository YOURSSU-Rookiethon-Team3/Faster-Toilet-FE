// 1. 건물 정보 출력(평점, 화장실 개수)
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ToiletLogo from '../assets/toilet.png';
import BackgroundImg from '../assets/background.png';
import BuildingCard from '../components/BuildingCard';

const BuildingList = () => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <img src={ToiletLogo} alt="toilet-logo" style={{ width: "78px" }} />
          <Title>
            <span style={{ color: "var(--highlight)"}}>어떤 화장실</span>로 가고싶나요?
          </Title>
          <SubTitle>가고싶은 건물을 클릭해주세요</SubTitle>
        </TitleWrapper>
        <MapWrapper>
          <BuildingCard name='중앙도서관' rating={4.0} toiletCnt={8} top="33vh" left="50vw" />
          <BuildingCard name='형남공학관' rating={5.0} toiletCnt={17} top="54vh" left="20vw" />
          <BuildingCard name='정보과학관' rating={4.5} toiletCnt={11} top="74vh" left="50vw" />
        </MapWrapper>
        <FilterButton to="/filter">화장실 조건 추가</FilterButton>
      </Container>
    </>
  );
}

export default BuildingList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 10px;
  color: var(--black);
  font-size: 22px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: #525252;
`;

const MapWrapper = styled.div`
  width: 400px;
  height: 70vh;
  background: no-repeat center/110% url(${BackgroundImg});
`;

const FilterButton = styled(Link)`
  position: absolute;
  top: 92vh;
  padding: 10px 35px;
  color: #ffffff;
  background-color: var(--primary);
  border-radius: 23px;
  border: none;
  outline: none;
  font-size: 14px;
`;