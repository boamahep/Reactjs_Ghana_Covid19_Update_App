import React, {Component} from 'react';
import axios from 'axios';
const API_URL = 'https://corona.lmao.ninja/v2/countries';

class BannerComponent extends Component {
    state = {
        gh: []
      }
      componentDidMount() {
        const url = `${API_URL}/gh`;
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({gh: data})
          console.log(this.state.gh)
         })
      }
    render() {
        return (
            <div className="banner">
            <div className="row">
            <div className="col">
                <h3>Active Cases</h3>
                <h4>{this.state.gh.active}</h4>
            </div>
            <div className="col">
                    <h3>Recovery Cases</h3>
                    <h4>{this.state.gh.recovered}</h4>
                </div>
                <div class="col">
                        <h3>Death Cases</h3>
                        <h4>{this.state.gh.deaths}</h4>
                    </div>
                    <div class="col">
                <h3>Total Cases</h3>
                <h4>{this.state.gh.cases}</h4>
            </div>
            </div>
                </div>
        );
    }
}

export default BannerComponent;