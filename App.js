import React, { Component } from "react";
import { createBottomTabNavigator,createAppContainer} from 'react-navigation'
import Homenavigation from './components/Home/Homenavigation'
import Homeproducts from './components/Home/Homeproducts'
import Offersnavigation from './components/Offers/Offersnavigation';
import Popularnavigation from './components/Popular/Popularnavigation';
import Cartnavigation from './components/Cart/Cartnavigation';
import Accountnavigation from './components/Account/Accountnavigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { SearchBar } from 'react-native-elements';
import { Header, Body, Right, Title, Container, Left} from 'native-base';
  
//  const Homenavigator = createStackNavigator({
//    Homenavigation: { screen: Homenavigation},
//     Homeproducts: {screen: Homeproducts}
//   })

 const BottomNavigator= createBottomTabNavigator({
  Homenavigation: {
    screen: Homenavigation,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
       <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Offersnavigation: {
    screen: Offersnavigation,
    navigationOptions: {
      tabBarLabel: 'Offers',
     tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-gift" color={tintColor} size={24} />
      )
    }
  },
  Popularnavigation: {
    screen: Popularnavigation,
    navigationOptions: {
      tabBarLabel: 'Popular',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-analytics" color={tintColor} size={24} />
      )
    }
  },
  Cartnavigation: {
    screen: Cartnavigation,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-cart" color={tintColor} size={24} />
      )
    }
  },
  Accountnavigation: {
    screen: Accountnavigation,
    navigationOptions: {
      tabBarLabel: 'Account',
     tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  },
 
  

}, 
   {
     initialRouteName: 'Homenavigation',
    order: ['Homenavigation', 'Offersnavigation','Popularnavigation','Cartnavigation','Accountnavigation'],
   
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey'
    }
  });
  // const AppContainer=createAppContainer(BottomNavigator);
 
//  const login = createStackNavigator({
 
//   BottomNavigator : {
//     screen: BottomNavigator},
//   Homenavigation: { screen: Homenavigation},
//   Homeproducts: { screen: Homeproducts},
//  },
//  {
//     initialRouteName: 'Homenavigation'
    
//   },
//  )
  
 const AppContainer=createAppContainer(BottomNavigator);
 
 export default class App extends Component{
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

 render(){
  const { search } = this.state;

return(

 <Container>
  
        <Header>
          <Left>
          <Icon name="logo-bitbucket" size={35} />
          </Left>
          <Body>
            <Title>Basket</Title>
          </Body>
         
         <Right>
         <Icon name="ios-cart" size={35} />
         </Right>
         
        </Header>
          
        <SearchBar 
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
        platform="android"
      />
 <AppContainer/>
 </Container>
 ) }
}
// export default createStackNavigator({ Homenavigation }, { headerMode: "none" });