import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface RangeInputProps {
  selectedValue: number;
  onRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput = ({ selectedValue, onRangeChange }: RangeInputProps) => {
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRangeChange(event);
  };

  return (
    <RangeSlider
      type="range"
      min={0}
      max={100}
      step={50}
      value={selectedValue}
      onChange={handleRangeChange}
      selectedValue={selectedValue}
    />
  );
};

export default RangeInput;

const RangeSlider = styled.input<{ selectedValue: number }>`
  width: 100%;
  -webkit-appearance: none;
  height: 8px;
  border-radius: 4px;
  background: ${({ selectedValue }) =>
    selectedValue === 50 ? 'linear-gradient(to right, var(--status-active) 0%, var(--status-active) 50%, var(--status-inactive) 50%, var(--status-inactive) 100%)' :
    selectedValue === 100 ? 'linear-gradient(to right, var(--status-active) 0%, var(--status-active) 100%, var(--status-inactive) 100%)' :
    'var(--status-inactive)'};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    background: #4c8bf5;
    cursor: pointer;
  }
`;
