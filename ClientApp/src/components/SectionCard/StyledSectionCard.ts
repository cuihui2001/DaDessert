import styled, { css } from 'styled-components';
import { Colors, FlexColumn, FlexRow, StyledText } from '../utils/StyledUtils';

export const SectionCardContainer = styled(FlexColumn)`
    width: 300px;
    margin: 16px;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.065);
    border-radius: 2px;
    z-index: 0;
    transition: box-shadow 0.5s ease 0s;
    &:hover {
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.065), 0px 4px 4px rgba(0, 0, 0, 0.065);
    }
`;

export const Header = styled(FlexRow)`
    justify-content: space-between;
`;

export const Title = styled.div`
    padding-top: 5px;
    padding-left: 10px;
    color: ${Colors.Gray160};
    font-family: "Brush Script MT", Times, serif;
    font-size: 30px;
    font-weight: bold;
`;

export const DetailContainer = styled.div`
    padding: 10px 20px;
    justify-content: flex-end;
    align-items: center;
`;

export const DetailIcon =  styled.img``;

export const Body = styled.div`
    width: 300px;
    height: 300px;
    perspective: 1000px;  
`;

export const Flipper = styled.div`
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
    ${ props => props.flipped ? css`transform: rotateY(180deg);` : css`transform: rotateY(0deg);` };
`;


export const Front = styled.div`
    width: 300px;
    height: 300px;
    backface-visibility: hidden;

	position: absolute;
	top: 0;
    left: 0;
    z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
`;

export const Back = styled(FlexColumn)`
    padding-top: 10px;
    padding-left: 10px;
    width: 300px;
    height: 300px;
    backface-visibility: hidden;

    justify-content: space-between;
	position: absolute;
	top: 0;
    left: 0;
    
    transform: rotateY(180deg);
`;

const Text = styled(StyledText)`
    font-family: "Lucida Console", Courier, monospace;
`;

export const Description = styled(Text).attrs({
    multiline: true,
    variant: 'medium',
  })`
    padding-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
`;

export const Ingredients = styled(Text).attrs({
    multiline: true,
    variant: 'medium',
  })`
    padding-bottom: 15px;
    font-size: 14px;
`;

export const Calories = styled(Text)`
    padding-bottom: 25px;
    font-size: 24px;
`;

export const Price = styled.div`
    padding-bottom: 20px;
    font-family: "Lucida Console", Courier, monospace;
    font-size: 30px;
    text-align: center;
    color: ${Colors.PacificBlue};
`;

export const Image = styled.img`
    width: 300px;
    height: 300px;
`;

export const LineSeparator = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${Colors.Gray30};
`;