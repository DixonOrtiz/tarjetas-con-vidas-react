import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.cardValorHeader = 'card-header bg-danger';

    this.state = {
      vidas: 0,
    };
  }

  sumar = () => {
    let vidasMasUno = this.state.vidas + 1;
    this.setState({
      vidas: vidasMasUno,
    });
  };

  restar = () => {
    if (this.state.vidas > 0) {
      let vidasMenosUno = this.state.vidas - 1;
      this.setState({
        vidas: vidasMenosUno,
      });
    }
  };

  render() {
    if (this.props.nombre === 'Luigi') this.cardValorHeader = 'card-header bg-success';

    return (
      <div className="col-md-3">
        <div className="card mt-4">
          <div className={this.cardValorHeader}>
            <h3 class="text-white">{this.props.nombre}</h3>
            <span className="badge badge-pill badge-danger ml-2">{}</span>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.props.desc}</li>
              <li className="list-group-item">
                <mark>Vidas:</mark>
                <span className="ml-2">
                  <mark>{this.state.vidas}</mark>
                </span>
              </li>
              <li className="list-group-item">
                <button onClick={this.sumar} class="btn btn-sq-xs btn-success ml-2">
                  +1
                </button>
                <button onClick={this.restar} class="btn btn-sq-xs btn-danger ml-2">
                  -1
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
