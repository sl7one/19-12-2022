import React from 'react';

import SearchForm from 'components/Form/Form';
import HeroesList from 'components/HeroesList/HeroesList';
import { ModalItem } from './Modal/Modal';

export class App extends React.Component {
  state = {
    query: '',
    modalShow: false,
    hero: {},
  };

  onSubmit = query => {
    this.setState({ query });
  };

  setModalShow = hero => {
    this.setState({ modalShow: true, hero });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <SearchForm onSubmit={this.onSubmit} />
        <HeroesList query={this.state.query} onClick={this.setModalShow} />
        <ModalItem
          hero={this.state.hero}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </div>
    );
  }
}
