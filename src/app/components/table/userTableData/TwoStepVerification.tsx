import React from 'react';

interface TwoStepVerificationProps {
    title: string;
}

const TwoStepVerification: React.FC<TwoStepVerificationProps> = ({
    title,
}) => {
    return (
        <>
            {title && (
                <div className='two-step-verification'>{title}</div>
            )}
        </>
    );
};

export default TwoStepVerification;
