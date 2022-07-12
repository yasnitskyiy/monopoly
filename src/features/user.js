import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase";

// const initialStateValue = {
//     // uid: '',
//     // email: '',
//     // name: '',
//     // games: {
//     //     total: 0,
//     //     wins: 0,
//     // },
//     // achievements: [],
//     // friends: [],
//     // credits: 0
// }

export const userSlice = createSlice({
    name: 'user',
    initialState: {email: ''},
    reducers: {
        loginGetUserData : async (state, action) => {
            try{
                const usersCollectionRef = collection(db, 'users');
                const data = await getDocs(usersCollectionRef);
                const arr = data.docs.map( async (doc) => await doc.data().email)
                //const arr = data.map
                // data.forEach(doc => {
                //     arr.push(doc.data().email);
                // })
                // console.log(arr[0]);
                state.email = arr[0];
            }catch (e){
                console.log(e);
            }
        }
    }
});

export const {loginGetUserData} = userSlice.actions;
export default userSlice.reducer;