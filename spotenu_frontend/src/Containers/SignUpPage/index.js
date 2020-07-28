import React, { Component } from "react"
import { connect } from"react-redux"
import { bindActionCreators } from "redux";
import * as UserAction from "../../Actions/userPage";
import { signUp }  from "../../Actions/userPage";
import * as RoleAction from "../../Actions/role"
import {
        Button, 
        SignUpWrapper, 
        Input, 
        Image, 
        Text, 
        DivTitle} from './styled';
import BackButton from "../GoBackButton/index";
import { changeRoleAction } from "../../Actions/role";

const FormSignUpOuvinte = [
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
const FormSignUpBanda = [
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
        name:"description_band",
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
handleRoleChange = event => {

    this.props.changeRoleAction(event.target.value);
    console.log(event.target.value)
};
handleOnChangeForm = event => {
    const { name, value } = event.target;
    this.setState({form: {...this.state.form, [name]:value}})
}
handleOnSubmit = event => {
    event.preventDefault()
    const {form} = this.state
    const user = this.props
    //this.form.role = this.props.changeRoleAction(this.props.selectedRole)
    if(form.password !== form.confirmPassword){
        alert("Senhas divergentes. Tente novamente")
        
    } else {

        if(this.props.selectedRole === "banda") {
            this.props.signUp(
                form.name, 
                form.email, 
                form.nickname,
                form.password, 
                this.props.selectedRole,
                form.description_band
            )
        } else {

            this.props.signUp(
                form.name, 
                form.email, 
                form.nickname,
                this.props.selectedRole,
                form.password
            
            )
        }
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

            <select  value = {this.props.selectedRole} onChange ={this.handleRoleChange}>
              <option value="" disabled selected>Escolha o seu tipo de cadastro</option>
                <option value="banda">Banda|Cantor(a)</option>
                <option value="ouvinte não pagante">Ouvinte Free</option>
                <option value="ouvinte pagante">Ouvinte Premium</option>
           </select>
            {this.props.selectedRole === "banda" && 
            
            <form onSubmit={this.handleOnSubmit}>
               {FormSignUpBanda.map(info => {
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
            
           </form>}
           {(this.props.selectedRole === "ouvinte não pagante" || this.props.selectedRole === "ouvinte pagante") && 
            
            <form onSubmit={this.handleOnSubmit}>
               {FormSignUpOuvinte.map(info => {
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
            
           </form>}
        </SignUpWrapper>
        )
    }       
}

 const mapStateToProps = state => ({
  
    user: state.user.userInfo,
    selectedRole: state.role && state.role.selectedRole
 })

const mapDispatchToProps = (dispatch) => {  
     //bindActionCreators(UserAction,dispatch)
    //bindActionCreators(RoleAction,dispatch)
    return {
     changeRoleAction: role => dispatch(changeRoleAction(role)),
     signUp:(name, email, nickname, password, role, description_band) => 
     dispatch(signUp(name, email, nickname, password, role, description_band))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage)