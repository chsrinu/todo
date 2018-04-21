import { Dimensions } from 'react-native';

var tempWidth = Dimensions.get('window').width;
var tempHeight = Dimensions.get('window').height;
export const dDimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  fontSize: tempWidth / 20,
  headerFontSize: tempWidth / 10,
  tabLablePadding: tempHeight / 70,
  inputTextMarginTop: tempHeight * 0.10
};
export const colors = {
  headerBgColor: '#ffffff',
  headerTextColor: '#ff0000',
};
export const actions = {
  ACTION_USERNAME: 'userNameChange',
  ACTION_LOGGEDOUT: 'userLoggedOut',
  ACTION_NEW_ITEM: 'newItem',
  ACTION_ADD_ITEM: 'addItem',
  ACTION_MOVE_ITEM: 'moveItem',
  SAVE_TO_ASYNC: 'saveData',
  ACTION_PENDING_LIST: 'pendingData',
  ACTION_COMPLETED_LIST: 'completedData'
};
