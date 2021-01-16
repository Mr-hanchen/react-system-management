import React, {Component, ReactNode} from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import loadable from "@loadable/component";
import logo from './logo.png';
import './App.css';
import {Button, Layout, Menu, Space} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import {LOGOUT} from "./actions";
import Icon from './views/Icon';
import { logout, getMenus } from './mock';

const { Header, Sider, Content } = Layout;

const mapStateToProps = (state: any) => {
    return {
        username: state.login.username
    }
}

interface Menus{
    name: string;
    link: string;
    icon: string;
}

interface AppState{
    collapsed: boolean;
    menus: Array<Menus>;
}

@(connect(mapStateToProps) as any)
@(withRouter as any)
class App extends Component<any, AppState>{
    public constructor(props: any) {
        super(props);

        this.state = {
            collapsed: false,
            menus: []
        }
    }

    private  toggle(): void{
        let _this = this;
        _this.setState({
            collapsed: !_this.state.collapsed,
        });
    };

    private toLogout(): void{
        let _this = this;
        logout().then(() => {
            _this.props.dispatch({ type: LOGOUT });
            _this.props.history.push("/login");
        });
    }

    private getMenu(): void{
        let _this = this;
        getMenus().then((res: any) => {
            _this.setState({
                menus: res.data.message
            });
        });
    }

    public componentDidMount(): void{
        this.getMenu();
    }

    public render(): ReactNode{
        const { username } = this.props;
        const { menus } = this.state;
        return (
            <Layout>
                <Sider className={"site-layout-sider"} trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className={"logo"}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <Menu mode="inline" defaultSelectedKeys={['0']}>
                        {
                            menus.map((menu: Menus, index: number) => {
                                return <Menu.Item key={index} icon={<Icon type={menu.icon} />}>
                                    <Link to={menu.link}>
                                        { menu.name }
                                    </Link>
                                </Menu.Item>
                            })
                        }
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background header" style={{ padding: "0 10px" }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => { this.toggle() },
                        })}
                        <Space>
                            <span>欢迎 { username }</span>
                            <Button danger onClick={() => { this.toLogout() }}>
                                退出
                            </Button>
                        </Space>
                    </Header>
                    <Content className="site-layout-background content">
                        <Switch>
                            <Route exact path={"/"} component={loadable(() => import("./views/Home"))} />
                            <Route exact path={"/order"} component={loadable(() => import("./views/Order"))} />
                            <Route exact path={"/user"} component={loadable(() => import("./views/User"))} />
                            <Route exact path={"/system"} component={loadable(() => import("./views/System"))} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default App;
