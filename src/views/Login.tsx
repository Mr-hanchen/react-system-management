import React, {Component, ReactNode} from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import css from '../assets/css/Login.module.scss';
import { LoginState } from '../plugin'
import { login } from '../mock';
import {LOGIN} from "../actions";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

@(connect() as any)
@(withRouter as any)
class Login extends Component<any, LoginState>{
    public static state: LoginState;
    public constructor(props: any) {
        super(props);

        this.state = {
            username: "",
            password: "",
            remember: true
        }
    }
    private onFinish(values: any): void{
        let _this = this;
        login(values).then(() => {
            message.success("登录成功!");
            _this.props.dispatch({ type: LOGIN, payload: values });
            _this.props.history.push("/");
        }).catch(() => {
            message.error("登录失败!");
        })
    }

    private onFinishFailed(): void{

    }

    private onValuesChange(changedValues: any): void{
        this.setState(changedValues);
    }

    public render(): ReactNode{
        return (
            <div className={css.login}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={(values) => { this.onFinish(values) }}
                    onFinishFailed={() => { this.onFinishFailed() }}
                    onValuesChange={(changedValues) => { this.onValuesChange(changedValues) }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Login;