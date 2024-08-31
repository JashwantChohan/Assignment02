import React from 'react'
import logo from './../assets/images/disney-logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus, } from 'react-icons/hi2';
// import {HiDotsVertical} from "react-icons/hi2";
import HeadderItem from './HeadderItem';

function Header() {
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINAL',
            icon: HiStar
        },

        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-6 items-center '>
                <img src={logo} alt="Disney Logo" className='w-[80px] md:w-[115px] object-cover' />
                {menu.map((item) => (
                    <HeadderItem key={item.name} name={item.name} icon={item.icon} />
                ))}
            </div>
            <img src=' public\user-avatar.png' alt="  " 
            className='w-[50px] rounded-full'/>
        </div>
    )
}

export default Header
