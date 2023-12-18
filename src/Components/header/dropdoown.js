import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
const items = [
    {
        label: (
            <NavLink to={"/"}
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
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
            <NavLink to={"/About"}
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
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
            <NavLink to={"/Portofolios"}
                className={({ isActive }) =>

                    `nav-link ${isActive ? "active-link" : ""}`
                }>
                Portfolio
            </NavLink>
        ),
        key: '3',
        disabled: true,
    },
];
const DropdownBtn = () => (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Click me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );

  export default DropdownBtn;