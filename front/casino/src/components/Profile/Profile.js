import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPic } from '../../redux/actionCreator'; 



export const Profile = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const picStore = useSelector(state => state.user.profile);
    const user = useSelector(state => state.user);
    return (
        <>
        <img alt='' src={picStore}></img>
            <div>Вы можете загрузить вашу фотографию тут</div>
            <input onChange={(e)=>setInput(e.target.value)} type='text'></input>
            <button onClick={()=>{dispatch(addPic(input))}}>Загрузить</button>
        </>
    )
}
