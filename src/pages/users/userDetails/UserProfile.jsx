import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Sidebar, Header, Loader } from '../../../components'
import { getInvestorById, getPreferencesByInvestorId } from '../../../features/investor/investorSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getFounderById } from '../../../features/founder/founderSlice'
import { getFundingHistoryByInvestorId } from '../../../features/fundingHistory/fundingHistorySlice'
import { getAccountByUserId } from '../../../features/bank/bank.slice'
import { getCardDetailsByUserId, getTransactionsByMangoPayId, getWalletByMangoPayId } from '../../../features/mangoPay/mangoPay.slice'
import { getCompaniesByUserId } from '../../../features/company/company.slice'
import { ProfileBasic, ProfileFounder, KybKyc, WalletTab, ProfilePortfolio, ProfileSyndicate, ProfileBasicInvestor, ProfileCompany, TeamMembers } from './index'

const UserProfile = () => {
  const dispatch = useDispatch();
  const [openTab, setOpenTab] = useState(1);
  const { type, id } = useParams()
  const navigate = useHistory()

  const { singleInvestor, isLoading: investorLoading } = useSelector((state) => state.investor)
  const { preferences, isLoading: preferencesLoading } = useSelector((state) => state.investor)
  const { history, isLoading: historyLoading } = useSelector((state) => state.fundingHistory)
  const { accounts, isLoading: accountsLoading } = useSelector((state) => state.bankAccount)
  const { wallet, isLoading: walletLoading } = useSelector((state) => state.mangoPay)
  const { cards, isLoading: cardsLoading } = useSelector((state) => state.mangoPay)
  const { transactions, isLoading: transactionsLoading } = useSelector((state) => state.mangoPay)
  const { companies, isLoading: companiesLoading } = useSelector((state) => state.company)
  const { founderById, isLoading: founderLoading } = useSelector((state) => state.founder)
  const mangoPayId = singleInvestor?.user?.mangoPayId;

  useEffect(() => {
    if(openTab == 1) {
      if (type == "investor") {
        dispatch(getInvestorById(id))
        dispatch(getPreferencesByInvestorId(id))
      } 
      if (type == "founder") dispatch(getFounderById(id))
    }
    if (openTab == 2) {
      dispatch(getFundingHistoryByInvestorId(id))
    }
    if (openTab == 5) {
      dispatch(getAccountByUserId(id))
      dispatch(getWalletByMangoPayId(mangoPayId))
      dispatch(getCardDetailsByUserId(id))
      dispatch(getTransactionsByMangoPayId(id))
    }
    if (openTab == 7) {
      const payload = { id: id }
      dispatch(getCompaniesByUserId(payload));
    }
  }, [openTab])

  if (investorLoading || founderLoading) return <Loader />

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
                  <svg onClick={() => navigate.goBack()} className="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="19" y1="12" x2="5" y2="12" />  <polyline points="12 19 5 12 12 5" /></svg>
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

            {type == "investor" && <div className="flex flex-wrap mt-4">
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
                      Basic
                    </a>
                  </li>
                  {singleInvestor?.user?.role?.type == "institutional" &&
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
                        Company
                      </a>
                    </li>}
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
                      Portfolio
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
                      Syndicate
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
                      KYC/KYB
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
                      Wallet
                    </a>
                  </li>
                  {singleInvestor?.user?.role?.type == "institutional" &&
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
                    </li>}
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                        {singleInvestor?.user?.role?.type == "individual" ?
                        <ProfileBasic investor={singleInvestor} preferences={preferences} preferencesLoading={preferencesLoading} openTab={openTab} />:
                        <ProfileBasicInvestor investor={singleInvestor} preferences={preferences} preferencesLoading={preferencesLoading}/>}
                      </div>
                      {singleInvestor?.user?.role?.type == "institutional" &&
                        <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                          <ProfileCompany companies={companies} />
                        </div>}
                      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                        <ProfilePortfolio investor={singleInvestor} history={history} historyLoading={historyLoading}/>
                      </div>
                      <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                        <ProfileSyndicate />
                      </div>
                      <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                        <KybKyc />
                      </div>
                      <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                        <WalletTab wallet={wallet} investor={singleInvestor} cards={cards} accounts={accounts} transactions={transactions} />
                      </div>
                      {singleInvestor?.user?.role?.type == "institutional" &&
                        <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                          <TeamMembers companies={companies} />
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>}
            {type == "founder" &&
              <div className="flex flex-wrap mt-4">
                <div className="w-full">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                    <div className="px-4 py-5 flex-auto">
                      <div className="tab-content tab-space">
                        <div className="block">
                          <ProfileFounder founder={founderById} />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile