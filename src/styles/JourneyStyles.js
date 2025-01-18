import styled from 'styled-components'

const getEventColor = (key) => {
  const colorMap = {
    1: 'var(--1st-event)',
    2: 'var(--2nd-event)',
    3: 'var(--3rd-event)',
    4: 'var(--4th-event)',
    5: 'var(--5th-event)',
    6: 'var(--6th-event)',
    7: 'var(--7th-event)',
    8: 'var(--8th-event)',
  }
  return colorMap[key] || 'var(--blue)' // fallback to original blue color
}

export const Timeline = styled.div`
	width: 100%;
	max-width: 80rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 2rem 0 4rem 0;
	.vertical-line {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 0.5rem;
		height: 100%;
		border-radius: 25px;
		background: var(--timeline-gradient);
		z-index: 0;
	}

	.row-cv-btn {
		margin: 2rem 0 0 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    .col-left {
			flex: 1;
      display: flex;
      justify-content: flex-end;
    }
		
		.col-center {
			width: 6rem;
		}

		.col-right {
			flex: 1;
			display: flex;
			justify-content: flex-end;
		}
  }
`

export const Event = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: -4rem;
	.row {
		display: flex;
		flex-direction: ${(props) =>
			props.className === 'right' ? 'row' : 'row-reverse'};
		justify-content: space-between;
		align-items: center;
	}

	.spacer-opposite {
		flex: 1;
	}
	.event-date {
		flex: 1;
		margin-left: ${(props) => (props.className === 'left' ? '6rem' : '0')};
		margin-right: ${(props) =>
			props.className === 'right' ? '6rem' : '0'};
		text-align: ${(props) =>
			props.className === 'left' ? 'left' : 'right'};
		font-size: var(--text-s);
		color: var(--orange);
		z-index: 3;
	}

	.event-point-line-icon {
		flex: 1;
		display: flex;
		align-items: center;
		flex-direction: ${(props) =>
			props.className === 'left' ? 'row' : 'row-reverse'};
		justify-content: ${(props) =>
			props.className === 'left' ? 'flex-start' : 'flex-start'};
		gap: 0.5rem;
	}

	.event-point {
		width: 2rem;
		height: 2rem;
		max-width: 2rem;
		background: #111;
		border: 0.4rem solid ${($props) => getEventColor($props.$eventKey)};
		border-radius: 50%;
		z-index: 3;
	}

	.event-arrow {
		display: flex;
		align-items: center;
		width: 1rem;
		fill: ${($props) => getEventColor($props.$eventKey)};
		transform: ${(props) =>
			props.className === 'right' ? 'rotate(180deg)' : 'rotate(0)'};
	}

	.event-dotted-line {
		flex: 1;
		display: flex;
		flex-direction: ${(props) =>
			props.className === 'right' ? 'row' : 'row-reverse'};
		align-items: center;
		max-width: 50rem;
		height: 0;
		border-top: 2px dashed var(--text-color-soft);
		position: relative;

		.event-icon-container {
			width: 5rem;
			height: 5rem;
			background: var(--text-color-lt);
			border-radius: 50%;
			background-color: ${($props) => getEventColor($props.$eventKey)};
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.event-icon {
			width: 4.2rem;
			height: 4.2rem;
			background: var(--text-color-lt);
			border-radius: 50%;
			background-color: var(--text-color-lt);
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
			svg {
				width: 3rem;
				fill: var(--text-color-mdDk);
			}
		}
		.event-icon-arrow {
			position: relative;
			margin-bottom: 0.2rem;
			margin-left: ${(props) =>
				props.className === 'left' ? '0' : '-.3rem'};
			margin-right: ${(props) =>
				props.className === 'right' ? '0' : '-.3rem'};
			display: flex;
			align-items: center;
			width: 1rem;
			fill: ${($props) => getEventColor($props.$eventKey)};
			transform: ${(props) =>
				props.className === 'left' ? 'rotate(180deg)' : 'rotate(0)'};
		}

		@media only screen and (max-width: 847px) {
			.event-icon-container {
				width: 3rem;
				height: 3rem;
				background: var(--text-color-lt);
				border-radius: 50%;
				background-color: ${($props) =>
					getEventColor($props.$eventKey)};
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.event-icon {
				width: 2.2rem;
				height: 2.2rem;
				background: var(--text-color-lt);
				border-radius: 50%;
				background-color: var(--text-color-lt);
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
				svg {
					width: 2rem;
					fill: var(--text-color-dk);
				}
			}
			.event-icon-arrow {
				position: relative;
				margin-bottom: 0.2rem;
				margin-left: ${(props) =>
					props.className === 'left' ? '0' : '-.3rem'};
				margin-right: ${(props) =>
					props.className === 'right' ? '0' : '-.3rem'};
				display: flex;
				align-items: center;
				width: 1rem;
				fill: ${($props) => getEventColor($props.$eventKey)};
				transform: ${(props) =>
					props.className === 'left'
						? 'rotate(180deg)'
						: 'rotate(0)'};
			}
		}
	}

	.event-content-container {
		flex: 1;
		margin-top: 1rem;
		margin-left: ${(props) => (props.className === 'left' ? '6rem' : '0')};
		margin-right: ${(props) =>
			props.className === 'right' ? '6rem' : '0'};
		text-align: ${(props) =>
			props.className === 'left' ? 'left' : 'right'};
		display: flex;
		flex-direction: column;
		z-index: 3;
	}

	.event-content {
		align-self: ${(props) =>
			props.className === 'left' ? 'flex-start' : 'flex-end'};
		width: fit-content;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		gap: .4rem;
	}

	.event-title {
		font-size: var(--text-r);
		text-transform: uppercase;
		color: var(--ltOrange);
	}

	.event-provider {
		font-size: var(--text-r);
		line-height: 1.5;
	}

	.event-description {
		align-self: ${(props) =>
			props.className === 'left' ? 'flex-start' : 'flex-end'};
		font-size: var(--text-s);
		color: var(--text-color-md);
		line-height: 1.5;
		max-width: 30rem;
	}

	@media only screen and (max-width: 746px) {
		margin-bottom: -6rem;
	}
	@media only screen and (max-width: 450px) {
		margin-bottom: -7rem;

		.event-title {
			font-size: var(--text-s);
      line-height: 1.4;
		}
		.event-provider {
			font-size: var(--text-xs);
		}
	}
`

export const Button = styled.button`
	padding: 1rem 2rem;
	font-size: 1.6rem;
	font-weight: 700;
	background: var(--orange);
	color: var(--black);
	border: none;
	border-radius: 5px;
	z-index: 3;
	cursor: pointer;
	transition: all 0.12s ease;
	&:hover {
		background: var(--ltOrange);
	}
`
