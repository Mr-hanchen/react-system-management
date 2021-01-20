import React, {Component, ReactNode} from "react";
import { Typography } from 'antd';
import css from '../assets/css/Home.module.scss';
import * as eCharts from 'echarts';
import { dailySummary } from '../mock';

interface HomeState{

}

class Home extends Component<any, HomeState>{
    public state: Readonly<HomeState>;
    public constructor(props: any){
        super(props);

        this.state = {

        }
    }

    private init(data: Array<any>): void{
        [1, 2, 3, 4].map((item, index) => {
            let myChart = eCharts.init(document.getElementById("pie" + item) as HTMLElement);
            let option = {
                title: {
                    text: data[index].name,
                    top: "center",
                    left: "center"
                },
                tooltip: {},
                series: [
                    {
                        name: data[index].name,
                        type: 'pie',
                        radius: ['50%', '70%'],
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        },
                        data: data[index].data
                    }
                ]
            };
            myChart.setOption(option);
        });
    }

    public componentDidMount(): void{
        let _this = this;
        dailySummary().then((res: any) => {
            _this.init(res.data.message);
        });
    }

    public render(): ReactNode{
        return (
            <div className={css.home}>
                <div className={css.item}>
                    <Typography.Title level={4}>每日概括</Typography.Title>
                    <div className={css.box}>
                        {
                            [1, 2, 3, 4].map(item => {
                                return <div key={item} id={"pie" + item} className={css.daily} />
                            })
                        }
                    </div>
                </div>
                <div className={css.item}>
                    <Typography.Title level={4}>产品进度</Typography.Title>
                    <div>

                    </div>
                </div>
                <div className={css.item}>
                    <Typography.Title level={4}>客户进度</Typography.Title>
                </div>
                <div className={css.item}>
                    <Typography.Title level={4}>今日待办</Typography.Title>
                </div>
            </div>
        )
    }
}

export default Home;