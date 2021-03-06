import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

// action types
const SHOW_SIDE_BAR = 'base/SHOW_SIDE_BAR';
const HIDE_SIDE_BAR = 'base/HIDE_SIDE_BAR';
const SHOW_POST_MODAL = 'base/SHOW_POST_MODAL';
const HIDE_POST_MODAL = 'base/HIDE_POST_MODAL';
const SHOW_AUTH_FORM_MODAL = 'base/SHOW_AUTH_FORM_MODAL';
const HIDE_AUTH_FORM_MODAL = 'base/HIDE_AUTH_FORM_MODAL';

// action creator
export const showSideBar = createAction(SHOW_SIDE_BAR);
export const hideSideBar = createAction(HIDE_SIDE_BAR);
export const showPostModal = createAction(SHOW_POST_MODAL);
export const hidePostModal = createAction(HIDE_POST_MODAL);
export const showAuthFormModal = createAction(
  SHOW_AUTH_FORM_MODAL,
  ({ type }) => ({ type })
);
export const hideAuthFormModal = createAction(
  HIDE_AUTH_FORM_MODAL,
  ({ type }) => ({ type })
);

// initial state
const initialState = Map({
  sideBarVisible: false,
  postModalVisible: false,
  registerModalVisible: false,
  loginModalVisible: false,
});

// reducer
export default handleActions(
  {
    [SHOW_SIDE_BAR]: state => {
      return state.set('sideBarVisible', true);
    },
    [HIDE_SIDE_BAR]: state => {
      return state.set('sideBarVisible', false);
    },
    [SHOW_POST_MODAL]: state => {
      return state.set('postModalVisible', true);
    },
    [HIDE_POST_MODAL]: state => {
      return state.set('postModalVisible', false);
    },
    [SHOW_AUTH_FORM_MODAL]: (state, action) => {
      const { type } = action.payload;
      if (type === 'login') {
        return state.set('loginModalVisible', true);
      }

      if (type === 'register') {
        return state.set('registerModalVisible', true);
      }

      return state;
    },
    [HIDE_AUTH_FORM_MODAL]: (state, action) => {
      const { type } = action.payload;
      if (type === 'login') {
        return state.set('loginModalVisible', false);
      }

      if (type === 'register') {
        return state.set('registerModalVisible', false);
      }

      return state;
    },
  },
  initialState
);
