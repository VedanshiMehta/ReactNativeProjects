import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const Routes = {
    Home: 'Home',
    Details: 'Details'
} as const;

export type RootStackParamList={
  [Routes.Home]: undefined;
  [Routes.Details]: {product: Product}
};
export const myStack = createNativeStackNavigator<RootStackParamList>()