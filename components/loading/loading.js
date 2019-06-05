import React, { Component }  from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Navigation } from 'react-native-navigation';



export default class Initialising extends Component {
	
    componentDidMount() {
		
        setTimeout(function(){
            Navigation.setRoot({
                root: {
                    stack : {
                        id:"AppStack",
                        children : [
                            {
                                component: {
                                    name: "login"
                                }
                            }
                        ]
                    }
                }
            });
        },5000);
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
