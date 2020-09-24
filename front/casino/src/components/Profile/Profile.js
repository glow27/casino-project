import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPic, plusPoints } from '../../redux/actionCreator';



export const Profile = () => {
    const url = 'https://money.yandex.ru/transfer/a2w';
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const picStore = useSelector(state => state.user.pic);
    const points = useSelector(state => state.user.points)
    const name = useSelector(state => state.user.name)
    return (
        <div style={{ display: "flex", flexDirection: 'column', marginRight: '700px', marginTop: '50px' }}>
            <div style={{ color: 'white', fontFamily: 'Play', fontSize: '20px' }}>{name}</div>
            <img style={{ width: '400px', height: 'auto', border: 'solid black 5px' }} alt='' src={picStore}></img>
            <div style={{ color: 'white', fontFamily: 'Play', fontSize: '20px' }}>Fill in URL to add your profile picture.</div>
            <input onChange={(e) => setInput(e.target.value)} type='text'></input>
            <button class='btn btn-secondary btn-lg btn-success' onClick={() => { dispatch(addPic(input)) }}>Load picture</button>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', marginTop: '150px' }}>
                <div style={{ color: 'white', fontFamily: 'Play', fontSize: '20px'}}>Your chips:</div>
                <div style={{ color: 'white', fontFamily: 'Play', fontSize: '20px' }}>{points}</div>
            </div>
            <a style={{ fontFamily: 'Play', marginTop: '30px' }} href={url} target="_blank" class='btn btn-secondary btn-warning' onClick={() => { dispatch(plusPoints(100)) }}>Get chips!</a>
        </div>
    )
}
