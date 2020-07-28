import React from "react";
import { connect } from "react-redux";
import { routes } from "../../Router/index";
import { push, replace } from "connected-react-router";
import { createGenre } from '../../../Actions/genrePage';
import { CreateGenreWrapper, 
         Image,
         DivTitle,
         Text,
         TextFieldStyled, 
         FormCreateGenre,
         Button
          } from './styled';
import BackButton from "../../../Containers/GoBackButton";

class CreateGenre extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            genreForm: ""
        }
    }
    componentDidMount() {
        const { goToLogin } = this.props;
        const token = localStorage.getItem("token");
        if(token === null){
            goToLogin();
        };
    };
    handleInputChange = (event) =>{
        const { name, value } = event.target;
        this.setState({genreForm: {...this.state.genreForm, [name]: value}})
    };
    handleSubmit = (event) =>{
        event.preventDefault();
  
        this.props.createGenre(this.state.genreForm)
        this.setState({genreForm: ""});
    };
    render() {
      return (
        <CreateGenreWrapper>

            <BackButton showButtonGoBack={true} />
            <h1>Spotenu</h1>
            <Image src={require("../../../Assets/logo.png")}
            alt="logo da Spotenu" /> 

             <DivTitle>
                <Text>Novo Gênero</Text>
            </DivTitle> 
            <FormCreateGenre onSubmit={this.handleSubmit}>
                <TextFieldStyled         
                    onChange={this.handleInputChange}
                    name="nome"
                    type="text"
                    label="Nome"
                    value={this.state.genreForm.name}
                    style={{
                    marginTop:'5px',
                    marginLeft:'auto',
                    marginRight:'auto'
                    }}
                    variant="outlined"
                    InputLabelProps = {{shrink:true}}
                    required={true}
                    pattern="[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$"
                    title="Nome inválido"
                    required
                
                />
                <Button type="submit" onSubmit={this.handleSubmit}>Criar</Button>
            </FormCreateGenre>                  
        </CreateGenreWrapper>
        
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
        createGenre: (genre) => dispatch(createGenre(genre))
    }
  }
  export default connect (null, mapDispatchToProps) (CreateGenre);