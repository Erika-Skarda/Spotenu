import React, {Component, Fragment} from "react"
import {connect} from 'react-redux';
import { push, goBack } from "connected-react-router";
import {routes} from "../Router/index"
import { Divider } from '@material-ui/core';
import { WrapperTitle,
        WrapperHeader,
        Text,
        BackButtonIcon} from './styled'

class BackButton extends Component {
    
render() {
    const {goBack} = this.props
    
    return (

        <Fragment>

            <WrapperTitle>
            <WrapperHeader>
                <Text>{this.props.header}</Text>
            </WrapperHeader>
            
                <div>{this.props.showButtonGoBack ? <BackButtonIcon src={require('../../Assets/voltar.svg')} onClick={goBack}/> : "" }</div>
                <Divider/>
            
            
            </WrapperTitle>
           
        </Fragment>

    )
}
}
const mapDispatchToProps = dispatch => {
    return {
    goBack: () => dispatch(goBack())
    }
}

export default connect (null, mapDispatchToProps)(BackButton)