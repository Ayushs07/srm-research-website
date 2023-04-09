import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './contact.css';

function Contacts() {
  return (
    <>
      <Header />
      <div className="bg-[#9FEAF5]">
        <p className="mt-8  text-center text-4xl font-bold">Contact us</p>
        <p className="pb-2 text-3xl mt-8 text-center font-bold">
          <a href="mailto:iciot.2023@srmist.edu.in">
            Email: iciot.2023@srmist.edu.in
          </a>
        </p>
        <div className="flex text-center justify-center ">
          <div className="bg-[#fff] rounded-md p-5 justify-center contact-container text-center">
            <p className="pb-2 text-3xl font-semibold">FOR ENQUIRY:-</p>
            <div className=" divide-y">
              <p className="pb-2 text-2xl font-bold">Dr. D. Malathi</p>
              <p className="pb-2 text-2xl ">Professor</p>
              <p className="pb-2 text-2xl ">
                Department of Computing technologies
              </p>
              <p className="pb-2 text-2xl">School of Computing</p>
              <p className="pb-2 text-2xl ">
                SRM Institute of Science and Technology
              </p>
              <p className="pb-2 text-2xl ">Kattankulathur</p>
              <p className="pb-2 text-2xl ">Chennai-603203</p>
              <p className="pb-2 text-2xl ">
                <a href="mailto:malathid@srmist.edu.in">
                  Email: malathid@srmist.edu.in
                </a>
              </p>
              <p className="pb-2 text-2xl ">Whatsapp No: +91 94425 54055</p>
            </div>
            <div className="mt-8 divide-y">
              <p className="pb-2 text-2xl font-bold">Dr. K. Alice</p>
              <p className="pb-2 text-2xl ">Assistant Professor</p>
              <p className="pb-2 text-2xl ">
                Department of Computing technologies
              </p>
              <p className="pb-2 text-2xl">School of Computing</p>
              <p className="pb-2 text-2xl ">
                SRM Institute of Science and Technology
              </p>
              <p className="pb-2 text-2xl ">Kattankulathur</p>
              <p className="pb-2 text-2xl ">Chennai-603203</p>
              <p className="pb-2 text-2xl ">
                <a href="mailto:alicek@srmist.edu.in">
                  Email: alicek@srmist.edu.in
                </a>
              </p>
              <p className="pb-2 text-2xl ">Whatsapp No: +91 : 98408 51919</p>
            </div>
            <div className="mt-8 divide-y ">
              {' '}
              <p className="pb-2 text-2xl font-bold">Dr. D. Vinod</p>
              <p className="pb-2 text-2xl">Assistant Professor</p>
              <p className="pb-2 text-2xl">
                Department of Computing technologies
              </p>
              <p className="pb-2 text-2xl">School of Computing</p>
              <p className="pb-2 text-2xl">
                SRM Institute of Science and Technology
              </p>
              <p className="pb-2 text-2xl">Kattankulathur</p>
              <p className="pb-2 text-2xl">Chennai-603203</p>
              <p className="pb-2 text-2xl">
                <a href="mailto:minur@srmist.edu.in">
                  Email: vinodd@srmist.edu.in
                </a>
              </p>
              <p className="pb-2 text-2xl">Whatsapp No: +91 9962046411</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
