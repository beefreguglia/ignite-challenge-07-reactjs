import React, { Component } from 'react';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    scriptEl.setAttribute('repo', 'loadingGabriel/spacetraveling');
    scriptEl.setAttribute('issue-term', 'url');
    scriptEl.setAttribute('theme', 'github-light');
    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <div ref={this.commentBox} />
      </div>
    );
  }
}
