import templateFeatures from '../images/template.png';

let initialState = {
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
    ]
}

const homeReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}

export default homeReducer