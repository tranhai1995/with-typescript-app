import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {homeSelector} from '@containers/home/selector';
import * as action from './actions';

const HomeApp = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(homeSelector);

  useEffect(() => {
    dispatch(action.HomeAction());
  }, [dispatch]);

  console.log('data', data);
  return (
    <div>
      <p>aaa</p>
    </div>
  );
};

export default HomeApp;
