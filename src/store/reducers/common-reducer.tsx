import { createSlice } from '@reduxjs/toolkit'

type Props = {
  clientList: any[],
  departmentList: any[],
}
const initialState: Props = {
  clientList: [],
  departmentList: [],
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setClientList: (state, action) => {
      state.clientList = action.payload
    },
    setDepartmentList: (state, action) => {
      state.departmentList = action.payload
    },
    reset: (state, action) => {
      state = initialState
    },
  },
})
// Action creators are generated for each case reducer function
export const {
  setClientList,
  setDepartmentList,
  reset,
} = commonSlice.actions
export default commonSlice.reducer