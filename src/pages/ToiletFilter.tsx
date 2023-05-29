// 2. 필터링 설정
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SmileLogo from '../assets/smile.png';
import XButton from '../assets/x-button.png';
import 'rc-slider/assets/index.css';
import ExtraButton from '../components/ExtraButton';
import RangeInput from '../components/RangeInput';
import { useState } from 'react';

const ToiletFilter = () => {
  /** 청결도 상태 변수 */
  const [cleanliness, setCleanliness] = useState(50);
  /** 혼잡도 상태 변수 */
  const [congestion, setCongestion] = useState(50);
  /** 부가 시설 상태 변수 */
  const [facilityOptions, setFacilityOptions] = useState<{ [key: string]: boolean }[]>([
    { '샤워실': false },
    { '비데': false },
    { '장애인 화장실': false },
    { '화장대': false },
  ]);
  const [filtered, setFiltered] = useState(10);

  const handleCleanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setCleanliness(value);
  };

  const handleCongestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setCongestion(value);
  };

  const handleOptionClick = (index: number) => {
    setFacilityOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = { ...newOptions[index], 
        [Object.keys(newOptions[index])[0]]: !newOptions[index][Object.keys(newOptions[index])[0]] 
      };
      return newOptions;
    });
  };

  const handleApplyClick = () => {
    console.log(`청결도 : ${cleanliness}, 혼잡도 : ${congestion}`);
    console.log(facilityOptions);
  }

  const handleResetClick = () => {
    setCleanliness(50);
    setCongestion(50);
    setFacilityOptions([
      { '샤워실': false },
      { '비데': false },
      { '장애인 화장실': false },
      { '화장대': false },
    ]);
    setFiltered(10);
  };

  return (
    <>
      <Container>
        <Button to="/building-list">
          <img src={XButton} alt="x-button" style={{ width: "21px" }} />
        </Button>
        <TitleWrapper>
          <img src={SmileLogo} alt="smile-logo" style={{ width: "59px", marginTop: "20px" }} />
          <Title>
            <span style={{ color: "var(--highlight)"}}>원하는 화장실 조건</span>을 추가해볼까요?
          </Title>
        </TitleWrapper>
        <Line />
        <ConditionWrapper>
          <ConditionTitle>청결도</ConditionTitle>
          <RangeInput
            selectedValue={cleanliness}
            onRangeChange={handleCleanChange}
          />
          <SliderBaseWrapper>
            <BaseText>상관없음</BaseText>
            <BaseText>보통</BaseText>
            <BaseText>중요함</BaseText>
          </SliderBaseWrapper>
          <Line />
        </ConditionWrapper>
        <ConditionWrapper>
          <ConditionTitle>혼잡도</ConditionTitle>
          <RangeInput
            selectedValue={congestion}
            onRangeChange={handleCongestionChange}
          />
          <SliderBaseWrapper>
            <BaseText>상관없음</BaseText>
            <BaseText>보통</BaseText>
            <BaseText>중요함</BaseText>
          </SliderBaseWrapper>
          <Line />
        </ConditionWrapper>
        <ConditionWrapper>
          <ConditionTitle>부가 시설</ConditionTitle>
          <ButtonGrid>
            {facilityOptions.map((option, index) => (
              <ExtraButton
                key={Object.keys(option)[0]}
                onClick={() => handleOptionClick(index)}
                isActive={option[Object.keys(option)[0]]}
              >
                {Object.keys(option)[0]}
              </ExtraButton>
            ))}
          </ButtonGrid>
        </ConditionWrapper>
        <CountIndicator>
          조건에 해당하는 <span style={{ fontWeight: "bold" }}>화장실이 {filtered}개</span> 있습니다.
        </CountIndicator>
        <ButtonRow>
          <InitButton onClick={handleResetClick}><u>옵션 초기화</u></InitButton>
          <ApplyButton to="/building-list" onClick={handleApplyClick}>적용하기</ApplyButton>
        </ButtonRow>
      </Container>
    </>
  );
}

export default ToiletFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  align-self: flex-end;
  width: 21px;
  margin: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.div`
  margin-top: 10px;
  color: var(--black);
  font-size: 17px;
  font-weight: bold;
`;

const Line = styled.hr`
  width: 350px;
  background-color: var(--basic-button);
  margin: 15px;
`;

const ConditionWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ConditionTitle = styled.div`
  color: var(--black);
  font-size: 18px;
  margin: 10px;
`;

const SliderBaseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const BaseText = styled.div`
  color: var(--sub-text);
  font-size: 12px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
`;

const CountIndicator = styled.div`
  color: var(--sub-text);
  font-size: 10px;
  margin: 30px;
`;

const ApplyButton = styled(Link)`
  padding: 10px 50px;
  border-radius: 7px;
  background-color: var(--primary);
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  outline: none;
`;

const InitButton = styled.button`
  padding: 10px 50px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  outline: none;
  color: var(--primary);
  background: none;
`;