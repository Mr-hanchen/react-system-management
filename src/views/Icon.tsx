import React, {Component, ReactNode} from "react";

export default class Icon extends Component<any, any>{
    public render(): ReactNode{
        return <>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref={this.props.type} />
            </svg>
        </>
    }
}