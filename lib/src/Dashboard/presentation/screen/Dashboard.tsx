import { RoutesConstants, Tab } from "../../../../core/constants/RoutesConstants";
import Home from "../../../Home/presentation/screen/Home";
import UserProfile from "../../../UserProfile/presentation/screen/UserProfile";



export default function TabContainer(){
    return(
            <Tab.Navigator screenOptions={{
                  tabBarActiveTintColor:'orange'

                }}>
                <Tab.Screen name={RoutesConstants.HomeScreen} component={Home}/>
                <Tab.Screen name={RoutesConstants.UserProfie} component={UserProfile}/>        
            </Tab.Navigator>
    )
}