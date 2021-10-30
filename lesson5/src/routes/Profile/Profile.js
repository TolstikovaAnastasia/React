import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PROFILE_CONTENT } from '../../redux/store/profile/actionTypes.js';

export const Profile = (props) => {
  const dispatch = useDispatch();
  const content = useSelector((state) => {
    return state.content;
  });
  return (
    <div>
      <input type="checkbox" value={content} onChange={() => {
        dispatch({
          type: PROFILE_CONTENT
        })
      }} />
    </div>
  )
};