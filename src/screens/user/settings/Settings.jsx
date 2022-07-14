import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { uploadProfileImage } from '../../../features/user';
import { useDispatch } from "react-redux";

const Settings = () => {

    const dispatch = useDispatch();
    const [imageUpload, setImageUpload] = useState(null);

    return (
        <Container className='flex-grow-1'>
            <label className="form-label" htmlFor="customFile">Default file input example</label>
            <input type="file" className="form-control" id="customFile"
                   onChange={
                       (event) => {
                           setImageUpload((event.target.files[0]));
                       }
                   }
            />
            <button className='form-button'
                    onClick={() => {
                        dispatch(uploadProfileImage(imageUpload));
                    }
                    }>
                UPLOAD
            </button>
        </Container>
    );
};

export default Settings;