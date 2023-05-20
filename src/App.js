import React, { useRef } from "react";
import {
  getPost,
  selectAll,
  selectAllPost,
  selectById,
  selectEntities,
  selectIds,
  selectPostLoading,
  selectTotal,
  updatePost,
} from "./store/reducers/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Component/Post";
import { getUsers } from "./store/reducers/numberSlice";
import { getUsers1 } from "./store/reducers/userSlice";
import { getComments } from "./store/reducers/commentSlice";
//import { increment,decrement, numberSelector } from './store/reducers/numberSlice'

const App = () => {
  const postTitleRef = useRef();
  const postIdRef = useRef();
  const dispatch = useDispatch();
  const postLoading = useSelector(selectPostLoading);
  const selectPost = useSelector(selectIds);
  console.log(selectPost);
  // const postObj = useSelector(selectAllPost)
  // const number = useSelector(numberSelector)
  //const selectPost = useSelector((store)=> selectById(store,5))
  //const selectPost = useSelector(selectAll);
  //console.log(postObj);
  return (
    <div>
      {/* {postObj.loading === "pending" && <h1>Loading .....</h1>}  */}
      {/* <h1>{number}</h1> */}
      {/* <button onClick={()=>dispatch(increment('hirusha',4,'colombo'))}>increment</button>
    <button onClick={()=>dispatch(decrement(3))}>decrement</button> */}
    <button onClick={() => dispatch(getPost())}>get post Data</button>
    <button onClick={() => dispatch(getUsers1())}>get user Data</button>
    <button onClick={() => dispatch(getComments())}>get Comments</button>
      {postLoading !== "successfull" ? <h1>Loading....</h1> : null}
      <hr />
      <h2>Change Post</h2>
      <input placeholder="post title" ref={postTitleRef} />
      <br />
      <input placeholder="post id" ref={postIdRef} />
      <br />
      <button
        onClick={() =>
          dispatch(
            updatePost({
              id: Number(postIdRef.current.value),
              changes: {
                title: postTitleRef.current.value,
              },
            })
          )
        }
      >
        Submit
      </button>
      {/* {selectPost.map((ele) => (
        <Post ele={ele} key={ele.id} />
      ))} */}
      {selectPost.map((postId) => (
        <Post postId={postId} key={postId} />
      ))}
    </div>
  );
};

export default App;
