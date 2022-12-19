import React from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

// поля name, gender, birth_year, hair_color и skin_color

class HeroesList extends React.Component {
  state = {
    collections: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.getHeroes(this.props.query);
    }
  }

  getHeroes = async query => {
    try {
      const response = await axios.get(
        `https://swapi.py4e.com/api/people/?search=${query}`
      );
      // console.log(response.data.results);
      this.setState({ collections: response.data.results });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  render() {
    const { collections } = this.state;
    return (
      <ListGroup variant="flush">
        {collections.map(item => (
          <ListGroup.Item
            key={item.name}
            onClick={() => this.props.onClick(item)}
          >
            <p>{item.name}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default HeroesList;
