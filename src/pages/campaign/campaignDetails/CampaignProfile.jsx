import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Sidebar, Header, Loader } from '../../../components'
import { getAllInvestors } from '../../../features/investor/investorSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CampaignDealTerms, CampaignInfo, CampaignFinancial, CampaignBankDetails, CampaignIdea, CampaignFAQ, CampaignFundingHistory, CampaignSoftCommitment } from './index'
import TeamMembers from '../../users/userDetails/TeamMembers'
import { getCampaignsById } from '../../../features/campaign/campaignSlice'
import { getAccountByCompanyId, getAccountByUserId } from '../../../features/bank/bank.slice'


const CampaignProfile = () => {
  const dispatch = useDispatch();
  const [openTab, setOpenTab] = useState(1);
  const { id } = useParams()

  const { investors } = useSelector((state) => state.investor)
  const { campaignsById, isLoading: campaignLoading } = useSelector((state) => state.campaign)
  const { companyBankAccount,accounts, isLoading: accountsLoading } = useSelector((state) => state.bankAccount)
  console.log("campaignsById",campaignsById.companyId)
  console.log("companyBankAccount",companyBankAccount)
  let options = {
    "limit": 5,
    "page": 1,
}

  let optionsData = {
    "limit": 5,
    "page": 1,
}

  useEffect(() => {
    dispatch(getAllInvestors(optionsData))
    dispatch(getCampaignsById(id))
  }, [])

  useEffect(()=>{
    if(campaignsById?.companyId){
      console.log("campaignsById>>>>UsEff",campaignsById.companyId)
    dispatch(getAccountByCompanyId(campaignsById?.companyId))
    }
  },[campaignsById])

  if (campaignLoading) return <Loader />

  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        <Header></Header>
        <div className='px-2 sm:px-4'>
          <div className="overflow-x-auto w-full">
            <div className='flex flex-wrap items-center justify-between'>
              <div className='pt-4'>
                <h3 className='flex flex-row gap-3 font-bold items-center text-xl text-secondary'>
                  <svg onClick={() => history.back()} className="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="19" y1="12" x2="5" y2="12" />  <polyline points="12 19 5 12 12 5" /></svg>
                  Profile
                </h3>
              </div>
              <div className='pt-4'>
                <div className="text-sm font-normal breadcrumbs">
                  <ul>
                    <li><Link to='/dashboard' className='text-primary'>Dashboard</Link></li>
                    <li className='text-secondary'>Profile</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mt-4">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap p-3 flex-row bg-[#EBEDF0] rounded-lg gap-3"
                  role="tablist"
                >
                  <li className="text-center">
                    <a
                      className={
                        "text-sm font-bold px-4 sm:px-10 py-2 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 1 ? "text-[#2626EA] bg-white" : "text-[#8993A4] bg-[#F5F6F7]")
                      }
                      onClick={(e) => { e.preventDefault(); setOpenTab(1); }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      Deal Terms
                    </a>
                  </li>
                  <li className="text-center">
                    <a
                      className={
                        "text-sm font-bold px-4 sm:px-10 py-2 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 2 ? "text-[#2626EA] bg-white" : "text-[#8993A4] bg-[#F5F6F7]")
                      }
                      onClick={(e) => { e.preventDefault(); setOpenTab(2); }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Campaign Info
                    </a>
                  </li>
                  <li className="text-center">
                    <a
                      className={
                        "text-sm font-bold px-4 sm:px-10 py-2 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 3 ? "text-[#2626EA] bg-white" : "text-[#8993A4] bg-[#F5F6F7]")
                      }
                      onClick={(e) => { e.preventDefault(); setOpenTab(3); }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Financial
                    </a>
                  </li>
                  <li className="text-center">
                    <a
                      className={
                        "text-sm font-bold px-4 sm:px-10 py-2 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 4 ? "text-[#2626EA] bg-white" : "text-[#8993A4] bg-[#F5F6F7]")
                      }
                      onClick={(e) => { e.preventDefault(); setOpenTab(4); }}
                      data-toggle="tab"
                      href="#link4"
                      role="tablist"
                    >
                      Bank Details
                    </a>
                  </li>
                  <li className="text-center">
                    <a
                      className={
                        "text-sm font-bold px-4 sm:px-10 py-2 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 5 ? "text-[#2626EA] bg-white" : "text-[#8993A4] bg-[#F5F6F7]")
                      }
                      onClick={(e) => { e.preventDefault(); setOpenTab(5); }}
                      data-toggle="tab"
                      href="#link5"
                      role="tablist"
                    >
                      Idea
                    </a>
                  </li>
                  <li className="text-center">
                    <a
                      className={
                        "text-sm font-bold px-4 sm:px-10 py-2 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 6 ? "text-[#2626EA] bg-white" : "text-[#8993A4] bg-[#F5F6F7]")
                      }
                      onClick={(e) => { e.preventDefault(); setOpenTab(6); }}
                      data-toggle="tab"
                      href="#link6"
                      role="tablist"
                    >
                      Team Members
                    </a>
                  </li>
                  <li className="text-center">
                    <a
                      className={
                        "text-sm font-bold px-4 sm:px-10 py-2 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 7 ? "text-[#2626EA] bg-white" : "text-[#8993A4] bg-[#F5F6F7]")
                      }
                      onClick={(e) => { e.preventDefault(); setOpenTab(7); }}
                      data-toggle="tab"
                      href="#link7"
                      role="tablist"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="text-center">
                    <a
                      className={
                        "text-sm font-bold px-4 sm:px-10 py-2 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 8 ? "text-[#2626EA] bg-white" : "text-[#8993A4] bg-[#F5F6F7]")
                      }
                      onClick={(e) => { e.preventDefault(); setOpenTab(8); }}
                      data-toggle="tab"
                      href="#link8"
                      role="tablist"
                    >
                      Funding History
                    </a>
                  </li>
                  <li className="text-center">
                    <a
                      className={
                        "text-sm font-bold px-4 sm:px-10 py-2 shadow-lg rounded-lg block leading-normal " +
                        (openTab === 9 ? "text-[#2626EA] bg-white" : "text-[#8993A4] bg-[#F5F6F7]")
                      }
                      onClick={(e) => { e.preventDefault(); setOpenTab(9); }}
                      data-toggle="tab"
                      href="#link9"
                      role="tablist"
                    >
                      Soft Commitment
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                        <CampaignDealTerms campaign={campaignsById} />
                      </div>
                      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                        <CampaignInfo campaign={campaignsById} />
                      </div>
                      <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                        <CampaignFinancial campaign={campaignsById} investors={investors} />
                      </div>
                      <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                        <CampaignBankDetails campaign={campaignsById} companyBankAccount={companyBankAccount}/>
                      </div>
                      <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                        <CampaignIdea campaign={campaignsById} />
                      </div>
                      <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                        <TeamMembers campaign={campaignsById} />
                      </div>
                      <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                        <CampaignFAQ campaign={campaignsById} />
                      </div>
                      <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                        <CampaignFundingHistory campaign={campaignsById} />
                      </div>
                      <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                        <CampaignSoftCommitment campaign={campaignsById} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignProfile