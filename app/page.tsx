import Image from 'next/image';
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs';
import { BiHash, BiHomeCircle, BiMoney, BiUser } from 'react-icons/bi';
import { Inter } from 'next/font/google';
import React from 'react';
import FeedCard from '@/components/FeedCard';
import { SlOptions } from 'react-icons/sl';

const inter = Inter({ subsets: ['latin'] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { title: 'Home', icon: <BiHomeCircle /> },
  { title: 'Explore', icon: <BiHash /> },
  { title: 'Notifications', icon: <BsBell /> },
  { title: 'Messages', icon: <BsEnvelope /> },
  { title: 'Bookmarks', icon: <BsBookmark /> },
  { title: 'Twitter Blue', icon: <BiMoney /> },
  { title: 'Profile', icon: <BiUser /> },
  { title: 'More', icon: <SlOptions /> },
];

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-48'>
        <div className='col-span-3 px-4 pt-2 '>
          <div className='text-3xl h-fit w-fit hover:bg-slate-400 rounded-full p-4 cursor-pointer transition-all'>
            <BsTwitter />
          </div>
          <div className='mt-4 text-lg pr-4'>
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className='flex justify-start items-center gap-2 hover:bg-gray-600 rounded-full px-4 py-2 w-fit cursor-pointer mt-2'
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span className='text-lg'>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className='pr-10 mt-4'>
              <button className='bg-[#1d9bf0] text-lg  rounded-full w-full mx-4 p-4'>
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className='col-span-6 border-r-2 border-l-2 h-screen overflow-scroll border-slate-800'>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className='col-span-3'></div>
      </div>
    </div>
  );
}
