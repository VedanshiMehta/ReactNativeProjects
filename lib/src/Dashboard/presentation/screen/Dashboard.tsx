import { RoutesConstants, Tab } from "../../../../core/constants/RoutesConstants";
import Home from "../../../Home/presentation/screen/Home";
import UserProfile from "../../../UserProfile/presentation/screen/UserProfile";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function TabContainer(){
    return(
            <Tab.Navigator screenOptions={{
                  tabBarActiveTintColor:'orange',
                
                  
                }}>
                <Tab.Screen name={RoutesConstants.HomeScreen} component={Home} options={{
                    tabBarIcon:({color})=> <Icon name="home" size={30} color={color}/>,
                  
                }}/>
                <Tab.Screen name={RoutesConstants.UserProfie} component={UserProfile} options={{
                    tabBarIcon:({color})=> <Icon name="person" size={30} color={color}/>,
                    tabBarBadge: 3,
                  
                }}/>        
            </Tab.Navigator>
    )
}

