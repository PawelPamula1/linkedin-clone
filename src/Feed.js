import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a post" />
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
          <InputOption title="Video" Icon={OndemandVideoIcon} color="#7FC15E" />
          <InputOption title="Event" Icon={EventIcon} color="#E7A33E" />
          <InputOption title="Write Article" Icon={ArticleIcon} color="#FC9295" />
        </div>
      </div>
      {posts.map((post) => (
        <Post name={post.name} description={post.description} message={post.message} />
      ))}
      <Post name="Elon Musk" description="testowanie" message="Siemanko, kupiłem wszystkie bitkojny na świecie" />
    </div>
  );
};

export default Feed;
