import React from 'react';
import './table.scss';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { Field, Form, Formik } from 'formik';
import DocumentTable from './userTableData/userName';
import simbleprofile from '@/app/assets/media/avatar/300-6.jpg';
import Actions from './TableAction/Actions';
import MoreOption from './TableAction/MoreOption';
import { Table } from 'react-bootstrap';
import Roles from './userTableData/Roles';
import Date from './userTableData/Date';
import TwoStepVerification from './userTableData/TwoStepVerification';
import UserLastLogin from './userTableData/UserLastLogin';
import Search from '../Search/Search';
import Button from '../Button/Button';
import { FaCoffee, FaFilter } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faCircle} from '@fortawesome/fontawesome-free-solid';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// import "@fortawesome/fontawesome-free/scss/";
// import 'font-awesome/css/';
import 'font-awesome/css/font-awesome.min.css';

// import '@fortawesome/fontawesome-free-solid/.'



type Person = {
    // firstName: JSX.Element;
    userName: any;
    role: any;
    lastLogin: any;
    twoStep: any;
    joinedDate: any;
    MoreOption: JSX.Element;
};

const defaultData: Person[] = [
    {
        // firstName: <Field type="checkbox" name="dataTable1" className='w-20px h-20px' />,
        userName: (
            <DocumentTable
                link={''}
                icon={simbleprofile}
                email="email@example.com"
                name='Emma Smith'
            />
        ),
        role: <Roles title='Administrator' />,
        lastLogin: 'sdfghjkk',
        twoStep: <TwoStepVerification title='Enabled' />,
        joinedDate: <Date title='22-09-2022' />,
        
        MoreOption: <MoreOption />,
    },
    {
        // firstName: <Field type="checkbox" name="dataTable2" className='w-20px h-20px' />,
        userName: (
            <DocumentTable
                link={''}
                icon={simbleprofile}
                email="email@example.com"
                name='Melody Macy'
            />
        ),
        role: <Roles title='Administrator' />,
        lastLogin: <UserLastLogin title='Yesterday' />,
        twoStep: <TwoStepVerification title='sdfsdfsd' />,
        joinedDate: <Date title='22-09-2022' />,
        
        MoreOption: <MoreOption />,
    },
    {
        // firstName: <Field type="checkbox" name="dataTable2" className='w-20px h-20px' />,
        userName: (
            <DocumentTable
                link={''}
                icon={simbleprofile}
                email="email@example.com"
                name='Max Smith'
            />
        ),
        role: <Roles title='Administrator' />,
        lastLogin: <UserLastLogin title='20 mins ago' />,
        twoStep: <TwoStepVerification title='Enabled' />,
        joinedDate: <Date title='22-09-2022' />,
        
        MoreOption: <MoreOption />,
    },
    {
        // firstName: <Field type="checkbox" name="dataTable2" className='w-20px h-20px' />,
        userName: (
            <DocumentTable
                link={''}
                icon={simbleprofile}
                email="email@example.com"
                name='Max Smith'
            />
        ),
        role: '',
        lastLogin: <UserLastLogin title='Yesterday' />,
        twoStep: <TwoStepVerification title='Enabled' />,
        joinedDate: <Date title='22-09-2022' />,
        
        MoreOption: <MoreOption />,
    },
    {
        // firstName: <Field type="checkbox" name="dataTable2" className='w-20px h-20px' />,
        userName: (
            <DocumentTable
                link={''}
                icon={simbleprofile}
                email="email@example.com"
                name='Max Smith'
            />
        ),
        role: <Roles title='Analyst' />,
        lastLogin: <UserLastLogin title='Yesterday' />,
        twoStep: <TwoStepVerification title='Enabled' />,
        joinedDate: <Date title='22-09-2022' />,
        
        MoreOption: <MoreOption />,
    },
    {
        // firstName: <Field type="checkbox" name="dataTable2" className='w-20px h-20px' />,
        userName: (
            <DocumentTable
                link={''}
                icon={simbleprofile}
                email="email@example.com"
                name='Max Smith'
            />
        ),
        role: <Roles title='Analyst' />,
        lastLogin: <UserLastLogin title='Yesterday' />,
        twoStep: <TwoStepVerification title='Enabled' />,
        joinedDate: <Date title='22-09-2022' />,
        
        MoreOption: <MoreOption />,
    },
    {
        // firstName: <Field type="checkbox" name="dataTable2" className='w-20px h-20px' />,
        userName: (
            <DocumentTable
                link={''}
                icon={simbleprofile}
                email="email@example.com"
                name='Max Smith'
            />
        ),
        role: <Roles title='Analyst' />,
        lastLogin: <UserLastLogin title='Yesterday' />,
        twoStep: <TwoStepVerification title='Enabled' />,
        joinedDate: <Date title='22-09-2022' />,
        
        MoreOption: <MoreOption />,
    },
    {
        // firstName: <Field type="checkbox" name="dataTable2" className='w-20px h-20px' />,
        userName: (
            <DocumentTable
                link={''}
                icon={simbleprofile}
                email="email@example.com"
                name='Max Smith'
            />
        ),
        role: <Roles title='Analyst' />,
        lastLogin: <UserLastLogin title='Yesterday' />,
        twoStep: <TwoStepVerification title='Enabled' />,
        joinedDate: <Date title='22-09-2022' />,
        
        MoreOption: <MoreOption />,
    },
    {
        // firstName: <Field type="checkbox" name="dataTable2" className='w-20px h-20px' />,
        userName: (
            <DocumentTable
                link={''}
                icon={simbleprofile}
                email="email@example.com"
                name='Max Smith'
            />
        ),
        role: <Roles title='Analyst' />,
        lastLogin: <UserLastLogin title='Yesterday' />,
        twoStep: <TwoStepVerification title='Enabled' />,
        joinedDate: <Date title='22-09-2022' />,
        
        MoreOption: <MoreOption />,
    },
    // other data objects...
];

