import { createSlice } from "@reduxjs/toolkit";
import templateFeatures from "../images/template.png";

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        features: [
            {
                id: 0,
                imageSrc: templateFeatures,
                title: 'FREE TO PLAY',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum' +
                    'officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit' +
                    'tempore unde.'
            },
            {
                id: 1,
                imageSrc: templateFeatures,
                title: 'NEW COMMUNICATIONS',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum' +
                    'officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit' +
                    'tempore unde.'
            },
            {
                id: 2,
                imageSrc: templateFeatures,
                title: 'COMPETITION WITH OTHERS',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum' +
                    'officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit' +
                    'tempore unde.'
            },
            {
                id: 3,
                imageSrc: templateFeatures,
                title: 'ACHIEVEMENTS',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum' +
                    'officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit' +
                    'tempore unde.'
            },
        ]
    },
    reducers: {}
});

export default homeSlice.reducer;