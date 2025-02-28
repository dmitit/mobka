import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PersonInput, PersonSchema } from "./person.types";
import { addPerson, getPersons, removePersonById } from "./person.api";
import { Person } from "./person.model";

const initialState: PersonSchema = {
   data: [],
   isLoading: false,
};

export const createPersonAsync = createAsyncThunk(
   "persons/add",
   async (person: PersonInput): Promise<Person> => {
      const id = await addPerson(person);

      return { id, ...person };
   },
);

export const fetchPersonsAsync = createAsyncThunk(
   "persons/fetch",
   async (): Promise<Person[]> => {
      return await getPersons();
   },
);

export const deletePersonAsync = createAsyncThunk<
   number,
   number,
   { rejectValue: string }
>("persons/remove", async (id, { rejectWithValue }) => {
   try {
      await removePersonById(id);
      return id;
   } catch (error: unknown) {
      if (error instanceof Error) {
         return rejectWithValue(error.message);
      } else {
         return rejectWithValue("Ошибка сервера при удалении человека");
      }
   }
});

const personSlice = createSlice({
   name: "persons",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchPersonsAsync.fulfilled, (state, action) => {
         state.data = action.payload;
      });
      builder.addCase(createPersonAsync.fulfilled, (state, action) => {
         state.data.push(action.payload);
      });
      builder.addCase(deletePersonAsync.fulfilled, (state, action) => {
         state.data = state.data.filter((event) => event.id !== action.payload);
      });
   },
});

export default personSlice.reducer;
