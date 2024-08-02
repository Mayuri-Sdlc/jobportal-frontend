import React from "react";
import linkedinIcon from '../../assets/team/linkedinIcon.svg'
const ProfileCard = ({ teams }) => {

    return (
        <div>
            <div className="">

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-5  justify-center w-full rounded-md ">
                    {
                        teams?.length && teams.map((item) => {
                            return (
                                <div className="relative h-[310px]">
                                    <img
                                        className="w-full h-full object-cover  rounded-md  z-0"
                                        src={item?.profilePic}
                                        alt="founder_profile"
                                    />
                                    <div className=" absolute  text-[#091E42]   ml-2 my-1 mx-2 px-5 py-2  h-[30%] sm:h-[20%] top-[74%]  rounded-md bg-[#E9E9FE] inset-0 ">
                                        <div className="text-left font-bold">
                                            {item?.name}
                                        </div>
                                        <div className="text-left">
                                            {item?.designation}
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })}
                </div>




            </div>
        </div>
    )
}
export default ProfileCard