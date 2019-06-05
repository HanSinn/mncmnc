import React, { Component }  from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Navigation } from 'react-native-navigation'
export default class Loading extends Component {
  
    componentDidMount() {
        console.log("1번째 콘솔")
        setTimeout(function(){
          console.log("2번째 콘솔")
            Navigation.setRoot({
                root: {
                    stack : {
                        id:"Login",
                        children : [
                            {
                                component: {
                                    name: "Login"
                                }
                            }
                        ]
                    }
                }
            });
        },3000);
    }

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Loading</Text>
			</View>
		)
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
