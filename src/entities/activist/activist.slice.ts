import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActivistInput, ActivistSchema } from "./activist.types";
import { addActivist } from "./activist.api";
import { RootState } from "@/app/store";
import { selectBrigadierById } from "../brigadier/brigadier.selectors";
import { selectEventById } from "../event/event.selectors";
import { Activist } from "./activist.model";

const initialState: ActivistSchema = {
   data: [],
   isLoading: false,
};

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
   },
});

export default activistSlice.reducer;
