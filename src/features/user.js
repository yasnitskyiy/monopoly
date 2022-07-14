import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, updateDoc , doc  } from "@firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { v4 } from 'uuid';

let initialStateValue = {
    uid: '',
    email: '',
    profileImage: {
        location: 'usersImages/Person.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/monopoly-auth.appspot.com/o/usersImages%2FPerson.jpg?alt=media&token=29357543-14db-4872-9140-9746fa678983',
    },
    name: 'NEW USER',
    games: {
        total: 2,
        wins: 1,
    },
    achievements: [],
    friends: [],
    credits: 0
};

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

export const uploadProfileImage = createAsyncThunk(
    'users/uploadImage',
    async (file) => {
        let image = {
            location: '',
            url: ''
        };
        if (file != null) {
            image.location = `usersImages/${file.name + v4()}`;

            await uploadBytes(ref(storage, image.location), file).then(() => {
                console.log('IMAGE LOAD SUCCESSFUL');
            });

            await getDownloadURL(ref(storage, image.location)).then(item => image.url = item);

            const cityRef = db.collection('users').doc(initialStateValue.uid);
            await cityRef.update({capital: true});

            // await deleteObject(ref(storage, previousImage)).then(() => {
            //     console.log("Picture is deleted successfully!");
            // });
        }

        return {
            image: image
        };
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialStateValue
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginGetUserData.fulfilled, (state, action) => {
            state.value = action.payload.data.filter(user => user.email === action.payload.email)[0];
            initialStateValue = state.value;
        });

        builder.addCase(uploadProfileImage.fulfilled, (state, action) => {
            state.value.profileImage.url = action.payload.image.url;
            state.value.profileImage.location = action.payload.image.location;
            initialStateValue = state.value;
        });
    }
});

//export const {clearUserData} = userSlice.actions;
export default userSlice.reducer;