import React, { Component } from 'react';
import styled from 'react-emotion';

const Button = styled.button`
  padding: 10px;
  margin: 5px;
`;

function sortByKey(array, key) {
  return array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? 1 : x > y ? -1 : 0;
  });
}

export default class EntryList extends Component {
  constructor(props) {
    super(props);

    this.state = { category: null };
  }

  render() {
    let entries = [];

    const news = this.props.data.news.edges.map(node => node.node);
    const tenders = this.props.data.tenders.edges.map(node => node.node);

    news.forEach((element) => {
      const elem = element;
      elem.title = element.frontmatter.title;
      elem.date = element.frontmatter.date;
      elem.category = 'news';
      entries.push(elem);
    });

    tenders.forEach((element) => {
      const elem = element;
      elem.category = 'tender';
      entries.push(elem);
    });

    entries = sortByKey(entries, 'date').filter((entry) => {
      if (this.state.category) {
        return entry.category === this.state.category ? entry : null;
      }
      return entry;
    });

    return (
      <div>
        <div>
          <Button onClick={() => this.setState({ category: null })}>Minden</Button>
          <Button onClick={() => this.setState({ category: 'news' })}>Hírek</Button>
          <Button onClick={() => this.setState({ category: 'tender' })}>Pályázatok</Button>
          <Button>Átláthatóság</Button>
        </div>
        <div>
          {entries.map(entry => (
            <h2>{entry.title}</h2>
          ))}
        </div>
      </div>
    );
  }
}
