import React, { Component } from 'react'

export class ClassCompo extends Component {
    constructor(props) {
        super(props);
        const demo = {
            name: "ram"
        }
        console.log(demo);
    }
    render() {
        return (
            <>
                <div className='parent'>
                    {this.props.data.state.empdata.map((item) => {
                        return (
                            <div id="card">
                                <h5>Name:{item.name} | Department:{item.dept} | Rating:{item.rating}</h5>
                            </div>
                        )
                    })}
                </div>
                <button onClick={this.props.toggleFunc} className='submitbut'>Go Back</button>
            </>
        )
    }
}

export default ClassCompo