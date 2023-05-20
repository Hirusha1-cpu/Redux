import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import { selectById } from '../store/reducers/postSlice';
import { selectByIdUsers } from '../store/reducers/userSlice';
import { selectAllComments, selectByIdComments } from '../store/reducers/commentSlice';

// const Post = ({ele}) => {
//     console.log('post component : ', ele.id);
//   return (
//     <div>
//         <h1>{ele.title}</h1>
//         <p>{ele.body}</p>
//     </div>
//   )
// }
const Post = ({postId}) => {
    console.log('post component : ', postId);
    const post = useSelector((store=>selectById(store, postId)))
    const user = useSelector((store)=> selectByIdUsers(store, post.userId))
    const comments = useSelector((store)=> selectAllComments(store, post.userId))
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <h6>{user?.name}</h6>
        {/* <h6>{comments?.comments}</h6> */}
    </div>
  )
}

export default Post // memo eken re render e=wena eka nawatinawa memo(Post)