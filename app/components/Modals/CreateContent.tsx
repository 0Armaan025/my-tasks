"use client";

import React, { use } from "react";
import { useState } from "react";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  return (
    <div>
      <h1>Create a task</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          
          placeholder="eg. make spotify clone"
        />
      </div>
     
    </div>
  );
};

export default CreateContent;
