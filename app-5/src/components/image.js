import React, {Component} from 'react'

export default class Image extends Component {

    render() {

        return (
            <div>
                <img src={this.props.groot} />
                <h1>I AM GROOT</h1>
            </div>
        )
    }
}