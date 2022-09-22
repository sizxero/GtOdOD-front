import { Logout } from "@mui/icons-material";

import { useState, useEffect } from "react";
import { getCookie, removeCookie } from "../../client/Cookie";
import UserAPI from '../../client/api/UserAPI';

const Logo = () => {
    const [nick, setNick] = useState('');

    const logout = () => {
        removeCookie('user');
        removeCookie('token');
        window.location.href = '/';
    }

    const findNick = async() => {
        setNick(await UserAPI.findNick(getCookie("user")));
    }

    useEffect(() => {
        findNick();
    });

    return (
        <div className="Logo">
            <div className="MainLogo">
            <span className="Good">G</span>
            <span className="ToDo">t</span>
            <span className="Good ToDo">O</span>
            <span className="ToDo">d</span>
            <span className="Good ToDo">O</span>
            <span className="Good">D</span>
            </div>
            {nick !== null || nick !== undefined || nick !== ''
            ?getCookie("user") === null || getCookie("user") === undefined || getCookie("user") === ''
            ? <p>👍 GOOD to do list 👍</p>
            : <>
            { nick !== null || nick !== undefined || nick !== ''
            ? <p>👍 { nick }의 to do list 👍</p>
            : <p>👍 의 to do list 👍</p>}
            <p id="logout" onClick={() => logout()}>로그아웃</p>
            </>
            : <></>}
            
        </div>
    );
}

export default Logo;