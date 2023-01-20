import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchTasks.pending](state, action) {},
    [fetchTasks.fulfilled](state, action) {},
    [fetchTasks.rejected](state, action) {},
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
