import React, { PureComponent } from 'react';
import './App.css';
import WithLoading from './components/hocs/WithLoading';
import Module from './components/Module';
import FactfindData from './data/factfind.json';

const EmptyWithLoading = WithLoading(null);

class App extends PureComponent {
  state = {
    loading: true,
    data: null
  };

  componentDidMount() {
    setTimeout(
      async () => {
        // const response = await fetch('model/factfind.json');
        // console.log(response);
        // if (!response.ok) {
        //   return false;
        // }
        // console.log(await response.json());
        // const data = await response.json();
        const data = FactfindData;
        this.setState({
          loading: false,
          data: data || {}
        });
      },
      2000
    );
  }

  render() {
    if (this.state.loading) {
      return <EmptyWithLoading isLoading={this.state.loading} />;
    }

    return (
      <Module
        modules={[this.state.data]}
      />
    );
  }
}

export default App;
