import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import blockchainReducer from '../features/blockchainSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    blockchain: blockchainReducer,
  },
})
