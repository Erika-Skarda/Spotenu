import React from "react";
import { connect } from "react-redux";
import { routes } from "../../Router/index";
import { push, replace } from "connected-react-router";
import { CreateAdminWrapper, 
         Image,
         DivTitle,
         Text,
         Input, 
         FormCreateAdmin,
         Button
          } from './styled';
import BackButton from "../../../Containers/GoBackButton";
import { signUp }  from "../../../Actions/userPage";

const FormSignUpAdmin = [
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
        placeholder:"Mínimo 10 caracteres",
        label:"Senha",
        title:"Digite no mínimo 10 caracteres",
        required:true,
        pattern:"[A-Za-z0-9]{10,20}",
        
    },
    {
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirme a senha anterior",
        label:"Senha",
        title:"Digite no mínimo 10 caracteres",
        required:true,
        pattern:"[A-Za-z0-9]{10,20}",
        
    }
]

class CreateAdmin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            adminForm: {
                // name,
                // email,
                // nickname,
                // password,
                // confirmPassword
            }
        }
    }
    componentDidMount() {
        const { goToLogin } = this.props;
        const token = localStorage.getItem("token");
        if(token === null){
            goToLogin();
        };
    };
    handleOnChangeForm = (event) =>{
        const { name, value } = event.target;
        this.setState({adminForm: {...this.state.adminForm, [name]: value}})
    };
    handleOnSubmit = (event) =>{
        event.preventDefault();
        const { adminForm } = this.state
        if(adminForm.password !== adminForm.confirmPassword){
            
            alert("Senhas divergentes. Tente novamente")
            
        } else {
            this.props.createAdmin(
                adminForm.name, 
                adminForm.email, 
                adminForm.nickname,
                adminForm.password
            )
        this.props.createAdmin(this.state.adminForm)
        this.setState({adminForm: ""});
        }
    }
    render() {
      return (
        <CreateAdminWrapper>

            <BackButton showButtonGoBack={true} />
            <h1>Spotenu</h1>
            <Image src={require("../../../Assets/logo.png")}
            alt="logo da Spotenu" /> 

             <DivTitle>
                <Text>Novo Admin</Text>
            </DivTitle> 

            <FormCreateAdmin onSubmit={this.handleOnSubmit}>
            {FormSignUpAdmin.map(info => {
                   return (
                       <div key={info.name}>
                           <Input
                              style={{ 
                                marginTop: '10px',
                                marginLeft:'auto',
                                marginRight:'auto'
                                }}
                               name={info.name}
                               placeholder={info.placeholder}
                               type={info.type}
                               value={this.state.adminForm[info.name] || ""}
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
            
           </FormCreateAdmin>                  
        </CreateAdminWrapper>
        
        );
    }
}
// const mapStateToProps = (state) =>{
//     return{
//         allGenres: state.genre.allGenres
//     }
// }
const mapDispatchToProps = dispatch =>{
    return{
        goToLogin: () => dispatch(replace(routes.login)),
        createAdmin: (name, email, nickname, password) => dispatch(signUp((name, email, nickname, password)))
    }
  }
  export default connect (null, mapDispatchToProps) (CreateAdmin);