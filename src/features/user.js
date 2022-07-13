import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase";

let initialStateValue = {
    uid: '',
    email: '',
    name: 'NEW USER',
    games: {
        total: 0,
        wins: 0,
    },
    achievements: [],
    friends: [],
    credits: 0
}

export const loginGetUserData = createAsyncThunk(
    'users/loginGetUserData',
    async (email) => {
        const usersCollectionRef = collection(db, 'users');
        const data = await getDocs(usersCollectionRef);
        return {
            email: email,
            data: data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        };
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        clearUserData: (state) => {
            state.value = initialStateValue;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginGetUserData.fulfilled,  (state, action) => {
            state.value = action.payload.data.filter(user => user.email === action.payload.email)[0];
        });
    }
});

export const { clearUserData } = userSlice.actions;
export default userSlice.reducer;