import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from "./store/index.js";
import { PROFILE_TRUE, PROFILE_FALSE } from "./store/profile/actionTypes.js";

const ProfileView = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => {
    console.log(state);
    return state.content;
  })

  return  <div>
    <h1>{content}</h1>

    <p content={() => {
      dispatch({
        type: PROFILE_TRUE
      })
    }}>{content}</p>
    <p content={() => {
      dispatch({
        type: PROFILE_FALSE
      })
    }}>{content}</p>
  </div>
}

export const ReduxProfile = (props) => {
  return (
    <Provider store={store}>
      <ProfileView />
    </Provider>
  );
};