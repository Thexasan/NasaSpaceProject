import { configureStore } from '@reduxjs/toolkit'
import states  from '../reducers/states'

export const store = configureStore({
  reducer: {
    states:states
  },
})