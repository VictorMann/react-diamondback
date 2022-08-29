import { createSlice } from "@reduxjs/toolkit";
import { dataType } from '../../Helpers';

const slice = createSlice({
  name: 'carr',
  initialState: [],
  reducers: {
    setCarr(state, action) {
      let data = action.payload;
      if (dataType(data) !== 'Array') data = [];
      return data;
    }
  }
});

export const { setCarr } = slice.actions;
export default slice.reducer;