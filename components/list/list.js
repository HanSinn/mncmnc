import React, { Component } from 'react';
import { 
    Container,
    Header,
    Item,
    Input,
    Icon,
    Button,
    Text,
    Content,
    List,
    ListItem
} from 'native-base';
import { connect } from "react-redux";
import * as actions from "../../actions/loginAction";

class Login extends Component {
   
    render() {
        return (
            <Container>
              <Header searchBar rounded>
                <Item>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Header>
              <Content>
                <List>
                    <ListItem itemDivider>
                        <Text>A</Text>
                    </ListItem>                    
                    <ListItem>
                        <Text>Aaron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ali Connors</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>  
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>  
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>  
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>  
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>  
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    
                        
                </List>
                </Content>
            </Container>
          );
    }
}


const mapStateToProps = state => ({
    id : state.auth.id,
    password : state.auth.password,
    error : state.auth.error
});

const mapDispatchToProps = dispatch => ({
    login:(id, password) => dispatch(actions.login({id, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
