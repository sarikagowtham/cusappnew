import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text} from 'native-base';
import Slideshow from 'react-native-slideshow'

export default class Homenavigation extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,                                                                                                                                                               
      dataSource: [
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLJ-zLuLue6leHdYSe8yKiMh9WgGe1RoJtO3yP6-nGFCTJ8rJ',
        }, {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4HDW0Xq0i3qTAjkYRrm7GGX4sxn6gdYxwwagtQ7MEuDE5rpT',
        }, {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMxcn7_iu0HqbIPh9tm1UiSd0IffKuV4OXGIrbCnx7iVavhT0MA',
        },
      ],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 5000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <Container>
        <Content>
        <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
          <TouchableOpacity>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail  onPress={() => this.props.navigation.navigate('Homeproducts')} title="Home" square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5I4UtGWYmqdyYNGtXNd_rT9E0LZ95xI4_V9r7yhPweR9beu91g' }} />
              </Left>
              <Body>
                <Text  onPress={() => this.props.navigation.navigate('Homeproducts')} title="Home">Grocery and staples</Text>
                <Text note>Rice,Flour,Dal,oils,Ghee,Sugar,Spices,Masala,Nuts,etc</Text>
            
              </Body>
            </ListItem>
          </List>
          </TouchableOpacity>
        </Content>
        
      </Container>
      
    );
  }
}