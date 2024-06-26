import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    displayName: '',
    socialEmail: '',
    profileImage: '',
  },
  reducers: {
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setSocialEmail: (state, action) => {
      state.socialEmail = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const { setDisplayName, setSocialEmail, setProfileImage } = authSlice.actions;

// const store = configureStore({
//   reducer:
// });

export default authSlice.reducer;
