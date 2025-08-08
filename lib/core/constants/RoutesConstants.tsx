import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export const RoutesConstants ={
    UserDetails: 'UserDetails',
    AddUser: 'AddUser',
    HomeDrawer: 'HomeDrawer',

} as const;


export type StackParamList={
    [RoutesConstants.HomeDrawer]:undefined
    //[RoutesConstants.UserDetails]:undefined;
    [RoutesConstants.AddUser]:undefined;
};
export type DrawerParamList = {
  [RoutesConstants.UserDetails]: undefined;
};

export const Stack = createNativeStackNavigator<StackParamList>()
export const Drawer = createDrawerNavigator<DrawerParamList>();