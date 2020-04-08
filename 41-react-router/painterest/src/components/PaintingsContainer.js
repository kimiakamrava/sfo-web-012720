import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PaintingsList from './PaintingsList';
import PaintingsNew from './PaintingsNew';
import PaintingShow from './PaintingShow';

class PaintingsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      paintings: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/paintings/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          paintings: data.slice(0, 20).sort((a, b) => b.votes - a.votes),
        });
      });
  }

  handleDelete(id) {
    const updatedState = this.state.paintings.filter((pntg) => pntg.id !== id);

    this.setState({ paintings: updatedState });
  }

  handleVote(id) {
    const updatedPaintings = this.state.paintings
      .map((pntg) => {
        if (pntg.id === id) {
          return Object.assign({}, pntg, { votes: pntg.votes + 1 });
        } else {
          return pntg;
        }
      })
      .sort((a, b) => b.votes - a.votes);

    this.setState((state) => {
      return { paintings: updatedPaintings };
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/paintings/new" component={PaintingsNew} />
          <Route
            exact
            path="/paintings/:slug"
            render={(routerProps) => {
              const slug = routerProps.match.params.slug;
              const painting = this.state.paintings.find((painting) => {
                return painting.slug === slug;
              });

              return painting ? <PaintingShow painting={painting} /> : 'Loading...';
            }}
          />
          <Route
            path="/paintings"
            render={() => {
              return <PaintingsList paintings={this.state.paintings} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default PaintingsContainer;
