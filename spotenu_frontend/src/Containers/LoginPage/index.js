import React, { Component } from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as UserAction from "../../Actions/userPage";
import { LoginWrapper,
        Button, 
        TextFieldStyled, 
        WrapperAdress, 
        Text, 
        DivTitle, 
        Image } from "./styled";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

class LoginPage extends Component {
    constructor(props) {
    super(props)

    this.state =  {
        form: {
            emailOrNickname: "",
            password: "",
            showPassword: false,
        }
    }}
    
    handleFieldChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
        this.setState({form:""})
      };
    
      onClickLogin = (event) => {
        event.preventDefault();
        const { emailOrNickname, password } = this.state
        this.props.login(emailOrNickname, password)
      }
    
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };
    render () {
        const { emailOrNickname, password } = this.state;
        return (
            <LoginWrapper>
                <h1>Spotenu</h1>
                <Image src={require("../../Assets/logo.png")}
                        alt="logo da Spotenu" /> 
                        
                <DivTitle>
                    <Text>Entrar</Text>
                </DivTitle>
                <WrapperAdress onSubmit={this.onClickLogin}>  
                  <TextFieldStyled         
                      onChange={this.handleFieldChange}
                      name="emailOrNickname"
                      type="text"
                      label="E-mail ou Nickname"
                      value={emailOrNickname}
                      style={{
                        marginTop:'5px',
                        marginLeft:'auto',
                        marginRight:'auto'
                      }}
                      variant="outlined"
                      InputLabelProps = {{shrink:true}}
                      required={true}
                      
                      
                    />

                 <TextFieldStyled 
                      onChange={this.handleFieldChange}
                      id="outlined-adornment-password"
                      name="password"
                      type={this.state.showPassword ? 'text' : 'password'}
                      label="Senha"
                      value={password}
                      style={{ 
                        marginTop: '10px',
                        marginLeft:'auto',
                        marginRight:'auto'
                        }}
                      required={true}
                      variant="outlined"
                      InputLabelProps = {{shrink:true}}
                      InputProps={{
                        endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                          ),
                        }}
                      />
                        <Button type="submit" onClick={this.onClickLogin}>Entrar</Button>
                </WrapperAdress> 
                <DivTitle>
                    <Text>Não possui cadastro? <strong onClick={this.props.redirectSignUp}
                         style={{
                          color: '#F299CA',
                          }}>
                         Clique aqui.
                      </strong>
                    </Text>
                </DivTitle>
        </LoginWrapper> 
        )
    }       
}


const mapDispatchToProps = (dispatch) => 
  bindActionCreators(UserAction,dispatch)
       
     
export default connect(null, mapDispatchToProps)(LoginPage)