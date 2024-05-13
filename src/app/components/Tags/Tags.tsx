import React from 'react';
import './Tags.scss';

interface TagsProps {
    data: {
        title?: string;
    }[];
    limit?: number;
    bgColor?: string;
    size?: string;
}

const Tags: React.FC<TagsProps> = ({
    data,
    limit = 2,
    bgColor,
    size = '25',
}) => {
    const visibleData = data.slice(0, limit);
    const remainingCount = Math.max(0, data.length - limit);
    return (
        <div className='d-flex gap-2 align-items-center'>
            {visibleData.map((item, index) => (
                <div className='tagsTitle' key={index} style={{background: `${bgColor}`}}>
                    {item.title}
                </div>
            ))}

            {remainingCount > 0 && (
                <div className="counterLimit" style={{ width: `${size}px`, height: `${size}px` }}>{`+${remainingCount}`}</div>
            )}
        </div>
    )
}

export default Tags