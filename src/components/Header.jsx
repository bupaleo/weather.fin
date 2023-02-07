import React from 'react';
import module from './Header.module.scss'
import Clock from './Clock.jsx'

function Header(props) {
    return (<div>
        <div className={module.weather}>
            W   ۰   E   ۰   A   ۰   T   ۰   H   ۰   E   ۰   R

        </div>
        <div className={module.clock}><Clock/></div>
        </div>
    );
}

export default Header;