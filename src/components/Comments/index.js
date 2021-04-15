import React, { Component } from 'react';

import styles from './comments.module.scss';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    scriptEl.setAttribute('repo', 'jcobarreto/spacetraveling');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('label', 'blog-comment');
    scriptEl.setAttribute('theme', 'github-dark');
    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    // eslint-disable-next-line react/jsx-filename-extension
    return <div ref={this.commentBox} className={styles.commentBox}></div>;
  }
}
