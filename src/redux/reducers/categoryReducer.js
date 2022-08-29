import { createSlice } from '@reduxjs/toolkit';
import { dataType } from '../../Helpers';

const slice = createSlice({
  name: 'cat',
  initialState: {
    list: []
  },
  reducers: {
    setListCategories(state, action) {
      let data = action.payload;
      if (dataType(data) !== 'Array') data = [];
      return {...state, list: data};
    }
  }
});

export const { setListCategories } = slice.actions;
export default slice.reducer;