import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BrigadierSchema } from "./brigadier.types";
import {
   addBrigadier,
   getBrigadiers,
   removeBrigadierById,
} from "./brigadier.api";

const initialState: BrigadierSchema = {
   data: [],
   isLoading: false,
   error: null,
};

export const createBrigadierAsync = createAsyncThunk(
   "brigadiers/add",
   async (fullname: string) => {
      const id = await addBrigadier(fullname);

      return { id, fullname };
   },
);

export const fetchBrigadiersAsync = createAsyncThunk(
   "brigadiers/fetch",
   async () => {
      return await getBrigadiers();
   },
);

export const deleteBrigadierAsync = createAsyncThunk(
   "brigadiers/remove",
   async (id: number) => {
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
