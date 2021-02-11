import React, {useState} from 'react';
import LikeButton from './LikeButton';

const Article = (props) => {
  const [isPublished, togglePublished] = useState(true)

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)} />
      <div>
        {/* <input type="button" value="いいね" onClick={()=> props.countUp() } /> */}
        {/* <p> {props.count} </p> */}
      </div>
      {/* <LikeButton count = {props.count} /> */}
    </React.Fragment>
  )
};

export default Article;