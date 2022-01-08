import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Feed = () => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Start a post" />
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
          <InputOption title="Video" Icon={OndemandVideoIcon} color="#7FC15E" />
          <InputOption title="Event" Icon={EventIcon} color="#E7A33E" />
          <InputOption title="Write Article" Icon={ArticleIcon} color="#FC9295" />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
      ))}
      <Post name="Elon Musk" description="testowanie" message="Siemanko, kupiłem wszystkie bitkojny na świecie" />
    </div>
  );
};

export default Feed;
