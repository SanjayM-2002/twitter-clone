import Image from 'next/image';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';

const FeedCard: React.FC = () => {
  return (
    <div className='border border-gray-400 p-5 hover:bg-slate-500 transition-all cursor-pointer'>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-1'>
          <Image
            src='https://avatars.githubusercontent.com/u/44976328?v=4'
            alt='user-image'
            height={50}
            width={50}
          />
        </div>
        <div className='col-span-11'>
          <h5>Piyush Garg</h5>
          <p>
            This is just some random content to be used as text in the tweet
            card
          </p>
          <div className='flex justify-between mt-5 text-xl items-center w-[90%]'>
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
