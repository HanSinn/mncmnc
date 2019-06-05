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
    List as Lists,
    ListItem
} from 'native-base';
import { StyleSheet } from 'react-native'
import { connect } from "react-redux";
import * as actions from "../../actions/listAction";
import { Navigation } from 'react-native-navigation';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            test : "",
            name : ["리스트를 불러오는 중입니다."],
            code : [],
            clicked : "",
        }
    }
    componentDidMount() {
        let list = this.props.lists.sportList;
        let result_nm = [];
        let result_cd = [];
        for(let i = 0; i < list.length; i++){
            result_nm.push(list[i].sport_nm);
            result_cd.push(list[i].sport_cd);
        }
        this.setState({
            name : result_nm,
            code : result_cd,
        });
    }

    suhumList(code){
        this.props.list(this.props.id, code,"list").done(()=>{
            Navigation.push("AppStack", {
                component: {
                    name: 'ListSuhum',
                }
            });
        });
        
    }
   

    render() {
        const ListItems = this.state.name.map(
            (name,index) => 
                (
                    <ListItem key={index} onPress={() => this.suhumList(this.state.code[index])}>
                        <Text style={{fontSize : 70}}>
                            {name}
                        </Text>
                    </ListItem>
                )
        )
        return (
            <Container>
                <Content>
                    <Lists style={styles.container}>
                        {ListItems}
                    </Lists>
                </Content>
            </Container>
          );
    }
}

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center"
    }
});
const mapStateToProps = state => ({
    lists : state.auth.lists,
    id : state.auth.id,

    isLoggedIn : state.auth.isLoggedIn,
    suhumLists : state.auth.suhumLists,
});

const mapDispatchToProps = dispatch => ({
    list:(id,code,types) => dispatch(actions.list({id,code,types}))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default Login;
