import React from 'react';
import { useRouter } from 'next/router';
import { ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Actions = () => {
    // const router = useRouter();

    // const downloadFile = () => {
    //     router.push('/download');
    // };
    const tooltipShare = (
        <Tooltip id="tooltip">
            Share
        </Tooltip>
    );
    const tooltipDownload = (
        <Tooltip id="tooltip">
            Download
        </Tooltip>
    );
    const tooltipRename = (
        <Tooltip id="tooltip">
            Rename
        </Tooltip>
    );
    const tooltipSaveOffice = (
        <Tooltip id="tooltip">
            Save to Office
        </Tooltip>
    );

    return (
        <div className='actions'>
            <ButtonToolbar className='gap-2 justify-content-center' >
                <OverlayTrigger placement="bottom" overlay={tooltipShare}>
                    <div className="customIconHover">
                        <i className="fa-solid fa-user-plus fs14"></i>
                    </div>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={tooltipDownload}>
                    <div className="customIconHover">
                        <i className="fa-solid fa-arrow-down fs14"></i>
                    </div>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={tooltipRename}>
                    <div className="customIconHover">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={tooltipSaveOffice}>
                    <div className="customIconHover">
                        <i className="fa-solid fa-bookmark"></i>
                    </div>
                </OverlayTrigger>
            </ButtonToolbar>
        </div>
    );
};

export default Actions;
