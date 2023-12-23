import {UnorderedListOutlined} from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';


const items = [
    
    {
        
        label: (
            <NavLink to={"/"}
            className={({ isActive }) =>

            ` ${isActive ? "active-link" : ""}`
        }>
                Home
            </NavLink>
        ),
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <NavLink to={"/About"} className={({ isActive }) =>

            ` ${isActive ? "active-link" : ""}`
        }>
                About
            </NavLink>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <NavLink to={"/Portofolios"} className={({ isActive }) =>

            ` ${isActive ? "active-link" : ""}`
        }>
                Portfolio
            </NavLink>
        ),
        key: '3',

    },
    {
        type: 'divider',
    },
    {
        label: (
            <NavLink to={"/Contact"} className={({ isActive }) =>

            ` ${isActive ? "active-link" : ""}`
        }>
                contact
            </NavLink>
        ),
        key: '4',

    },

];
const DropdownBtn = () => (
    <Dropdown
    style={{width: "1000px"}}
      menu={{
        items,
      }}
      trigger={['click','hover']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space >
          <div className='nav-link-dropdown'>
          <UnorderedListOutlined />
          </div>
        </Space>
      </a>
    </Dropdown>
  );

  export default DropdownBtn;