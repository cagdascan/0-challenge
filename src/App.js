import React from 'react';
import { Layout, Row, Col } from 'antd';
import Logo from './components/Logo';
import MenuIcon from './components/MenuIcon';
import LocationFilter from './components/LocationFilter';
import Map from './components/Map';
import './App.css';
import markers from './data';

const { Header, Content } = Layout;

class App extends React.Component {
  state = {
    markers,
    filterValue: '',
    filterVisible: true,
  };

  componentWillMount() {
    this.onResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const width = window.innerWidth;
    if (width > 768) {
      this.setState((state) => ({
        ...state,
        filterVisible: true,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        filterVisible: false,
      }));
    }
  };

  handleInput = (e) => {
    const { value } = e.currentTarget;
    const filterValue = value.charAt(0).toUpperCase() + value.slice(1);

    this.setState((state) => {
      state.markers.forEach((item) => {
        const marker = item;

        if (filterValue && marker.name.startsWith(filterValue)) {
          marker.matched = filterValue;
          const remaining = marker.name.split(filterValue)[1];
          marker.remaining = remaining;
        } else {
          marker.matched = '';
          marker.remaining = marker.name;
        }
      });

      return {
        markers: state.markers,
        filterValue,
      };
    });
  };

  toggleFilter = () => {
    this.setState((state) => ({
      ...state,
      filterVisible: !state.filterVisible,
    }));
  };

  render() {
    return (
      <Layout>
        <Header>
          <Logo />
          <MenuIcon
            toggleFilter={this.toggleFilter}
            filterVisible={this.state.filterVisible}
          />
        </Header>
        <Layout>
          <Content>
            <Row>
              {this.state.filterVisible && (
                <Col sm={6}>
                  <LocationFilter
                    markers={this.state.markers}
                    handleInput={this.handleInput}
                    filterValue={this.state.filterValue}
                  />
                </Col>
              )}
              <Col sm={this.state.filterVisible ? 18 : 24}>
                <Map
                  markers={this.state.markers}
                  filterValue={this.state.filterValue}
                />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
