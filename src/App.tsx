import React, {FC, useState} from 'react';
import './App.css';
import PostsComponent from "./components/posts/PostsComponent";
import CommentsComponent from "./components/components/CommentsComponent";
import {getAllCommentsOfSinglePost} from "./services/jpg.api.service";
import {ICommentModel} from "./models/ICommentModel";

 const App:FC =()=> {
     const [comments,setcomments] = useState<ICommentModel[]>([]);
     const lift=(postId:number) =>{
         getAllCommentsOfSinglePost(postId).then(({data}) => {
            setcomments(data)
         })
     }
  return (
    <div className="App">
        <div className={'posts'}><PostsComponent lift={lift}/></div>
        <div className={'comments'}><CommentsComponent comments={comments}/></div>
    </div>
  );
}

export default App;
