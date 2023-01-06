import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import MMap from './Map';
const Tab = createMaterialTopTabNavigator();

export default function TopTab({navigation}) {
    return(
        <Tab.Navigator  initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'NearByList' }}/>
      <Tab.Screen name="Map" component={MMap} />
    </Tab.Navigator>
    )
}
