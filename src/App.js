import React from 'react'
import './App.css'
import Post from './components/Post.jsx'
import { useState } from 'react'

const initPosts = [
  {
    todo: 'Learn HTML',
    isDone: false,
  },
  {
    todo: 'Learn React',
    isDone: false,
  },
  {
    todo: 'Learn Node.js',
    isDone: false,
  },
  {
    todo: 'Learn useState',
    isDone: false,
  },
]

function App() {
  const [newPostTitle, setNewPostTitle] = useState('')
  const [posts, setNewPosts] = useState(initPosts)

  //check list
  const checkTodo = (index) => {
    const copyCurrentTask = [...posts]
    copyCurrentTask[index].isDone = !copyCurrentTask[index].isDone
    setNewPosts(copyCurrentTask)
  }

  // delete
  const deleteTodo = (index) => {
    const copyCurrentTask = [...posts]

    copyCurrentTask.splice(index, 1)

    setNewPosts(copyCurrentTask)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setNewPosts([
      ...posts,
      {
        todo: newPostTitle,
        isDone: false,
      },
    ])
    setNewPostTitle('')
  }

  return (
    <div className="flex">
      <div className="flex-col m-auto h-screen">
        <div className="flex bg-white  "></div>
        <form
          className="flex flex-col justify-center items-center mt-16 mb-8 gap-4 px-16 py-8 bg-white rounded-2xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <label className="flex font-bold text-4xl text-red-600  font-sans justify-center items-center gap-y-4 ">
            TO DO LIST
            <img
              className="flex w-8 h-8 ml-4"
              src="https://em-content.zobj.net/thumbs/240/apple/354/man-technologist_1f468-200d-1f4bb.png"
              alt="work"
            ></img>
          </label>
          <input
            className='className="h-10 w-80 h-10 text-center rounded-full bg-slate-200 pl-4'
            type="text"
            placeholder="What u wanna do..."
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            required
          />
          <input
            className="bg-red-500 hover:bg-red-600 w-32 ease-in duration-100 hover:scale-105 rounded-full  p-2 font-bold text-white cursor-pointer"
            type="submit"
            value="post"
          ></input>
        </form>
        {posts.map((post, index) => {
          // return post by post with key = post's id
          return <Post key={post.todo} index={index} post={post} checkTodo={checkTodo} deleteTodo={deleteTodo} />
        })}
      </div>
    </div>
  )
}

export default App
