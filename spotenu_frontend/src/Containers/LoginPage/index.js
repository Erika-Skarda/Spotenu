import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { routes } from "../Router/index";
//import {bindActionCreators} from "redux";
//import * as UserAction from "../../actions/userPage";
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
        
// const FormLogin = [
//     {
//         name:"email",
//         type:"email",
//         placeholder:"Email ou Nickname",
//         label:"Email ou Nickname",
//         required:true,
//         title: "Campo obrigatório",
//         //pattern:"[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$" 
//     },
//     {
//         name:"password",
//         type:"password",
//         placeholder:"Senha",
//         label:"Senha",
//         title:"Digite no mínimo 6 caracteres",
//         required:true,
//         pattern:"[A-Za-z0-9]{6,10}",
    
        
//     }
// ]

export default class LoginPage extends Component {
    constructor(props) {
    super(props)

    this.state =  {
        form: {
            email: "",
            password: "",
            showPassword: false,
        }
    }}
    // handleOnChangeForm = event => {
    //     const { name, value } = event.target;
    //     this.setState({ form: {...this.state.form,[name]:value}})
    // }
    // handleOnSubmit = event => {
    //     event.preventDefault()
    //     this.props.login(this.state.form.email, this.state.form.password)

    // }
    // handleClickShowPassword = () => {
    //     this.setState(state => ({ showPassword: !state.showPassword }));
    //   };
    
    handleFieldChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      onClickLogin = (event) => {
        event.preventDefault();
        const { email, password } = this.state
        this.props.doLogin(email, password)
      }
    
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };
    render () {
        const { email, password } = this.state;
        return (
            <LoginWrapper>
                <Image src={require("../../Assets/logo.png")}
                        alt="logo da Spotenu" />
                <DivTitle>
                    <Text>Entrar</Text>
                </DivTitle>
                <WrapperAdress onSubmit={this.onClickLogin}>  
                {/* <form onSubmit={this.handleOnSubmit}>
                    {FormLogin.map(info => {
                        return (
                        <div key={info.name}>
                         */}
                          
                            <TextFieldStyled   
                            //     name={info.name}
                            //     placeholder={info.placeholder}
                            //     type={info.type}
                            //     value={this.state.form[info.name] || ""}
                            //     required={info.required}
                            //     onChange={this.handleOnChangeForm}
                            //     label={info.label}
                            //     variant="outlined"
                            //     InputLabelProps = {{shrink:true}} pattern={info.pattern}
                            //     title={info.title}
                            //     style={{
                            //         margin: '5px',
                            //       }}

                            // />
                             
              onChange={this.handleFieldChange}
              name="email"
              type="email"
              label="E-mail"
              value={email}
              style={{
                margin: '15px',
              }}
              variant="outlined"
              InputLabelProps = {{shrink:true}}
              required={true}
              inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" }}
              
            />

            <TextFieldStyled 
              onChange={this.handleFieldChange}
              id="outlined-adornment-password"
              name="password"
              type={this.state.showPassword ? 'text' : 'password'}
              label="Senha"
              value={password}
              style={{ 
                  margin: '15px' ,
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
                        {/* </div>)
                        })} */}
                        <Button type="submit">Entrar</Button>
                {/* </form> */}
                </WrapperAdress> 
                <DivTitle>
                    <Text>Não possui cadastro? <strong onClick={this.props.redirectSignUp}>Clique aqui.</strong></Text>
                </DivTitle>
        </LoginWrapper> 
        )
    }       
}


// const mapDispatchToProps = (dispatch) => 
//     bindActionCreators(todoAction,dispatch)
       

    
      
// export default connect(null, mapDispatchToProps)(LoginPage)