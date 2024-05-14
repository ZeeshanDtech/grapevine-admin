"use client";
import React from 'react';
import './tabs.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import AddSectionHeader from '../Chat/ScreenFlow/ScreenChats/AddSectionHeader/AddSectionHeader';

interface tabsProps {
    tabsData: any;
}

const tabs: React.FC<tabsProps> = ({
    tabsData,
}) => {
    return (
        <>
            {
                tabsData.length > 0 && (
                    <Tabs
                        defaultActiveKey={tabsData[0].key}
                    >
                        {
                            tabsData.map((item: any, index: any) => {
                                return (
                                    <Tab
                                        key={index}
                                        eventKey={item.key}
                                        title={item.tabsName}
                                    >
                                        {item.content}
                                    </Tab>
                                )
                            })
                        }
                    </Tabs>
                )
            }
        </>
    )
}

export default tabs;