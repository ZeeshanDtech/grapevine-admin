import React from 'react';

interface ScheduledEventCardProps {
    title: string;
    time: string;
    lead: string;
    className?: string;
} 

const ScheduledEventCard:React.FC<ScheduledEventCardProps> = ({
    title,
    time,
    lead,
    className = '',
}) => {
    return (
        <div className={`d-flex flex-stack position-relative ${className}`}>
            <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
            <div className="fw-semibold ms-5">
                <div className="fs-7 mb-1">
                    {time}
                    <span className="fs-7 text-muted text-uppercase">am </span>
                </div>
                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                    {title}
                </a>
                <div className="fs-7 text-muted">
                    Lead by <a href="#">{lead}</a>
                </div>
            </div>
            <a href="#" className="btn btn-light bnt-active-light-primary btn-sm">
                View
            </a>
        </div>
    )
}

export default ScheduledEventCard