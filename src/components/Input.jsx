import React from 'react'

function Input() {
  return (
    <div className="flex my-16 bg-white">
      <form className="flex flex-col justify-center">
        <span className="flex justify-center content-center items-baseline ">
          <label className="flex font-bold text-4xl text-red-600 mt-8 justify-center font-sans "> To Do List </label>
          <img
            className="flex w-8 h-8 ml-4"
            src="https://em-content.zobj.net/thumbs/240/apple/354/man-technologist_1f468-200d-1f4bb.png"
            alt="work"
          ></img>
        </span>
        <span className="flex mt-8 mb-16 mx-16">
          <input
            className="h-10 w-80 rounded-full bg-slate-200 pl-4"
            type="text"
            placeholder="Type what u wanna do..."
            required
          />
          <input
            className="bg-red-500 hover:bg-red-600 w-32 ease-in duration-100 hover:scale-105 rounded-full ml-10 p-2 font-bold text-white"
            type="submit"
            value="Do it!"
          ></input>
        </span>
      </form>
    </div>
  )
}

export default Input
