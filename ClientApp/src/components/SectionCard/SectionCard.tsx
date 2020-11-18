import React, { useState } from 'react';
import { Header, SectionCardContainer, Image, Front, Back, Body, Flipper, Title, DetailContainer, LineSeparator, Description, Ingredients, Calories, Price } from './StyledSectionCard';

export type Props = {
    name: string,
    imageSrc: string,
    price: number,
    description: string,
    ingredient: string,
    calories: number
}

export const SectionCard = ({name, imageSrc, price, description, ingredient, calories}: Props) => {
    const [flip, setFlip] = useState<boolean>(false);

    const flipCard = () => {
        setFlip(!flip);
    }

    const renderCardDetail = (description:string, ingredients: string, calories: number, price: number) => {
        ingredients = ingredients ? ingredients : " ";
        const caloriesText =  calories == 0 ? calories + ' Cal.' : " ";
        return(
            <>
                <Description>{description}</Description>
                <Ingredients>{ingredients}</Ingredients>
                <Calories>{caloriesText}</Calories>
                <Price>{'$' + price}</Price>
            </>
        );
    }

    return (
        <SectionCardContainer>
            <Header>
                <Title>{name}</Title>
                <DetailContainer>
                    <img src="images/deticon24.ico" onClick={() => flipCard()}/>
                </DetailContainer>
            </Header>
            <LineSeparator></LineSeparator>
            <Body>
                <Flipper flipped={flip}>
                    <Front>
                        <Image alt="Trending image" src={imageSrc} />
                    </Front>
                    <Back>
                        {renderCardDetail(description, ingredient, calories, price)}
                    </Back>
                </Flipper>
            </Body>
        </SectionCardContainer>
    );
}