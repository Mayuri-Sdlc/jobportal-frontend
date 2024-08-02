import React from 'react'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { UserList, Login, CampaignList, InvestorList, CampaignListApproval, UserRoles, StartupList, HistoryList, FounderList, SystemUserList, CampaignListPending, CampaignListLive, CampaignListFailed, CampaignListClosed ,StartupListApproved, StartupListPending, StartupListDeclined, DiligenceList,DiligenceCampaignList,CampaignDocs} from '../pages';
import AuthMiddleware from '../middleware/AuthMiddleware';
import CampaignProfile from '../pages/campaign/campaignDetails/CampaignProfile';
import StartupProfile from '../pages/startup/startupDetails/StartupProfile';
import { UserProfile } from '../pages/users/userDetails';

const publicPages = [
  { exact: true, path: "/login", element: Login  },
];

const adminPages = [
  { exact: true, path: "/users", element: UserList  },
  { exact: true, path: "/users/:type/:id", element: UserProfile  },
  { exact: true, path: "/campaigns", element: CampaignList  },
  { exact: true, path: "/campaign/:id", element: CampaignProfile  },
  { exact: true, path: "/campaigns/pending", element: CampaignListPending  },
  { exact: true, path: "/campaigns/closed", element: CampaignListClosed  },
  { exact: true, path: "/campaigns/dealroom", element: CampaignListApproval  },
  { exact: true, path: "/campaigns/live", element: CampaignListLive  },
  { exact: true, path: "/campaigns/failed", element: CampaignListFailed  },
  { exact: true, path: "/users/investors", element: InvestorList  },
  { exact: true, path: "/users/founders", element: FounderList  },
  { exact: true, path: "/users/system-users", element: SystemUserList  },
  { exact: true, path: "/roles", element: UserRoles  },
  { exact: true, path: "/startups/approved", element: StartupListApproved  },
  { exact: true, path: "/startups/pending", element: StartupListPending  },
  { exact: true, path: "/startups/declined", element: StartupListDeclined  },
  { exact: true, path: "/startups/user", element: UserProfile  },
  { exact: true, path: "/startup/:id", element: StartupProfile  },
  { exact: true, path: "/startups", element: StartupList  },
  { exact: true, path: "/history", element: HistoryList  },
  { exact: true, path: "/diligence", element: DiligenceList  },
  { exact: true, path: "/diligence/campaign", element: DiligenceCampaignList  },

];

const Routes = () => {
  const location = useLocation()
  return (
    <BrowserRouter basename="/">
      <Switch>
      {publicPages.map((route, idx) => (
            <AuthMiddleware
                component={route.element}
                isAuthProtected={false}
                //roles={Config.ROLES.ALL}
                path={route.path}
                key={route.path + idx}
                exact={!!route.exact} />
          ))}
      {adminPages.map((route, idx) => (
            <AuthMiddleware
                component={route.element}
                isAuthProtected={true}
                //roles={Config.ROLES.ALL}
                path={route.path}
                key={route.path + idx}
                exact={!!route.exact} />
          ))}
          <Route render={()=><p>404 not found</p>} />
      </Switch>
    </BrowserRouter >
  )
}

export default Routes