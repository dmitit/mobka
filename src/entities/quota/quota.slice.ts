import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActivistInput, ActivistSchema } from "./quota.types";
import { addActivist, getActivists } from "./quota.api";
import { RootState } from "@/app/store";
import { selectBrigadierById } from "../brigadier/brigadier.selectors";
import { selectEventById } from "../event/event.selectors";
import { Activist } from "./quota.model";

const initialState: ActivistSchema = {
   data: [],
   isLoading: false,
};

export const fetchActivistsAsync = createAsyncThunk(
   "activists/fetch",
   async (): Promise<Activist[]> => {
      return await getActivists();
   },
);

export const createActivistAsync = createAsyncThunk(
   "activists/add",
   async (activist: ActivistInput, { getState }): Promise<Activist> => {
      const id = await addActivist(activist);

      const state = getState() as RootState;
      const brigadier = selectBrigadierById(state, activist.id_brigadier);
      const event = selectEventById(state, activist.id_event);

      return {
         id,
         fullname: activist.fullname,
         description: activist.description,
         payment: activist.payment,
         brigadier: brigadier || null,
         event: event || null,
      };
   },
);

const activistSlice = createSlice({
   name: "activists",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(createActivistAsync.fulfilled, (state, action) => {
         state.data.push(action.payload);
      });
      builder.addCase(fetchActivistsAsync.fulfilled, (state, action) => {
         state.data = action.payload;
      });
   },
});

export default activistSlice.reducer;
