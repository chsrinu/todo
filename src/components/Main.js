import React, { Component } from 'react';
import { AsyncStorage, TouchableOpacity, View, Text, FlatList, BackHandler, ToastAndroid, Picker } from 'react-native';
import { connect } from 'react-redux';
import { dDimensions } from '../constants';
import { List, CardSection } from '../commonComponents';
import * as actionCreators from '../actions';


class Main extends Component {
  state={ pendingData: [], completedData: [], filter: 'Pending', refresh: false }

  async componentWillMount() {
  try {
    if(this.props.isNew)
      await AsyncStorage.setItem('userName', JSON.stringify(this.props.userName));

      var name = await AsyncStorage.getItem('userName');
      console.log('name stored',name);
      var value = await AsyncStorage.getItem('Pending');
      this.setState({ pendingData: JSON.parse(value) });
      this.props.savePendingList(this.state.pendingData);
      var value1 = await AsyncStorage.getItem('Completed');
      this.setState({ completedData: JSON.parse(value1) });
      this.props.saveCompletedList(this.state.completedData);
      console.log(this.state);
      } catch (error) {
        console.log(error);
    }
  //  console.log('profile', this.state.data);
   }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    //this.props.saveToAsync();
}
filterChanged(value) {
  this.setState({ filter: value });
  //this.props.saveFilter(filter);
}

handleBackButton() {
    //ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
}
saveIndex(item) {
//  console.log('index is', item.index);
if(this.state.filter == 'Pending'){
  console.log('move item to completed');
  this.props.moveItemToCompleted(item.index);
}
let temp = this.state.refresh;
this.setState({ refresh: !(temp) });
}

render() {
  const ListItem = ({ item }) => {
    console.log(item.item.name);
    return (<TouchableOpacity onPress={() => this.saveIndex(item)}>
      <CardSection>
        <Text style={{ fontSize: dDimensions.fontSize, color: 'black' }}>{item.item.name}</Text>
      </CardSection>
    </TouchableOpacity>);
  };
  console.log(this.props.data);
    return (
    <View style={styles.containerStyle}>
    <Picker
      selectedValue={this.state.filter}
      style={{ height: dDimensions.height * 0.1, width: dDimensions.width * 0.40, alignSelf: 'flex-end' }}
      onValueChange={(value) => this.filterChanged(value)}
    >
      <Picker.Item label="Completed" value="Completed" />
      <Picker.Item label="Pending" value="Pending" />
    </Picker>
      <List refresh={this.state.refresh}>
        <FlatList
          data={this.state.filter == 'Completed' ? this.props.completedData : this.props.pendingData}
          renderItem={(item) => <ListItem item={item} />}
          keyExtractor={(item, index) => index}
        />
      </List>
    </View>
      );
}
}
function mapStateToProps(state) {
  return { pendingData: state.data.pendingList,
    completedData: state.data.completedList,
   header: state.data.header };
}
const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'white'
  }
};
export default connect(mapStateToProps, actionCreators)(Main);
