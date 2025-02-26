import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SalaryInput, SalarySchema } from "./salary.types";
import { Salary } from "./salary.model";
import { addSalary, getSalaries, removeSalaryById } from "./salary.api";
import { selectBrigadierById } from "../brigadier/brigadier.selectors";
import { RootState } from "@/app/store";

const initialState: SalarySchema = {
   data: [],
   isLoading: false,
   error: null,
};

export const createSalaryAsync = createAsyncThunk(
   "salaries/add",
   async (salary: SalaryInput, { getState }): Promise<Salary> => {
      const id = await addSalary(salary);

      const state = getState() as RootState;
      const brigadier = selectBrigadierById(state, salary.id_brigadier);

      return {
         id,
         date: salary.date,
         amount: salary.amount,
         brigadier: brigadier || null,
      };
   },
);

export const fetchSalariesAsync = createAsyncThunk(
   "salaries/fetch",
   async (): Promise<Salary[]> => {
      return await getSalaries();
   },
);

export const deleteSalaryAsync = createAsyncThunk<
   number,
   number,
   { rejectValue: string }
>("salaries/remove", async (id, { rejectWithValue }) => {
   try {
      await removeSalaryById(id);
      return id;
   } catch (error: unknown) {
      if (error instanceof Error) {
         return rejectWithValue(error.message);
      } else {
         return rejectWithValue("Ошибка сервера при удалении бригадира");
      }
   }
});

const salarySlice = createSlice({
   name: "salaries",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(createSalaryAsync.fulfilled, (state, action) => {
         state.data.push(action.payload);
      });
      builder.addCase(fetchSalariesAsync.fulfilled, (state, action) => {
         state.data = action.payload;
      });
      builder.addCase(deleteSalaryAsync.fulfilled, (state, action) => {
         state.data = state.data.filter(
            (salary) => salary.id !== action.payload,
         );
      });
   },
});

export default salarySlice.reducer;
