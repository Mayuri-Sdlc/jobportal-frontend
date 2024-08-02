import React from 'react'
import ProfileCard from '../../../components/Cards/ProfileCard'
import member1 from '../../../assets/team/member1.svg'
const TeamMembers = ({campaign}) => {
    const teams = campaign?.company?.teams;
const cardDetail = {
      profilePic:member1,
      name:" Matthew Bauch",
      designation:"Legal Advisor"
}

    return (
        <>
            <div className=' w-full'>
                <div>
                    <div className='font-bold text-xl'>Team Members</div>
                    <div className='bg-[#F5F6F7] py-5 px-7 rounded-lg mt-4'>
                    <div className='flex gap-5'>
                        <ProfileCard teams={teams} />
                    </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='font-bold text-xl'>Advisory Members</div>
                    <div className='bg-[#F5F6F7] py-5 px-7 rounded-lg mt-4'>
                    <div className='flex gap-5'>
                        <ProfileCard teams={teams}/>
                        {/* <ProfileCard teams={teams}/> */}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMembers