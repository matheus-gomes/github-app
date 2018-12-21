import React from "react"

export default class Carregando extends React.Component {
    
    render() {
        const { carregando } = this.props;
        if(!carregando) return <></>
        return <div>Carregando</div>
    }
}