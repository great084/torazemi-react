import React from 'react';

const Article = (props) => {
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
      <input type="button" value="いいね" onClick={()=> props.countUp() } />
      <p> {props.count} </p>
    </React.Fragment>
  )
};

export default Article;