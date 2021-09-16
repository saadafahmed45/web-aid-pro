import React from "react";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarContent ,SidebarFooter} from "react-pro-sidebar";
import { GrUserAdmin } from "react-icons/gr";
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
const AdminPanel = () => {
  return (
    <div>
    <div className="admin_panel">
        <div className="row">
          <div className="col-md-6">
          <ProSidebar>
  <SidebarHeader>
  <h5>Web Aid Pro</h5>
  </SidebarHeader>
  <SidebarContent>
  <Menu iconShape="square">
    <MenuItem icon={<GrUserAdmin />}>Dashboard</MenuItem>

    <MenuItem icon={<GrUserAdmin />}><Link to="/services">services</Link></MenuItem>
    <MenuItem><Link to="/Makadmin">admin</Link></MenuItem>

    <SubMenu title="Components" icon={<GrUserAdmin />}>
      <MenuItem><Link to="/dashboard/Makadmin"></Link></MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
  </SidebarContent>
  <SidebarFooter>
    <button className="btn btn-primary">Login</button>
  </SidebarFooter>
</ProSidebar>

          </div>

          <div className="col-md-6">
            <h1>hello dashboard</h1>
          </div>
        </div>
    </div>
    </div>
  );
};

export default AdminPanel;
