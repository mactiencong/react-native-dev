import React, {Component} from 'react';
import { StyleSheet, AppRegistry, Text, ListView, View, Button, Modal } from 'react-native';
import PeopleDetail from './PeopleDetail';
import AddPeopleModal from './AddPeopleModal';

export default class PeopleList extends Component {
    constructor(){
        super();
        this.peopleDs = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2});
        this.state = {
            isShowAddPeopleModal: false,
            isDataLoaded: false,
            title: "Loading data ..."
        };
    }
    componentDidMount(){
        this.loadPeople();
    }
    render(){
        return(
            <View style={styles.main}>
                <Text style={styles.title}>{this.state.title}</Text>
                {this.state.isDataLoaded && (
                    <ListView
                        style={styles.list}
                        dataSource={this.state.people}
                        renderRow={this.renderPeopleDetail}
                    >
                    </ListView>
                )}
                <View style={styles.action}>
                    <Button style={styles.btnAddMore} title="Add more" onPress={()=>this.addMorePressed()}></Button>
                </View>
                { this.state.isShowAddPeopleModal && (
                    <AddPeopleModal addPeople={(name,age)=>this.addPeople(name,age)} close={()=>this.closeAddPeopleModal()}></AddPeopleModal>
                )}
            </View>
        );
    }
    async loadPeople(){
        await setTimeout(()=>{
            this.people = [{name:"matico",age:29},{name:"congmt",age:18}];
            this.updatePeopleList();
            this.setState({title: "PEOPLE", isDataLoaded: true});
        }, 2000);
        
    }
    updatePeopleList(){
        this.setState({people: this.peopleDs.cloneWithRows(this.people)});
    }
    addPeople(name, age){
        this.people.push({name: name, age: age});
        this.updatePeopleList();
    }
    renderPeopleDetail(people){
        return(
            <PeopleDetail detail={people}></PeopleDetail>
        );
    }
    addMorePressed(){
        this.setState({isShowAddPeopleModal: true});
    }
    closeAddPeopleModal(){
        this.setState({isShowAddPeopleModal: false});
    }
}

const styles = {
    main: {
        padding: 20
    },
    title: {
        fontSize: 20
    },
    list:{
        backgroundColor: "#eaeaea",
        marginTop: 5,
        padding: 5
    },
    action: {

    },
    btnAddMore: {
        backgroundColor: "#841584"
    }
}