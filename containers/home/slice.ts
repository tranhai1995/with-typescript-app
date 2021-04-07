import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MastersResponse, MastersRequest} from '@types';

export interface InitialState {
  data: MastersRequest[];
}

const initialState: InitialState = {
  data: [],
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getHomeActionSucceed: (state, action: PayloadAction<MastersResponse[]>) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const {getHomeActionSucceed} = slice.actions;
export default slice.reducer;
