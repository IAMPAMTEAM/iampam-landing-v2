import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    companyNumber: '',
    companyName: '',
    contactPerson: '',
    contactPhone: '',
    contactEmail: '',
    awsAccount: '',
    awsAccountName: '',
    awsAccoutType: '',
    awsRegions: [''],
  },
  reducers: {
    setCompanyNumber: (state, action) => {
      state.companyNumber = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setContactPerson: (state, action) => {
      state.contactPerson = action.payload;
    },
    setContactPhone: (state, action) => {
      state.contactPhone = action.payload;
    },
    setContactEmail: (state, action) => {
      state.contactEmail = action.payload;
    },
    setAwsAccount: (state, action) => {
      state.awsAccount = action.payload;
    },
    setAwsAccountName: (state, action) => {
      state.awsAccountName = action.payload;
    },
    setAwsAccountType: (state, action) => {
      state.awsAccoutType = action.payload;
    },
    setAwsRegions: (state, action) => {
      state.awsRegions = action.payload;
    },
  },
});

export const {
  setCompanyNumber,
  setCompanyName,
  setContactPerson,
  setContactPhone,
  setContactEmail,
  setAwsAccount,
  setAwsAccountName,
  setAwsAccountType,
  setAwsRegions,
} = registerSlice.actions;

export default registerSlice.reducer;
