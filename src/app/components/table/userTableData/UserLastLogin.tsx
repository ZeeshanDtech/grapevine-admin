import React from 'react';

interface UserLastLoginProps {
    title: string;
}

const UserLastLogin:React.FC<UserLastLoginProps> = ({
    title,
}) => {
    
    return (
        <div className='last-login text-nowrap'>{title}</div>
    )
}

export default UserLastLogin