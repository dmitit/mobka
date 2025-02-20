import { createSlice } from "@reduxjs/toolkit";

interface EventState {
   list: Event[];
   loading: boolean;
}

const initialState: EventState = {
   list: [],
   loading: false,
};

const eventSlice = createSlice({
   name: "events",
   initialState,
   reducers: {},
});

export default eventSlice.reducer;
