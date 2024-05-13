import React from 'react';

interface rolesProps {
    title: string;
}

const Roles: React.FC<rolesProps> = ({
    title,
}) => {
    return (
        <div className='fs14 fw-500 text-seventy'>{title}</div>
    )
}

export default Roles