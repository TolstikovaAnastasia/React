import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from "./store/index.js";
import { PROFILE_ACTIVE } from "./store/profile/actions.js";

export const ProfileView = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => {
    return state.content;
  });

  return(
    <div>
      <input type="checkbox" value={content} onChange={() => {
        dispatch({
          type: PROFILE_ACTIVE
        })
      }}></input>
    </div>
  );
};

export const ReduxProfile = (props) => {
  return (
    <Provider store={store}>
      <ProfileView />
    </Provider>
  );
};