import React, {Component} from 'react';
import { StyleSheet, View, Text, Modal, TextInput, Button } from 'react-native';

export default class AddPeopleModal extends Component {
    constructor(props){
        super(props);
        this.state = {isShowAddPeopleModal: true};
    }
    render() {
        return(
            <Modal style={styles.main} visible={this.state.isShowAddPeopleModal} >
                <TextInput style={styles.textinput} onChangeText={val=>this.setState({name: val})}></TextInput>
                <TextInput style={styles.textinput} onChangeText={val=>this.setState({age: val})}></TextInput>
                <Button title="Add" onPress={()=>this.addPeople()} ></Button>
                <Button title="Close" onPress={this.props.close} ></Button>
            </Modal>
        )
    }
    addPeople(){
        this.props.close();
        var name = this.state.name;
        var age = this.state.age;
        this.props.addPeople(name, age);
    }
}
const styles = {
    main: {
        margin: 20,
        padding: 20
    },
    textinput: {
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "#eaeaea"
    }
}