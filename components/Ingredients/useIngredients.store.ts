import { create } from 'zustand';
import { IIngredientsWithSelectionStatus } from './types/interface';

interface IuserIndredientsStore {
  ingredients: IIngredientsWithSelectionStatus[];
  selectIngredient: (name: string) => void;
  unselectedInredient: (name: string) => void;
  getSelectedIngredients: () => IIngredientsWithSelectionStatus[];
}

const useInredientsStore = create<IuserIndredientsStore>((set, get) => {
  return {
    ingredients: [
      {
        imageUri:
          'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Carrot',
        quantity: '15g',
        isSelected: true,
      },
      {
        imageUri:
          'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Onion',
        quantity: '20g',
        isSelected: true,
      },
      {
        imageUri:
          'https://images.pexels.com/photos/1775037/pexels-photo-1775037.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Croissants',
        quantity: '50g',
        isSelected: true,
      },
      {
        imageUri:
          'https://images.pexels.com/photos/46164/field-of-rapeseeds-oilseed-rape-blutenmeer-yellow-46164.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Mustard',
        quantity: '80g',
        isSelected: true,
      },
      {
        imageUri:
          'https://images.pexels.com/photos/5945660/pexels-photo-5945660.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Yoghurt',
        quantity: '90g',
        isSelected: true,
      },
      {
        imageUri:
          'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Almonds',
        quantity: '10 cloves',
        isSelected: true,
      },
      {
        imageUri:
          'https://images.pexels.com/photos/616353/pexels-photo-616353.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Chicken',
        quantity: 'Full size',
        isSelected: true,
      },
    ],

    getSelectedIngredients: () => {
      const currentState = get();
      return currentState.ingredients.filter(
        ingred => ingred.isSelected === true
      );
    },

    selectIngredient: name => {
      set(state => {
        const newState = { ...state };
        newState.ingredients = newState.ingredients.map(ingred => {
          if (ingred.name === name) {
            ingred.isSelected = true;
          }
          return ingred;
        });
        return newState;
      });
    },

    unselectedInredient: name => {
      set(state => {
        const newState = { ...state };
        newState.ingredients = newState.ingredients.map(ingred => {
          if (ingred.name === name) {
            ingred.isSelected = false;
          }
          return ingred;
        });
        return newState;
      });
    },
  };
});

export default useInredientsStore;
