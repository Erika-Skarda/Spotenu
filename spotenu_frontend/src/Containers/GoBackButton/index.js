import React, { Component } from "react"
import {connect} from 'react-redux';
import { push, goBack } from "connected-react-router";
import {routes} from "../Router/index"
import { Divider } from '@material-ui/core';
import { WrapperTitle,
        WrapperHeader,
        Text,
        BackButtonIcon,
        Div} from './styled'

class BackButton extends Component {
    
render() {
    const { goBack } = this.props
    
    return (
            <WrapperHeader>
                <Div>{this.props.showButtonGoBack ?
                    <BackButtonIcon  src={require('../../Assets/voltar.svg')} onClick={goBack}/> : "" }
                </Div>
                <WrapperTitle>
                    <Text>{this.props.header}</Text>
                </WrapperTitle>
                
                    <Divider/> 
                
            </WrapperHeader>
    )
}
}
const mapDispatchToProps = dispatch => {
    return {
    goBack: () => dispatch(goBack())
    }
}

export default connect (null, mapDispatchToProps)(BackButton)