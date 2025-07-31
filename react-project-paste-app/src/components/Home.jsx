import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  // get pasteId from searchParams (it will be get from the url)
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();


  function createPaste() {
    // create paste object with title, content, _id, createdAt
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    // console.log("this msg from home -- paste : ",paste);

    if(pasteId){
      //update
      dispatch(updateToPastes(paste));
    }
    else{
      // create
      dispatch(addToPastes(paste));
    }

    // after creation 
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="Home">
      <div className="container1">
        <input
          type="text"
          placeholder="Enter text here"
          id="input1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createPaste}>{pasteId ? "Update My Paste" : "Create New Paste"}</button>
      </div>

      <div className="textarea">
        <textarea
          id="input2"
          value={value}
          placeholder="Enter your text here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
