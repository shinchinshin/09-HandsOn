import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  const { post, index, checkTodo, deleteTodo } = props

  return (
    <div className={post.isDone ? classes.done : classes.do}>
      <div className="flex justify-between content-center items-center pl-4 pr-7" onClick={() => checkTodo(index)}>
        {/* <label>
          <input className="mx-4 " aria-label="an appropriate label" type="checkbox"></input>
        </label> */}
        <p>{post.todo}</p>
      </div>

      <div
        className="flex bg-red-300  hover:bg-red-500 justify-center text-center w-10 h-10 text-white justify-left rounded-full"
        onClick={() => deleteTodo(index)}
      >
        <p className="mt-2">&#10005;</p>
      </div>
    </div>
  )
}

export default Post
