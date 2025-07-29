import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const RoutesConstants ={
    Login: 'Login',
    Register: 'Register',
    Home: 'Home'
} as const;

export type AuthStackParamList = {
    [RoutesConstants.Login]: undefined;
    [RoutesConstants.Register]: undefined;
};
export type AppStackParamList = {
    [RoutesConstants.Home]: undefined;
};

export const AppStackNavigator = createNativeStackNavigator<AppStackParamList>()
export const AuthStackNavigator = createNativeStackNavigator<AuthStackParamList>()
