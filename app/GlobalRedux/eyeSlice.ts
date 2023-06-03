import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EyeState {
  position: { x: number; y: number };
}

const initialState: EyeState = {
  position: { x: 0, y: 0 },
};

const eyeSlice = createSlice({
  name: 'eye',
  initialState,
  reducers: {
    setEyePosition(state, action: PayloadAction<{ x: number; y: number }>) {
      state.position = action.payload;
    },
  },
});

export const { setEyePosition } = eyeSlice.actions;

export default eyeSlice.reducer;
