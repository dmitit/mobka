import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BrigadierInput, BrigadierSchema } from "./brigadier.types";
import {
   addBrigadier,
   getBrigadiers,
   removeBrigadierById,
} from "./brigadier.api";
import { Brigadier } from "./brigadier.model";

const initialState: BrigadierSchema = {
   data: [],
   isLoading: false,
   error: null,
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

export const deleteBrigadierAsync = createAsyncThunk(
   "brigadiers/remove",
   async (id: number): Promise<number> => {
      await removeBrigadierById(id);
      return id;
   },
);

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
