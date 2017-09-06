import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PeopleDetail extends Component {
    render() {
        return(
            <View style={styles.detail}>
                <Text style={styles.name}>{this.props.detail.name}</Text>
                <Text style={styles.age}>{this.props.detail.age}</Text>
            </View>
        )
    }
}
const styles = {
    detail: {

    },
    name: {

    },
    age: {

    }
}