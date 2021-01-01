import { createSlice } from "@reduxjs/toolkit";

export const StudentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (item) => item.id !== action.payload
      );
    },
    editStudent: (state, action) => {
      state.students = state.students.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
  },
});
export const { addStudent, editStudent, deleteStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
