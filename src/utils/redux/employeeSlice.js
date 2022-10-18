import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        firstName: "Hannah",
        lastName: "Ganne",
        dateOfBirth: "06/05/1989",
        startDate: "18/10/2022",
        department: "Engineering",
        address: {
            street: "29 Avenue Clement Ader",
            city: "Trappes",
            state: "Minnesota",
            zipCode: "78190"
        }
    },

]

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addEmployee } = employeeSlice.actions

export default employeeSlice.reducer