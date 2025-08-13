import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export const RoutesConstants ={
    Dashboard: 'Dashboard',
    HomeScreen:'Home',
    UserProfie:'User Profile',
    AddPosts: 'Add Posts'
} as const;


export type StackParamList={
    [RoutesConstants.Dashboard]:undefined
    [RoutesConstants.AddPosts]:undefined
   
};
export type TabParamList = {
  [RoutesConstants.HomeScreen]: undefined;
   [RoutesConstants.UserProfie]:undefined;
};

export const Stack = createNativeStackNavigator<StackParamList>()
export const Tab = createBottomTabNavigator<TabParamList>()