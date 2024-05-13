import React from 'react'
import { Dropdown } from 'react-bootstrap'

const MoreOption = () => {
    return (
        <Dropdown className='transparent-icon-btn dropdownToggleRemove'>
            <Dropdown.Toggle className='d-flex align-items-center'>
                    Actions
                {/* <div className='customIconHover'>
                </div> */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item> <div className="d-flex align-items-baseline gap-2 edit-item"><span>Edit</span></div></Dropdown.Item>
                <Dropdown.Item> <div className="d-flex align-items-baseline gap-2 dell-item"><span>Delete</span></div></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default MoreOption