const columnHelper = createColumnHelper<Person>();
const columns = [
    // columnHelper.accessor('firstName', {
    //     cell: (info) => info.getValue(),
    //     header: () => <Field type="checkbox" name="checkall" className='w-20px h-20px' />,
    //     size: 25,
    // }),
    columnHelper.accessor((row) => row.userName, {
        id: 'userName',
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>User Name</span>,
        size: 300,
    }),
    columnHelper.accessor('role', {
        header: () => <span>Role</span>,
        cell: (info) => info.renderValue(),
        size: 200,
    }),
    columnHelper.accessor('lastLogin', {
        header: () => <span>Last Login</span>,
        size: 200,
    }),
    columnHelper.accessor('twoStep', {
        header: 'Two-Step',
        cell: (info) => <span>{info.getValue()}</span>,
        size: 120,
    }),
    columnHelper.accessor('joinedDate', {
        header: 'Joined Date',
        cell: (info) => <span>{info.getValue()}</span>,
        size: 200,
    }),
    
    columnHelper.accessor('MoreOption', {
        header: '',
        cell: (info) => <span>{info.getValue()}</span>,
        size: 25,
    }),
];

const DataTable = () => {
    const [data] = React.useState<Person[]>(defaultData);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="data-table-wraper">
            <Formik
                initialValues={{
                    checkall: false,
                    dataTable1: false,
                    dataTable2: false,
                    dataTable3: false,
                }}
                onSubmit={() => {}}
            >
                <Form>
                    <div className="d-flex justify-content-center justify-content-md-between gap-3 flex-wrap align-items-center mb-2">
                        <Search searchIcon={'fas fa-search'} placeholder='Search User' />

                        <div className="filter-buttons-box d-flex gap-3">
                            <Button label='Filter' btnSize='fs14' />
                            <Button label='Export' btnSize='fs14' />
                        </div>
                    </div>
                    <Table className='mb-0' style={{ borderCollapse: 'separate', borderSpacing: '0 5px', overflowY: 'hidden' }} responsive>
                        <thead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id} className='fs14 fw-600 color-dark'>
                                    {headerGroup.headers.map(header => (
                                        <th key={header.id} style={{ width: `${header.getSize()}px` }}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map(row => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Form>
            </Formik>
        </div>
    );
};

export default DataTable;
