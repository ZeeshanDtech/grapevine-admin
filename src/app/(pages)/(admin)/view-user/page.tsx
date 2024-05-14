"use client";
import React from 'react';
import InfoCard from '@/app/components/Card/InfoCard';
import OverViewCard from '@/app/components/card/OverViewCard';
import { Tab, Tabs } from 'react-bootstrap';

const viewUser = () => {
    const mainTabsContent = [
        {
            key: 'repository',
            title: 'Repository',
            content: <OverViewCard />,
            tabIcon: <i className="fa-regular fa-file-lines fs16"></i> // Example icon from Bootstrap Icons
        },
        // {
        //     key: 'intranet',
        //     title: 'Intranet',
        //     content: 'Tab content for Intranet',
        //     tabIcon: <i className="fa-regular fa-images fs16"></i> // Example icon from Bootstrap Icons
        // },
    ];
    return (
        <div className='row'>
            <div className="col-md-4">
                <InfoCard />
            </div>
            <div className="col-md-8">
                <Tabs
                    defaultActiveKey={mainTabsContent[0].key}
                    transition={false}
                >
                    {mainTabsContent.map((item, index) => (
                        <Tab
                            key={index}
                            eventKey={item.key}
                            title={
                                <div className='d-flex align-items-center gap-2'>
                                    {/* {item.tabIcon && <div className='h-15px'>{item.tabIcon}</div>} */}
                                    {item.title && <span className="lh24 fs16">{item.title}</span>}
                                </div>
                            }
                        >
                            <div className="information-hub-main-content-box">
                                {item.content}
                            </div>
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </div>

    )
}

export default viewUser