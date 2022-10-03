import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./learn.module.css"

function Learn() {
  const [urlCourse, setUrlCourse] = useState({});

  useEffect(() => {
    axios.get("http://localhost:9999/course").then((res) => {
      setUrlCourse(res.data[0])
      console.log(urlCourse)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <div>
      <iframe
        width="100%"
        height="720"
        src={urlCourse.url}
        title="Tái Cấu Trúc Và Tối Ưu Code #1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Learn;
