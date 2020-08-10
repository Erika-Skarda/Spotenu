import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { replace, push } from "connected-react-router";
import { routes } from "../../Router/index";
import {  getAlbum, setSelectedAlbum, deleteAlbum, redirectCreateAlbum} from '../../../Actions/albumPage';

import { AlbumContainer,
         AlbumWrapper} from './styled';
import { Img, Image,
         Button } from '../../../Style/theme';

class ManageAlbum extends Component {

    state = {
        // buttonToAdd: false,
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        const userRole = localStorage.getItem("userRole")
    
         if (token === null|| !token || userRole !== "banda") {
           this.props.goToLogin();
         }
    
        this.props.getAlbum();
    };
    // onClickButton = () => {
    //     this.setState({ buttonToAdd: !this.state.buttonToAdd })           
    // }

    handleAlbum = (albumId) => {
        // console.log(album)
        this.props.setSelectedAlbum(albumId);
        this.props.goToDetails();
      
    }
    handleLogout = () => {
        localStorage.clear();
        this.props.goToLogin();
      }
      render() {
          
          const { allAlbums } = this.props;
          const isLogged = localStorage.getItem("token") !== null;
        //   console.log(allAlbums)

    return (
      <Fragment>
        <AlbumContainer>
        
            {isLogged && <Img src={require("../../../Assets/log-out.svg")}
            alt="ícone de saída do app" onClick={this.handleLogout} />}

            <h1>Spotenu</h1>
            
            <Image src={require("../../../Assets/logo.png")}
            alt="logo da Spotenu" /> 

            <h2>Seus Álbuns</h2>

            <Img src={require("../../../Assets/mais.svg")}
            alt="ícone para ir para página de criar novo álbum" onClick={this.props.goToCreateAlbum} />

            <AlbumWrapper>

                <ul>
                    {allAlbums && allAlbums.map((album, index) => {
                        return (
                            <li key={index}>
                                <img src={album.photo} />
                                <p>{album.name}</p>
                               
                                <Button onClick={() => {this.handleAlbum(album.id_album)}}>Detalhes</Button>
                                <Button onClick={() => 
                                    {if(window.confirm("Deseja realmente deletar esse álbum")) 
                                    this.props.deleteAlbum(album.id)}}> Deletar
                                </ Button>

                            </li>

                        )
                    })}
                  
                </ul>
            </AlbumWrapper>
        </AlbumContainer>

      </Fragment>
    )

    }
    
}
    const mapStateToProps = state => ({
        
    allAlbums: state.album.allAlbums
  
  });
  
  const mapDispatchToProps = dispatch => {
      return {

          goToLogin: () => dispatch(replace(routes.login)),
          getAlbum: () => dispatch(getAlbum()),
          setSelectedAlbum: (albumId) => dispatch(setSelectedAlbum(albumId)),
          goToDetails: (id) => dispatch(push(routes.albumdetails)),

          deleteAlbum: (id) => dispatch(deleteAlbum(id)),
          goToCreateAlbum: () => dispatch(redirectCreateAlbum())
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(ManageAlbum)