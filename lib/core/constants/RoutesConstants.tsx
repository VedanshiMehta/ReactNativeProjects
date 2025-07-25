import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const RoutesConstants ={
    Login: 'Login',
    Register: 'Register',
    Home: 'Home'
} as const;

export type RootStackParamList={
    [RoutesConstants.Login]:undefined;
    [RoutesConstants.Register]:undefined;
    [RoutesConstants.Home]:undefined;

}

export const Stack = createNativeStackNavigator<RootStackParamList>()