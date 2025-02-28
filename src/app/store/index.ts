import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "@/entities/event/event.slice";
import brigadierReducer from "@/entities/brigadier/brigadier.slice";
import salaryReducer from "@/entities/salary/salary.slice";
import personReducer from "@/entities/person/person.slice";
// import activistReducer from "@/entities/activist/activist.slice";

const store = configureStore({
   reducer: {
      events: eventReducer,
      salaries: salaryReducer,
      brigadiers: brigadierReducer,
      persons: personReducer,
      // activists: activistReducer,
   },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
