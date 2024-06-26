import {useEffect} from 'react'
import { HeaderWrapper } from './components/layout/header'
import { Sidebar } from './components/layout/sidebar'
import { ToolbarWrapper } from './components/layout/toolbar'
import { Content } from './components/layout/content'
import { FooterWrapper } from './components/layout/footer'
import { ScrollTop } from './components/layout/scroll-top'
import { PageDataProvider } from './PageData'
import '../../assets/scss/style.scss';
import '../../assets/scss/global.scss'
// import {Outlet, useLocation} from 'react-router-dom'
// import {HeaderWrapper} from './components/header'
// import {RightToolbar} from '../partials/layout/RightToolbar'
// import {ScrollTop} from './components/scroll-top'
// import {Content} from './components/content'
// import {FooterWrapper} from './components/footer'
// import {Sidebar} from './components/sidebar'
// import {ActivityDrawer, DrawerMessenger, InviteUsers, UpgradePlan} from '../partials'
// import {PageDataProvider} from './core'
// import {reInitMenu} from '../helpers'
// import {ToolbarWrapper} from './components/toolbar'

const AdminLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
  // const location = useLocation()
  // useEffect(() => {
  //   reInitMenu()
  // }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root app-root' id='kt_app_root'>
        <div className='app-page flex-column flex-column-fluid' id='kt_app_page'>
          <HeaderWrapper />
          <div className='app-wrapper flex-column flex-row-fluid' id='kt_app_wrapper'>
            <Sidebar />
            <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
              <div className='d-flex flex-column flex-column-fluid'>
                <ToolbarWrapper />
                {/* <Content> */}
                  <div className="p-30px">
                    {children}
                  </div>
                  {/* <Outlet /> */}
                {/* </Content> */}
              </div>
              <FooterWrapper />
            </div>
          </div>
        </div>
      </div>

      {/* begin:: Drawers */}
      {/* <ActivityDrawer /> */}
      {/* <RightToolbar /> */}
      {/* <DrawerMessenger /> */}
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      {/* <InviteUsers /> */}
      {/* <UpgradePlan /> */}
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  )
}

export default AdminLayout