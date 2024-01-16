import React from 'react';
import SingleProjectLeft from './SingleProjectLeft';
import SingleProjectRight from './SingleProjectRight';

const SingleProjectFull = ({ setMore, proj }) => {
  return (
    <div className="absolute left-0 top-0 w-full h-screen bg-black/70">
      <div className="flex h-[80vh] md:h-full justify-center items-center">
        <div className="flex items-start gap-2 h-[80vh] mt-14 md:mt-0 px-2 md:px-0">
          <div
            className="md:grid grid-cols-9 bg-[#1d1d1d] max-w-[800px] max-h-[85vh] px-5 rounded-xl"
            style={{ overflowY: 'scroll' }}
          >
            <SingleProjectLeft proj={proj} setMore={setMore} />
            <SingleProjectRight proj={proj} />
          </div>
          <div
            className="text-[0px] md:text-xl text-white py-0 px-0 md:py-2 md:px-4 bg-[#e55151] rounded-[50%] cursor-pointer"
            onClick={() => setMore(false)}
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectFull;
