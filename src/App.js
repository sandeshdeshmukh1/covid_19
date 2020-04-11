import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { Cards, CountrySelector, Charts } from './components';
import { fetchData } from './api/index';

import { Layout, Menu } from 'antd';

const { Header, Footer, Content } = Layout;



class App extends Component {

  state = {
    data: {},

  }
  async componentDidMount() {
    const fetchData1 = await fetchData();

    this.setState({ data: fetchData1 })


  }

  render() {
    const data = this.state;

    return (
      <div className="container-fluid">
        <Layout>
          <Header>
            <nav class="navbar navbar-light bg-light">
              <span class="navbar-brand mb-0 h3" style={{ marginLeft: '36vw' }}>Covid-19 Cases In The World </span>
            </nav>
          </Header>
          <Content>
            <Cards data={data}></Cards>
            <Charts></Charts>
          </Content>
          <Footer style={{ marginTop: '5rem' }}>
            <nav class="navbar fixed-bottom navbar-light bg-light" >
              <a class="navbar-brand" href="#">@Sandeshdeshmukh1</a>
            </nav>
          </Footer>
        </Layout>



      </div >
    );
  }
}



export default App;
