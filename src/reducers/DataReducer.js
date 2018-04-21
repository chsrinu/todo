import { AsyncStorage } from 'react-native';
import { actions } from '../constants';

const INITIAL_STATE = {
  pendingList: [],
  completedList: [],
  currentItem: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
      case actions.ACTION_ADD_ITEM:
          let temp = state.pendingList;
          if(!temp)
            temp=[];
          temp.push({ name: state.currentItem });
          saveData('Pending',temp);
          return { ...state, pendingList: temp, currentItem: '' };
      case actions.ACTION_NEW_ITEM:
          console.log('new current', action.payload);
          return { ...state, currentItem: action.payload };
      case actions.ACTION_MOVE_ITEM:
        //move from one array to another
        console.log('payload is ', action.payload);
        let pendingArray = state.pendingList;
        let todoCompleted = pendingArray.splice(action.payload, 1);
        let completedArray = state.completedList;
        if(!completedArray)
          completedArray=[];
        completedArray.push({ name: todoCompleted[0].name });
        saveData('Completed',completedArray);
        //console.log(pendingArray, completedArray, todoCompleted);
          return { ...state, completedList: completedArray, pendingList: pendingArray };
      case actions.SAVE_TO_ASYNC:
    //  saveData('Pending',state.pendingList);
    //  saveData('Completed',state.completedList);
        return { ...state };
      case actions.ACTION_PENDING_LIST:
      return { ...state, pendingList: action.payload };
      case actions.ACTION_COMPLETED_LIST:
      return { ...state, completedList: action.payload };
      default: return { ...state };
    }
};
async function saveData(key,data){
  console.log('saving data');
try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
      //console.log('data saved to async');
  } catch (error) {
// Error saving data
    console.log(error,'in saving data');
  }
}
