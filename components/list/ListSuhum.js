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
    View,
    List as Lists,
    ListItem
} from 'native-base';
import { StyleSheet } from 'react-native'
import { connect } from "react-redux";
import * as actions from "../../actions/listAction";
import { Navigation } from 'react-native-navigation';
class ListSuhum extends Component {
    constructor(props){
        super(props);
        let list = this.props.suhumLists;
        let eband = [];
        let result_cd = [];
        for(let i = 0; i < list.length; i++){
            eband.push(list[i].eband);
        }
        this.state = {
            name : eband,
            code : result_cd,
            inLoding : true,
            keyword : "",
        }
    }
    componentDidMount() {
      
    }

      
      
    render() {
        const ListItems = this.state.name.map(
            (nam,index) =>{
                if(nam.includes(this.state.keyword)){
                    return(
                        <ListItem key={index}>
                            <Text >
                                {nam}
                            </Text>
                        </ListItem>
                    )
                }
            }
        )
        return (
                <Container>
                    <Header searchBar rounded>
                    <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" 
                        onChangeText={keyword => this.setState({keyword : keyword})} />
                    </Item>
                    <Button transparent>
                    <Text>Search</Text>
                    </Button>
                </Header>
                    <Content>
                        <Lists>
                            {ListItems}
                        </Lists>
                    </Content>
                </Container>
            
          );
    }
}

const styles = StyleSheet.create({
    welcome: {
      fontSize: 28
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

const mapStateToProps = state => ({
    lists : state.auth.lists,
    id : state.auth.id,

    isLoggedIn : state.auth.isLoggedIn,
    suhumLists : state.auth.suhumLists,
});

const mapDispatchToProps = dispatch => ({
    list:(id,code,types) => dispatch(actions.list({id,code,types}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSuhum);
// export default Login;
