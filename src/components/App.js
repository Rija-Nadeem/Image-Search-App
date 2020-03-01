import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
	//Promise based syntax
	// onSearchSubmit(term){
	// 	axios.get('https://api.unsplash.com/search/photos',{
	// 		params: {query:term},
	// 		headers: {
	// 			Authorization: 'Client-ID 0975ff0e02458ed35bad943b56504e4d20c757f09e5519ad585dd7026761e284' 
	// 		}
	// 	}).then( (res)=>{
	// 		console.log(res.data.results);
	// 	} );
	// }

	state={img:[]}

		//Async await based syntax
	onSearchSubmit = async (term)=>{
		const res= await axios.get('https://api.unsplash.com/search/photos',{
			params: {query:term},
			headers: {
				Authorization: 'Client-ID 0975ff0e02458ed35bad943b56504e4d20c757f09e5519ad585dd7026761e284' 
			}
		});
		this.setState({img:res.data.results});
	};

    render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar WhenSubmitted={this.onSearchSubmit}/>
			<ImageList images={this.state.img}/>
            Found: {this.state.img.length} images
        </div>

   	 );
	}
}

export default App;