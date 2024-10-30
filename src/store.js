
import { configureStore } from '@reduxjs/toolkit'
import askReducer from "./features/Asks"
const store = configureStore({
  reducer: {
   ask:askReducer,
  },
})

export default store
