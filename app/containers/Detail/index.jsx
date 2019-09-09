import React from 'react'

class Detail extends React.Component{
    render(){
        return (
            <div>
                <p>This is detail {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Detail