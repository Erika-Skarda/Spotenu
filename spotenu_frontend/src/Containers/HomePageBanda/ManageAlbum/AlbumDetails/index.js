import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace, push } from "connected-react-router";
import { routes } from "../../../Router/index";
import { getMyMusics, createMusic } from "../../../../Actions/musicPage"
import { Button, Img, TextFieldStyled } from "../../../../Style/theme"
import { Container,
         Header,
         Song, 
         ContainerAddSong,
         FormCreateMusic} from './styled'

 class AlbumDetails extends Component {
    state = {
   
        buttonToAdd: false,
        musicForm:"",
     
    };
    handleInputChange = (event) =>{
        const { name, value } = event.target;
        this.setState({musicForm: {...this.state.musicForm, [name]: value}})
    };
    handleSubmit = (event) =>{
        event.preventDefault();
  
        this.props.createMusic(this.state.musicForm.nome)
        this.setState({musicForm: ""});
    };
    
    componentDidMount() {
        const token = localStorage.getItem('token')
        const userRole = localStorage.getItem("userRole")
    
         if (token === null|| !token || userRole !== "banda") {
           this.props.goToLogin();
         }
    
        this.props.getMyMusics();
    };

        
    onClickButton = () => {
        this.setState({ buttonToAdd: !this.state.buttonToAdd })           
    }

  
    
    render() {

        const { myMusics } = this.props
        console.log(myMusics)

      return(
        <Container>
            <Header>
                <h1>Todas suas músicas</h1> 
              
                <Img 
                    src={require("../../../../Assets/mais.svg")}
                    alt="ícone para ir para página de criar novo álbum"
                    onClick={this.onClickButton} 
                    >
                </Img>

            </Header>

            {this.state.buttonToAdd && (
            <ContainerAddSong>
                <FormCreateMusic onSubmit={this.handleSubmit}>
                    <TextFieldStyled         
                        onChange={this.handleInputChange}
                        name="nome"
                        type="text"
                        label="Nome"
                        value={this.state.musicForm.name}
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
                </FormCreateMusic> 
            </ContainerAddSong>
            )}       

            {myMusics && myMusics.map((song, index) => {
                return (
                    <div key={index}>
                        <Song><p>{song.music}</p> 
                        {/* <i class="fas fa-trash" onClick={() => this.d(song.id)}></i> */}
                        </Song> 
                    </div>
                )
             })}

        </Container>
    )
        
    }
}
const mapStateToProps = state => ({
        
    myMusics: state.music.myMusics
  
  });
  
  const mapDispatchToProps = dispatch => {
      return {

          goToLogin: () => dispatch(replace(routes.login)),
          getMyMusics: () => dispatch(getMyMusics()),
          createMusic: (name) => dispatch(createMusic())
         
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails)