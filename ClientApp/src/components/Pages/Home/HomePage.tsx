import React from 'react';
import { useOnSaleService } from '../../../dataProviders/onSaleProvider';
import { useTrendingService } from '../../../dataProviders/trendingProvider';
import { CollapsePanel } from '../../CollapsePanel/CollapsePanel';
import { Props, SectionCard } from '../../SectionCard/SectionCard'
import { HeaderTitle, HomeContainer, HomeContent, LineSeparator, BodyContent } from './StyledHomePage';

export const HomePage = () => {
  const trendingItems = useTrendingService();
  const onSaleItems = useOnSaleService();

  const renderContent = (section: string, title: string, sourceItems: any[] | null) : JSX.Element => {
    let items: Props[] = [];
    if (sourceItems)
    {
      items = sourceItems.map(t => ({
        name: t.name,
        description: t.description,
        ingredient: t.ingredient,
        calories: t.calories,
        imageSrc: t.imageSrc,
        price: t.price
      }));
    }

    const renderBodyContent = () : JSX.Element => {
      return (
        <BodyContent>
          {
            items.map((item, j) => {
              return (
                <SectionCard key={section + j} {...item}/>
              );
            })
          }
        </BodyContent>
      );
    };
    
    return (
      <CollapsePanel title={title} renderContent={renderBodyContent} />
    );
  };

  const renderOnSale = () => {

    let items: Props[] = [];
    if (onSaleItems) {
      items = onSaleItems?.map(t => ({
        name: t.name,
        description: t.description,
        ingredient: t.ingredient,
        calories: t.calories,
        imageSrc: t.imageSrc,
        price: t.price
      }));
    }
    
    return (
      <HomeContainer>
        <HeaderTitle>Dont Miss On Sale</HeaderTitle>
        <BodyContent>
          {
            items && items.map((item, j) => {
              return (
                <SectionCard key={'OnSale' + j} {...item}/>
              );
            })
          }
        </BodyContent>
      </HomeContainer>
    );
  };

  return (
    <HomeContent>
      {renderContent('Trending', 'Current Trending', trendingItems)}
      <LineSeparator/>
      {renderContent('OnSale', 'Dont Miss On Sale', onSaleItems)}
    </HomeContent>
  );
}