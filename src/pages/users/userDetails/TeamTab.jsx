import React from 'react'
import ProfileCard from '../../../components/Cards/ProfileCard'
import member1 from '../../../assets/team/member1.svg'

const TeamTab
 = () => {
const cardDetail = {
      profilePic:member1,
      name:" Matthew Bauch",
      designation:"Legal Advisor",
      linkedin:true,
      mailId:"matthewbauch@gmail.com"
}

    return (
        <>
            <div className=' w-full'>
                <div>
                    <div className='font-bold text-xl'>Director</div>
                    <div className='bg-[#F5F6F7] py-5 px-7  rounded-lg mt-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5'>
                        <ProfileCard cardDetail={cardDetail} />
                        <ProfileCard cardDetail={cardDetail}/>
                    </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='font-bold text-xl'>Founder</div>
                    <div className='bg-[#F5F6F7] py-5 px-7 rounded-lg mt-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5'>
                        <ProfileCard cardDetail={cardDetail}/>
                        <ProfileCard cardDetail={cardDetail}/>
                    </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='font-bold text-xl'>Team Members</div>
                    <div className='bg-[#F5F6F7] py-5 px-7 rounded-lg mt-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5'>
                        <ProfileCard cardDetail={cardDetail}/>
                        <ProfileCard cardDetail={cardDetail}/>
                        <ProfileCard cardDetail={cardDetail}/>
                        <ProfileCard cardDetail={cardDetail}/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamTab
