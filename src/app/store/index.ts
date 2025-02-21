import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "@/entities/event/slice";
import brigadierReducer from "@/entities/brigadier/brigadier.slice";

const store = configureStore({
   reducer: {
      events: eventReducer,
      brigadiers: brigadierReducer,
   },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
