import React from 'react';
import simbleprofile from '@/app/assets/media/avatar/300-6.jpg';
import Image from 'next/image';
import './Card.scss'
import { HiMiniInformationCircle } from 'react-icons/hi2';
import { IoArrowUpOutline } from 'react-icons/io5';
import { IoMdArrowDown } from 'react-icons/io';

const InfoCard = () => {
    return (
        <div className="card-body">
            <div className="d-flex flex-center flex-column py-5">
                <div className="symbol symbol-100px symbol-circle mb-7">
                    <Image src={simbleprofile} width={100} height={100} alt="image" />
                </div>
                <a href="#" className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3">
                    Emma Smith{" "}
                </a>
                <div className="mb-9">
                    <div className="badge badge-lg badge-light-primary d-inline">
                        Administrator
                    </div>
                </div>
                <div className="fw-bold mb-3">
                    Assigned Tickets
                    <span
                        className="ms-2"
                        ddata-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-html="true"
                        data-bs-content="Number of support tickets assigned, closed and pending this week."
                    >
                        <HiMiniInformationCircle />

                    </span>
                </div>
                <div className="d-flex flex-wrap flex-center">
                    <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                        <div className="fs-4 fw-bold text-gray-700">
                            <span className="w-75px">243</span>
                            <IoArrowUpOutline className='text-success' />

                        </div>
                        <div className="fw-semibold text-muted">Total</div>
                    </div>
                    <div className="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
                        <div className="fs-4 fw-bold text-gray-700">
                            <span className="w-50px">56</span>
                            <IoMdArrowDown className='text-danger' />
                        </div>
                        <div className="fw-semibold text-muted">Solved</div>
                    </div>
                    <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                        <div className="fs-4 fw-bold text-gray-700">
                            <span className="w-50px">188</span>
                            <IoArrowUpOutline className='text-success' />
                        </div>
                        <div className="fw-semibold text-muted">Open</div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-stack fs-4 py-3">
                <div
                    className="fw-bold rotate collapsible"
                    data-bs-toggle="collapse"
                    // href="#kt_user_view_details"
                    role="button"
                    aria-expanded="false"
                    aria-controls="kt_user_view_details"
                >
                    Details
                    <span className="ms-2 rotate-180">
                        <i className="ki-duotone ki-down fs-3" />{" "}
                    </span>
                </div>
                <span
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-original-title="Edit customer details"
                    data-kt-initialized={1}
                >
                    <a
                        href="#"
                        className="btn btn-sm btn-light-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_update_details"
                    >
                        Edit
                    </a>
                </span>
            </div>
            <div className="separator" />
            <div id="kt_user_view_details" className="collapse show">
                <div className="pb-5 fs-6">
                    <div className="fw-bold mt-5">Account ID</div>
                    <div className="text-gray-600">ID-45453423</div>
                    <div className="fw-bold mt-5">Email</div>
                    <div className="text-gray-600">
                        <a href="#" className="text-gray-600 text-hover-primary">
                            info@keenthemes.com
                        </a>
                    </div>
                    <div className="fw-bold mt-5">Address</div>
                    <div className="text-gray-600">
                        101 Collin Street, <br />
                        Melbourne 3000 VIC
                        <br />
                        Australia
                    </div>
                    <div className="fw-bold mt-5">Language</div>
                    <div className="text-gray-600">English</div>
                    <div className="fw-bold mt-5">Last Login</div>
                    <div className="text-gray-600">20 Dec 2024, 11:30 am</div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;