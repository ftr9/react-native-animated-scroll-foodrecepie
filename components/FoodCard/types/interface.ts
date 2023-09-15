import { SharedValue } from 'react-native-reanimated';

export interface IFoods {
  name: string;
  price: number;
  image: any;
  inputXRange: number[];
  outputYRange: number[];
  ouputRotationRange: number[];
  outputTextOpacityRange: number[];
}

export interface IFoodCardProps {
  item: IFoods;
  scrollValue: SharedValue<number>;
}
