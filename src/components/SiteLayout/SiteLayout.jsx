import React, { useEffect, useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProductOutlined,
    LogoutOutlined,
    DownOutlined,
    UserOutlined,
    DashboardOutlined,
    ThunderboltTwoTone,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { TbPasswordUser } from "react-icons/tb";
import {
    MdOutlinePendingActions,
    MdOutlineSubscriptions,
} from "react-icons/md";
import { BiCustomize, BiFoodMenu } from "react-icons/bi";
import { MdFoodBank } from "react-icons/md";
import companyLogo from "../../assest/icons/CompanyLogo.jpg";
import "../../styles/SiteLayout.css";
import {
    Layout,
    Menu,
    Button,
    theme,
    Space,
    Dropdown,
    message,
    Typography,
} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";
import { apiGET } from "../../utilities/apiHelpers";
const { Header, Sider, Content } = Layout;
// import { useAuthContext } from "../../hooks/useAuthContext";

const { Text, Link } = Typography;

const SiteLayout = () => {
    const { pathname } = useLocation();

    // const { subscription, subscriptionDispatch } = useSubscriptionContext();
    // console.log(subscription, "subscription123");
    // const { user, dispatch } = useAuthContext();
    // const userRole = user?.role;

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const roleTypeMapping = {
        Admin: "Admin",
        FSalesTeam: "Food Sales Team",
        FDistributor: "Food Distributor",
        FSalesIndividual: "Food Distributor Team",
        IndividualBroker: "Individual Broker",
        IndividualManufacturer: "ManufacturerTeam",
        Manufacturer: "Manufacturer",
        Broker: "Broker",
        IndividualBroker: "Broker Team",

    };
    const handleMenuClick = (e) => {
        localStorage.clear();
        message.info("Logout Successfully");
    };
    const handleLogoutClick = () => {
        handleMenuClick(); // Call handleMenuClick when clicking on "Logout" item
    };

    const activePath = pathname.startsWith("/addProduct") ? "/" : pathname;
    const productPath = pathname.startsWith("/viewproduct");
    console.log(productPath, "productPath");
    const loginUserData = {
        firstName: "John",
        lastName: "Doe",
        role: "Admin"
    }
    const items = [
        {
            label: "Logout",
            key: "1",
            icon: <LogoutOutlined />,
            onClick: handleLogoutClick,
        },
    ];
    const renderSubMenuItems = (submenuItems) => {
        return submenuItems.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
        ));
    };
    const menuProps = {
        items,
    };


    const getMenuItems = () => {
        return [
            {
                label: "Data Insights",
                key: "/overview",
                icon: <MdDashboardCustomize />,
            },
            {
                label: "Dashboard",
                key: "/dashboard-data-overview",
                icon: <DashboardOutlined />,
            },
            { label: "Schedule", key: "/schedule", icon: <BiFoodMenu /> },
            {
                label: "Profile",
                key: "/updateprofile",
                icon: <CgProfile />,
            },
        ];
    };

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                    // overflow: "auto",
                    height: "100vh",
                    position: "sticky",
                    top: 0,
                    left: 0,
                }}>
                <div className="demo-logo-vertical" />
                <div
                    className={collapsed ? "smallImageWrapper" : ""}
                    style={{
                        height: "auto",
                        // width: '100%',
                        borderRadius: 12,
                        margin: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
                        background: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        fontWeight: 500,
                        letterSpacing: 1.5,
                        fontSize: 20,
                    }}>
                    {collapsed ? (
                        <div src={companyLogo} className="text-xs">Job Portal</div>
                    ) : (
                        <div src={companyLogo} className="lg:text-xl text-base">Job Portal</div>
                    )}
                </div>
                <Menu
                    selectedKeys={[activePath]}
                    className="menu-scrollbar"
                    style={{ marginTop: 20, height: "69%", overflow: "auto" }}
                    theme="dark"
                    defaultSelectedKeys="/"
                    mode="inline"
                    items={getMenuItems()}
                    onClick={({ key }) => {
                        navigate(key);
                    }}
                />
            </Sider>
            <Layout className="layoutStart">
                <Header
                    style={{
                        padding: 0,
                        background: "var(--colorBgContainer)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Dropdown menu={menuProps}>
                        <Button style={{ border: "none", boxShadow: "none" }}>
                            <Space>
                                <UserOutlined />
                                {/* {user?.companyname || ""} */}
                                <Text
                                    type="secondary"
                                    style={{ fontSize: 12, marginLeft: 0 }}>
                                    (
                                    LoggedIn User
                                    )
                                </Text>
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </Header>
                {pathname.startsWith("/viewproduct")}
                <Content
                    style={{
                        margin:
                            pathname === "/dashboard-data-overview" ||
                                pathname === "/dashboard" ||
                                pathname === "/admin-overview"
                                ? 0
                                : productPath
                                    ? "20px"
                                    : "24px 16px",
                        // margin 0 for dashboard
                        padding: productPath ? 0 : 24,
                        // minHeight: 280,
                        minHeight: "50vh",
                        // background: colorBgContainer,
                        background:
                            pathname === "/dashboard-data-overview" ||
                                pathname === "/dashboard" ||
                                pathname === "/admin-overview"
                                ? "rgb(240, 242, 245)"
                                : productPath
                                    ? ""
                                    : colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default SiteLayout;
