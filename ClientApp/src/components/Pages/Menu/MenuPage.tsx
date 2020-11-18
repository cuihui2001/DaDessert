import React from 'react';
import { MainCategory, SubCategory, useMenuService } from '../../../dataProviders/menuProvider';
import { SectionCard } from '../../SectionCard/SectionCard';
import { MenuContent, CategoryContent, CategoryTitle, SubCategoryContent, SubCategoryTitle } from './StyledMenuPage';

export const MenuPage = () => {
  const menu = useMenuService();

  const renderSubCategory = (sub: SubCategory, catName: string) => {
    return (
      <CategoryContent>
        <SubCategoryTitle>{sub.name}</SubCategoryTitle>
        <SubCategoryContent>
        {
          sub.items && sub.items.map((item, j) => {
            return (
              <SectionCard key={'Menu_' + catName + '_' + sub.name + '_' + j} {...item}/>
            );
          })
        }
        </SubCategoryContent>
      </CategoryContent>
    );
  };

  const renderCategory = (cat: MainCategory) => {
    return(
      <>
        <CategoryTitle>{cat.name}</CategoryTitle>
        {
          cat.subs && cat.subs.map((sub, i) => {
            return renderSubCategory(sub, cat.name);
          })
        }
      </>
    )
  }
  return (
    <MenuContent>
      {
        menu?.map((category) => {
          return renderCategory(category)
        })
      }
    </MenuContent>
  );
}
