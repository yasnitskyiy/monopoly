import * as Yup from "yup";

let initialState = {
    initialValues: {
        email: '',
        password: '',
        re_password: '',
        nickname: '',
    },
    validationSchema: Yup.object({
        email: Yup.string().required('Email address is required!'),
        password: Yup.string().required('Password is required!'),
        re_password: Yup.string().required('Repeat your password please!'),
        nickname: Yup.string().required('Nickname is required!'),
    }),
    // onSubmit: (values) => console.log('Form data', values)
}

const formikReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}

export default formikReducer