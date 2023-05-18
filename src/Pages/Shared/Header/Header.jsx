import React from 'react';

const Header = ({title}) => {
    return (
        <div className="bg-black text-white h-[30vh] flex flex-col items-center justify-center mb-12">
        <h1 className="text-6xl font-extrabold">{title}<span className="text-[#FFBB00] font-extrabold">.</span></h1>
      </div>
    );
};

export default Header;