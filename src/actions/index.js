import { actions } from '../constants';

export const userNameChanged = (name) => (
  {
    type: actions.ACTION_USERNAME,
    payload: name
  }
);

export const userLoggedOut = () => (
  {
    type: actions.ACTION_LOGGEDOUT,
  }
);
export const currentNewItem = (itemName) => {
//console.log('actions', itemName);
return {
    type: actions.ACTION_NEW_ITEM,
    payload: itemName
  };
};
export const addItemToList = (itemName) => (
  {
    type: actions.ACTION_ADD_ITEM,
    payload: itemName
  }
);
export const moveItemToCompleted = (index) => (
{
    type: actions.ACTION_MOVE_ITEM,
    payload: index
  }
);
export const saveToAsync = () => (
  {
    type: actions.SAVE_TO_ASYNC
  }
);
export const savePendingList = (data) => (
  {
    type: actions.ACTION_PENDING_LIST,
    payload: data
  }
);
export const saveCompletedList = (data) => (
  {
    type: actions.ACTION_COMPLETED_LIST,
    payload: data
  }
);
