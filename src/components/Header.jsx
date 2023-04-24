/* eslint-disable prettier/prettier */
import React from 'react';
import Navbar from '../components/Nav';
import srmlogo from '../images/srmlogo.png';
import ctech from '../images/CtechLogo.png';
import soc from '../images/soc-logo.png';
import iciot from '../images/iciot-logo.jpeg';
import springer from '../images/springer.jpeg';
import aip from '../images/AIP.jpeg';
import ranking from '../images/ranking.png';

const Header = () => {
  return (
    <div>
      <div className="grid grid-cols-4 justify-items-center">
        <img src={srmlogo} className="w-[40%]"></img>
        <img src={ctech} className="w-[50%]"></img>
        <img src={soc} className="w-[35%] pt-4"></img>
        <img src={iciot} className="w-[15%] pt-2"></img>
      </div>
      <br />
      <div className="flex flex-row justify-between">
        <div className="flex justify-center translate-y-20">
          <img src={springer} className="w-[40%] h-[30%]"></img>
        </div>

        <div className="container-fluid text-center">
          <div className="w-17/20 mx-auto font-bold">
            <p className="text-3xl text-red-900" style={{ lineHeight: '' }}>
              4th International Conference on Internet of Things
            </p>
            <h1 className="pt-5 pb-5 text-5xl text-red-900">ICIoT 2023</h1>
            <div className="font-serif text-2xl text-black">
              26 - 28 April 2023
            </div>
            <h5 className="text-center text-red-900 text-xl font-medium">
              SRM Institute of Science and Technology, Kattankalathur, Chennai,
              India
            </h5>
            {/* <h4 className="text-center title text-blue-500 text-xl">
              <p>
                <a href="/">
                  All accepted papers will be published in Procedia Computer
                  Science Journal, Elsevier
                </a>
              </p>
            </h4> */}
          </div>
        </div>

        <div className="flex justify-center translate-y-20">
          <img src={aip} className="w-[40%] h-[30%]"></img>{' '}
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <img src={ranking} className="w-[40%] h-[30%]"></img>{' '}
      </div>

      <br />
      <div className="bg-[#122a58]">
        <marquee className="text-white bg-[#122a58]">
          <a href="/">
            {' '}
            Internal registrations(SRMIST) has been closed.
          </a>
          {/* <span className="ml-20">
            Last Date for Paper Submission: 28th February 2023
          </span> */}
        </marquee>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
