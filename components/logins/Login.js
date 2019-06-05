import React, { Component } from 'react';
import {Container, Text, Input,Form, Item, Label, Button} from 'native-base';
import {StyleSheet} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../actions/listAction";
import { Navigation } from "react-native-navigation";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : "체육진행",
            password : "123"
        }
    }
    pushViewPostScreen() {
        Navigation.setRoot({
            root: {
                stack : {
                    id:"AppStack",
                    children : [
                        {
                            component: {
                                name: "List"
                            }
                        }
                    ]
                }
            }
        });
    }

    login() {
        this.props.list(this.state.id, this.state.password,"login").done(()=>{
            if(this.props.isLoggedIn){
                this.pushViewPostScreen();
            }else{
                alert("로그인에 실패하였습니다");
            }
        });
    }

    render() {
        const {actionLogin} = this.props;
        return (
            <Container style={styles.container}>
                <Form>
                    <Text style={styles.formTop}>경기대학교 서명 시스템 로그인</Text>
                </Form>
                <Form style={styles.form}>
                    <Item floatingLabel>
                        <Label>아이디</Label>
                        <Input 
                            onChangeText={id => this.setState({ id })}
                            value={this.state.id}></Input>
                    </Item>
                    <Item floatingLabel>
                        <Label>비밀번호</Label>
                        <Input secureTextEntry={true} 
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}></Input>
                    </Item>
                </Form>
                    <Button block style={styles.button} onPress={() => this.login()}>
                    <Text>
                        로그인
                    </Text>
                    </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    formTop : {
        fontSize : 40,
        color : "#6ebddd",
        marginBottom : 20
    }, 
    form : {
        padding : 20,
        width : 500,
        borderWidth : 4,
        borderColor: "#6ebddd",
    },
    button : {
        marginLeft: 385, 
        marginRight: 385, 
        marginTop: 20
    }
});

const mapStateToProps = state => ({
    id : state.auth.id,
    password : state.auth.password,
    error : state.auth.error,
    lists : state.auth.lists,
    isLoggedIn : state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    list:(id, password,types) => dispatch(actions.list({id, password,types}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
