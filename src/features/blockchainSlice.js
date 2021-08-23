import { createSlice } from '@reduxjs/toolkit'

export const blockchainSlice = createSlice({
  name: 'blockchain',
  initialState: {
    blockchain: null,
  },
  reducers: {
    create: (state, action) => {
      state.blockchain = action.payload
    },
  },
})

export const { create } = blockchainSlice.actions

export const selectBlockchain = (state) => state.user.user

export default blockchainSlice.reducer
