import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EventInput, EventSchema } from "./event.types";
import { addEvent, getEvents, removeEventById } from "./event.api";
import { Event } from "./event.model";

const initialState: EventSchema = {
   data: [],
   isLoading: false,
   error: null,
};

export const createEventAsync = createAsyncThunk(
   "events/add",
   async (event: EventInput): Promise<Event> => {
      const id = await addEvent(event);

      return { id, ...event };
   },
);

export const fetchEventsAsync = createAsyncThunk(
   "events/fetch",
   async (): Promise<Event[]> => {
      return await getEvents();
   },
);

export const deleteEventAsync = createAsyncThunk<
   number,
   number,
   { rejectValue: string }
>("events/remove", async (id, { rejectWithValue }) => {
   try {
      await removeEventById(id);
      return id;
   } catch (error: unknown) {
      if (error instanceof Error) {
         return rejectWithValue(error.message);
      } else {
         return rejectWithValue("Ошибка сервера при удалении бригадира");
      }
   }
});

const eventSlice = createSlice({
   name: "events",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchEventsAsync.fulfilled, (state, action) => {
         state.data = action.payload;
      });
      builder.addCase(createEventAsync.fulfilled, (state, action) => {
         state.data.push(action.payload);
      });
      builder.addCase(deleteEventAsync.fulfilled, (state, action) => {
         state.data = state.data.filter((event) => event.id !== action.payload);
      });
   },
});

export default eventSlice.reducer;
