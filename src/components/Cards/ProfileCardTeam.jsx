import React from "react";
import linkedinIcon from '../../assets/team/linkedinIcon.svg'
const ProfileCardTeam = ({ teams }) => {

    console.log("campaign Teams:: ", teams)
    return (
        <div>
            <div className="">

                <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-5  justify-center w-full rounded-md ">
                    {
                        teams?.length && teams.map((item) => {
                            return (
                                <div className="relative">
                                    <img
                                        className="w-full h-full object-cover  rounded-md  z-0"
                                        src={item?.profilePic}
                                        alt="founder_profile"
                                    />
                                    {
                                        item?.linkdinUrl ?
                                            <div className="absolute top-4 right-4">
                                                <img src={linkedinIcon} />
                                            </div> : ""
                                    }
                                    <div className=" absolute  text-[#091E42]   ml-2 my-1 mx-2 px-5 py-2  h-[25%] top-[72%]  rounded-md bg-[#E9E9FE] inset-0 ">
                                        <div className="text-left font-bold">
                                            {item?.name}
                                        </div>
                                        <div className="text-left">
                                            {item?.designation}
                                        </div>
                                        {
                                            item?.linkdinUrl ?
                                                <div className="text-left text-[#2626EA]">
                                                    {item?.email}
                                                </div> : ""
                                        }
                                    </div>
                                </div>
                            )
                        })}
                </div>




            </div>
        </div>
    )
}
export default ProfileCardTeam