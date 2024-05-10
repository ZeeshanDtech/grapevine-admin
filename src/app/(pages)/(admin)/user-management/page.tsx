// "use client"
// import React from 'react';

// import {PageLink, PageTitle} from '../core'
// import {UsersListWrapper} from './users-list/UsersList'
// import Link from 'next/link'  

// const usersBreadcrumbs: Array<PageLink> = [
//   {
//     title: 'User Management',
//     path: '/user-management',
//     isSeparator: false,
//     isActive: false,
//   },
//   {
//     title: '',
//     path: '',
//     isSeparator: true,
//     isActive: false,
//   },
// ]

// const page = () => {
//   return (
//     <>
//     <PageTitle breadcrumbs={usersBreadcrumbs}>Users list</PageTitle>
//     <Link href={'asdasd'}>asdasd</Link>
//     {/* <UsersListWrapper /> */}
//   </>
//   )
// }

// export default page

"use client"
import React from 'react';
import { KTCard } from '../helpers';
import { UsersListHeader } from './users-list/components/header/UsersListHeader';
import { UsersTable } from './users-list/table/UsersTable';

const page = () => {
    return (
        <>
            <div className=''>
                page
            </div>
            {/* <KTCard>
                <UsersListHeader />
                <UsersTable />
            </KTCard> */}
        </>
    )
}

export default page