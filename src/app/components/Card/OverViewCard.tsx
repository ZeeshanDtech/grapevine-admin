import React from 'react'
import ScheduledEventCard from '../ScheduledEventCard/ScheduledEventCard'

const overViewCard = () => {
    const events = [
        { id: 1, title: 'Team Backlog Grooming Session', time: '9:00 - 10:00 am', lead: 'Sean Bean' },
        { id: 2, title: 'Weekly Standup Meeting', time: '10:30 - 11:00 am', lead: 'John Doe' },
        { id: 3, title: 'Project Planning Meeting', time: '11:30 - 12:30 pm', lead: 'Jane Smith' },
        // Add more events as needed
    ];
    return (
        <div className="card-body">
            {events.map(event => (
                <ScheduledEventCard
                    key={event.id}
                    title={event.title}
                    time={event.time}
                    lead={event.lead}
                    className='mb-4'
                    
                />
            ))}
        </div>
    )
}

export default overViewCard