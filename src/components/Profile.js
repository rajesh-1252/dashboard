import React from "react";
import profile from "../assets/images/profile-pic-01.jpg";
import user1 from "../assets/images/profile-pic-03.jpg";
import { CiTwitter } from "react-icons/ci";
import {
  BsFacebook,
  BsLinkedin,
  BsWhatsapp,
  BsThreeDotsVertical,
} from "react-icons/bs";

const socialIcons = [
  { icon: <CiTwitter />, path: "/" },
  { icon: <BsFacebook />, path: "/" },
  { icon: <BsLinkedin />, path: "/" },
  { icon: <BsWhatsapp />, path: "/" },
];
const userList = [
  {
    id: 1,
    image: user1,
    name: "Drew James",
    country: "United States",
    mobileNumber: 871567890,
  },
  {
    id: 2,
    image: user1,
    name: "Drew James",
    country: "United States",
    mobileNumber: 871567890,
  },
  {
    id: 3,
    image: user1,
    name: "Drew James",
    country: "United States",
    mobileNumber: 871567890,
  },
];
const Profile = () => {
  return (
    <>
      <div className="bg-white shadow-2xl rounded-xl top flex flex-col items-stretch items-center gap-2 py-12">
        <img src={profile} alt="" className="mx-auto rounded-full w-32 h-32" />
        <h2 className="mx-auto name">Nick Herasimenka</h2>
        <p className="mx-auto country">United States</p>
        <div className="social-links flex justify-between w-1/4 mx-auto md:w-1/2 ">
          {socialIcons.map((item) => {
            return <a href={item.path}>{item.icon}</a>;
          })}
        </div>
        <div className="users my-4 flex items-center justify-between mx-4">
          <p>Our Users</p>
          <BsThreeDotsVertical />
        </div>
        <div className="user-list">
          {userList.map((item) => {
            const { image, country, mobileNumber, name, id } = item;
            return (
              <div key={id} className="flex justify-between mb-4 mx-4">
                <div className="flex">
                  <img
                    src={image}
                    alt="img"
                    className="rounded-full w-12 h-12"
                  />
                  <div className="mx-8 mt-2">
                    <h3>{name}</h3>
                    <p>{country}</p>
                  </div>
                </div>
                <p className="mt-4">Mobile: {mobileNumber}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
