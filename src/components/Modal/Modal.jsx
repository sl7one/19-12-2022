import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class ModalItem extends React.Component {
  onPress = event => {
    if (event.code === 'Space') {
      this.props.onHide();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onPress);
  }

  render() {
    // console.log(this.props.hero);
    const { name, eye_color, gender, skin_color } = this.props.hero;

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Info about Hero
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{name}</h4>
          <p>Eye color : {eye_color}</p>
          <p>Gender : {gender}</p>
          <p>Skin color : {skin_color}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);
