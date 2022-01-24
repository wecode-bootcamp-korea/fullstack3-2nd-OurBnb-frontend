import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import styled from 'styled-components';

export default function Calendar() {
	return (
		<Wrapper>
			<DayPickerInput />
		</Wrapper>
	);
}

const Wrapper = styled.div``;
