export interface IIngredients {
  imageUri: string;
  name: string;
  quantity: string;
}

export interface IIngredientsWithSelectionStatus extends IIngredients {
  isSelected: boolean;
}
