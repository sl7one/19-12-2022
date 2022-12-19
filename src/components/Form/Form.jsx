import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchForm extends React.Component {
  state = {
    query: '',
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  onChange = event => {
    const res = event.target.value;
    this.setState({ query: res });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Input starwars heroes</Form.Label>
          <Form.Control
            onChange={this.onChange}
            value={this.state.query}
            type="text"
            placeholder="Search..."
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default SearchForm;
