import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    displayName: '',
    socialEmail: '',
    profileImage: '',
    id: '',
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
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setDisplayName, setSocialEmail, setProfileImage, setId } = authSlice.actions;

// const store = configureStore({
//   reducer:
// });

export default authSlice.reducer;
