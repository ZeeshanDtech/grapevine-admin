import React from 'react';

interface dateProps {
    title: string
}

const Date:React.FC<dateProps> = ({
    title,
}) => {
    return (
        <div className='fs14 fw-normal text-seventy text-nowrap'>{title}</div>
    )
}

export default Date