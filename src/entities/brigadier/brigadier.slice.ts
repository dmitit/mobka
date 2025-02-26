import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BrigadierInput, BrigadierSchema } from "./brigadier.types";
import {
   addBrigadier,
   getBrigadiers,
   removeBrigadierById,
} from "./brigadier.api";
import { Brigadier } from "./brigadier.model";
import { RootState } from "@/app/store";
import { selectSalariesByBrigadierId } from "../salary/salary.selectors";

const initialState: BrigadierSchema = {
   data: [],
   isLoading: false,
};

export const createBrigadierAsync = createAsyncThunk(
   "brigadiers/add",
   async (brigadier: BrigadierInput): Promise<Brigadier> => {
      const id = await addBrigadier(brigadier);

      return { id, ...brigadier };
   },
);

export const fetchBrigadiersAsync = createAsyncThunk(
   "brigadiers/fetch",
   async (): Promise<Brigadier[]> => {
      return await getBrigadiers();
   },
);

export const deleteBrigadierAsync = createAsyncThunk<
   number,
   number,
   { state: RootState; rejectValue: string }
>("brigadiers/remove", async (id, { getState, rejectWithValue }) => {
   const state = getState();
   const salaries = selectSalariesByBrigadierId(state, id);

   if (salaries.length > 0) {
      return rejectWithValue(
         "Нельзя удалить бригадира с другими связанными значениями. Сначала удалите их.",
      );
   }

   try {
      await removeBrigadierById(id);
      return id;
   } catch (error: unknown) {
      if (error instanceof Error) {
         return rejectWithValue(error.message);
      } else {
         return rejectWithValue("Ошибка сервера при удалении бригадира");
      }
   }
});

const brigadierSlice = createSlice({
   name: "brigadiers",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(createBrigadierAsync.fulfilled, (state, action) => {
         state.data.push(action.payload);
      });
      builder.addCase(fetchBrigadiersAsync.fulfilled, (state, action) => {
         state.data = action.payload;
      });
      builder.addCase(deleteBrigadierAsync.fulfilled, (state, action) => {
         state.data = state.data.filter(
            (brigadier) => brigadier.id !== action.payload,
         );
      });
   },
});

export default brigadierSlice.reducer;
