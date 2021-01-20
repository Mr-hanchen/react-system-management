import React, {Component, ReactNode} from 'react';
import { Tag, Space, Form, Select, Input, Table } from 'antd';
import { getArea } from '../mock';

import css from '../assets/css/Order.module.scss';

interface OrderState{
    area: Array<any>;
}

class Order extends Component<any, OrderState>{
    public state: Readonly<OrderState>;

    public constructor(props: any) {
        super(props);

        this.state = {
            area: []
        }
    }

    private getSelectOption(): void{
        let _this = this;
        getArea().then((res: any) => {
            _this.setState({
                area: res.data.message
            });
        });
    }

    public componentDidMount(): void{
        this.getSelectOption();
    }

    public render(): ReactNode{
        let { area } = this.state;
        return (
            <div className={css.order}>
                <div className={css.inquire}>
                    <span className={css.condition}>查询条件:</span>
                    <Form layout={"inline"}>
                        <Form.Item name={"name"} label={"姓名"}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={"area"} label={"地区"}>
                            <Select placeholder={"请选择地区"} style={{ width: 200 }}>
                                {
                                    area.map(item => {
                                        return <Select.Option key={item.sign} value={item.sign} children={item.name} />
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item name={"amount"} label={"交易额"}>
                            <Select placeholder={"请选择交易额"} style={{ width: 200 }}>
                                <Select.Option value={"1000以下"} children={"1000以下"} />
                                <Select.Option value={"1000-5000"} children={"1000-5000"} />
                                <Select.Option value={"5000-10000"} children={"5000-10000"} />
                                <Select.Option value={"10000-20000"} children={"10000-20000"} />
                                <Select.Option value={"20000-50000"} children={"20000-50000"} />
                                <Select.Option value={"50000以上"} children={"50000以上"} />
                            </Select>
                        </Form.Item>
                        <Form.Item name={"type"} label={"类型"}>
                            <Select placeholder={"请选择交易额"} style={{ width: 200 }}>
                                <Select.Option value={"1000以下"} children={"1000以下"} />
                                <Select.Option value={"1000-5000"} children={"1000-5000"} />
                                <Select.Option value={"5000-10000"} children={"5000-10000"} />
                                <Select.Option value={"10000-20000"} children={"10000-20000"} />
                                <Select.Option value={"20000-50000"} children={"20000-50000"} />
                                <Select.Option value={"50000以上"} children={"50000以上"} />
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
                <div className={css.container}>
                    <Table>
                        <Table.Column title={"姓名"} />
                        <Table.Column title={"地区"} />
                        <Table.Column title={"交易额"} />
                        <Table.Column title={"类型"} />
                        <Table.Column title={"产品"} />
                    </Table>
                </div>
            </div>
        )
    }
}

export default Order;