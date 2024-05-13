import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface DocumentTableProps {
    link: any;
    icon: any;
    email: string;
    name: string
}

const DocumentTable:React.FC<DocumentTableProps> = ({
    link,
    icon,
    email,
    name,
}) => {
    return (
        <Link href={link} target='_blank' className='d-flex align-items-center gap-3'>
            <div className="file-icon"> 
                <Image src={icon} width={50} height={50} className='rounded-circle' alt='' /> 
            </div>
            <div className="">
                <div className="user-name fs16 text-dark fw-700 lineclamp1">{name}</div>
                <div className="file-name fs14 text-seventy fw-500 lineclamp1">{email}</div>
            </div>
        </Link>
    )
}

export default DocumentTable