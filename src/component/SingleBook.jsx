import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleChange = () => {
    this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
  };

  render() {
    const cardClass = this.state.selected ? "border border-danger" : "";
    return (
      <Card className={cardClass} onClick={() => this.handleChange()}>
        <Card.Img variant="top" style={{ height: "350px", objectFit: "contain" }} src={this.props.book.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.price}$</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
