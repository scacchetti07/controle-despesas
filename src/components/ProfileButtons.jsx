import React from "react";

function ProfileButtons({ path = "#", children }) {
  return (
    <a
      href={path}
      className="flex gap-3 text-[22px] w-3xs items-center text-white hover:bg-amber-700 w-autoxs p-2 rounded-md hover:shadow shadow-white/30 transition-colors duration-300 cursor-pointer"
    >
      {children}
    </a>
  );
}

export default ProfileButtons;
