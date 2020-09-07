import React, {Component} from 'react';
import axios from 'axios';
const API_URL = 'https://corona.lmao.ninja/v2/countries';

class TableImageComponent extends Component {
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
<div className="container">
<div className="rowtwo">
<div className="coltwo">
<table className="table">
<thead className="thead">
<tr>
    <th scope="col">Countries</th>
    <th scope="col">Active Cases</th>
    <th scope="col">Recovered</th>
    <th scope="col">Total Deaths</th>
    <th scope="col">Total Cases</th>
</tr>    
</thead>
<tbody className="tbody">
  { this.state.countries.map((con) => (
  <tr>
  <td>{con.country}</td>
  <td>{con.active}</td>
  <td>{con.recovered}</td>
  <td>{con.deaths}</td>
  <td>{con.cases}</td>
  </tr>
  ))}
</tbody>
</table>
</div>
<div className="coltwo">
    <div class="card">
        <button>Health Tips</button>
    </div>
    <div class="card">
            <button>Health Tips</button>
        </div>
</div>
</div>  
    </div>
        );
    }
}

export default TableImageComponent;