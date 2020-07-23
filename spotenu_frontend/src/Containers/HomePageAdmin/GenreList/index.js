import React, {Component} from 'react';
import { connect } from "react-redux";
import { goBack, replace } from "connected-react-router";
import { routes } from '../../../Containers/Router/index';
import { getGenres } from "../../../Actions/genrePage"

class GenreList extends Component{
    state = {
  
        
      }

    componentDidMount() {
      const token = localStorage.getItem('token')
  
      if (token === null) {
        this.props.goToLogin();
      }
      this.props.getGenres();
    }
    render() {
    

        return (

            <select value={this.props.allGenres} >
                <option value="" >
                    Selecione o gênero
                </option>
                {this.props.allGenres.map((genre) => {
                 return (
                    <option value={genre} key={genre}>
                        {genre.music_genre}
                    </option>
                );
                })}
          </select>
        )
    };

    
}
const mapStateToProps = state => ({
    allGenres: state.genre.allGenres
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      getGenres: () => dispatch(getGenres()),
      goToLogin: () => dispatch(replace(routes.login)),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(GenreList)