import React from 'react';
import Avatar from 'react-avatar';
import './AvatarGroup.scss';

interface AvatarGroupProps {
    data: { 
        name?: string; 
        src?: string;
    }[];
    size?: string;
    textSize?: number;
    limit?: number; // Add limit prop
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
    data,
    size = '25',
    textSize = 1.5,
    limit = 2, // Default limit is set to 2
}) => {
    const visibleData = data.slice(0, limit); // Get visible data up to the limit
    const remainingCount = Math.max(0, data.length - limit); // Calculate remaining count

    return (
        <div className="symbol-group symbol-hover flex-nowrap">
            {visibleData.map((item, index) => (
                <div className="symbol symbol-circle symbol-25px" key={index}>
                    {item.name && <Avatar name={item.name} size={size} round={true} textSizeRatio={textSize} />}
                    {item.src && <Avatar src={item.src} size={size} round={true} className='object-fit-cover' />}
                </div>
            ))}
            {remainingCount > 0 && (
                <div className="symbol symbol-circle symbol-25px">
                    <div className='counterLimit' style={{ width: `${size}px`, height: `${size}px` }}>{`+${remainingCount}`}</div>
                </div>
            )}
        </div>
    );
}

export default AvatarGroup;
