import React, { Component } from "react"
import { connect } from"react-redux"
import { bindActionCreators } from "redux";
import * as UserAction from "../../Actions/userPage";
import {
        Button, 
        SignUpWrapper, 
        Input, 
        Image, 
        Text, 
        DivTitle} from './styled';
import BackButton from "../GoBackButton/index"

const FormSignUp = [
    {
        name:"name",
        type:"text",
        placeholder:"Nome e sobrenome",
        label:"Nome",
        required:true,
        title: "Campo obrigatório",
        pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}"

    },
    {
        name:"email",
        type:"email",
        placeholder:"email@email.com",
        label:"E-mail",
        required:true,
        title: "Campo obrigatório",
        pattern:"[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$" 
    },
    {
        name:"nickname",
        type:"text",
        placeholder:"Nickname",
        label:"Nickname",
        required:true,
        title: "Campo obrigatório",
        pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}"

    },
    {
        name:"Descrição",
        type:"text",
        placeholder:"Descrição da banda",
        label:"Descrição",
        required:false,
    },
    {
        name:"password",
        type:"password",
        placeholder:"Mínimo 6 caracteres",
        label:"Senha",
        title:"Digite no mínimo 6 caracteres",
        required:true,
        pattern:"[A-Za-z0-9]{6,10}",
        
    },
    {
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirme a senha anterior",
        label:"Senha",
        title:"Digite no mínimo 6 caracteres",
        required:true,
        pattern:"[A-Za-z0-9]{6,10}",
        
    }
]
class SignUpPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {}

        }
    }
handleOnChangeForm = event => {
    const { name, value } = event.target;
    this.setState({form: {...this.state.form, [name]:value}})
}
handleOnSubmit = event => {
    event.preventDefault()
    const {form} = this.state
    const user = this.props
    if(form.cpf !== user.cpf){
        this.props.updateProfile(form.name, form.email, form.cpf)
         
    }else{
        alert("Usuário já cadastrado!")     
    }

    if(form.password !== form.confirmPassword){
        alert("Senhas divergentes. Tente novamente")
        
    }else{
        this.props.singUp(form.name, form.email, form.password, form.cpf)
    }
}

render() {
    return(
        <SignUpWrapper>
            <BackButton showButtonGoBack={true} />
           
             <Image src={require("../../Assets/logo.png")}
                        alt="logo da Spotenu"/>
             <DivTitle>
                <Text>Cadastrar</Text>
            </DivTitle>

            <form onSubmit={this.handleOnSubmit}>
               {FormSignUp.map(info => {
                   return (
                       <div key={info.name}>
                           <Input
                              style={{ 
                                marginTop: '10px',
                                marginLeft:'14px',
                                marginRight:'auto'
                                }}
                               name={info.name}
                               placeholder={info.placeholder}
                               type={info.type}
                               value={this.state.form[info.name] || ""}
                               required={info.required}
                               onChange={this.handleOnChangeForm}
                               pattern={info.pattern}
                               title={info.title}
                               label={info.label}
                               variant="outlined" 
                               InputLabelProps = {{shrink:true}}
                                />
                       </div>)
               })}
               <Button type="submit">Cadastrar</Button>
           </form>
        </SignUpWrapper>
        )
    }       
}

 const mapStateToProps = state => ({
  
    user: state.user.userInfo             
 })

const mapDispatchToProps = (dispatch) =>
bindActionCreators(UserAction,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage)