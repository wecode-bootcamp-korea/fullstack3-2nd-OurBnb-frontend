// import React from 'react';
// import DayPicker, { DateUtils } from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import { useState } from 'react';

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import styled from 'styled-components';

const Calendar = props => {
	const { startDate, endDate, onChange, isOpen, closeCalendar } = props;

	return (
		<>
			{isOpen && <Background onClick={closeCalendar} />}
			{isOpen && (
				<CalendarWrapper>
					<DatePicker
						selected={startDate}
						onChange={onChange}
						selectsRange
						startDate={startDate}
						endDate={endDate}
						locale={ko}
						shouldCloseOnSelect={false}
						monthsShown={2}
						inline
					/>
				</CalendarWrapper>
			)}
		</>
	);
};
export default Calendar;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const CalendarWrapper = styled.section`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1000;

	.react-datepicker {
		display: flex;
		border-radius: 50px;
		box-sizing: border-box;
		z-index: 199000;
	}

	.react-datepicker__header {
		background-color: white;
		border: none;
	}

	.react-datepicker__current-month {
		margin-top: 10px;
		margin-bottom: 30px;
		margin-top: 20px;
	}

	.react-datepicker__navigation {
		top: 43px;
	}

	.react-datepicker__navigation--previous {
		left: 20px;
	}

	.react-datepicker__navigation--next {
		right: 20px;
	}

	.react-datepicker__month-container {
		margin: 20px;
	}

	.react-datepicker__day-names {
	}

	.react-datepicker__day-name {
		margin: 5px;
		color: #222222;
	}

	.react-datepicker__week {
		color: #222222;
	}

	.react-datepicker__day {
		margin: 5px;
		color: #222222;
		border-radius: 30px;
	}

	.react-datepicker__day--selected {
		background-color: #222222;
		color: #f1f1f1;
		border-radius: 30px;
	}

	.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--selected) {
		background-color: white;
		color: #222222;
		border-radius: 30px;
	}

	.react-datepicker__day--in-range {
		background-color: #f1f1f1;
		color: #222222;
		border-radius: 30px;
	}

	.react-datepicker__day--selected:hover {
		background-color: #222222;
		color: #f1f1f1;
		border-radius: 30px;
	}

	.react-datepicker__day--in-selecting-range:hover,
	.react-datepicker__day--in-range:hover {
		background-color: #222222;
		color: #f1f1f1;
		border-radius: 30px;
	}

	.react-datepicker__day--range-start,
	.react-datepicker__day--range-end {
		background-color: #222222;
		color: #f1f1f1;
		border-radius: 30px;
	}
`;
