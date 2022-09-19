import React from 'react'

function Test() {
  const videos = [
    "https://www.youtube.com/embed/9KIub8JNcXg?list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q",
  ];

  return (
    <div>
      {videos.map((item, i) => {
        return (
          <iframe
            width="100%"
            height="720"
            src={item}
            title="Tái Cấu Trúc Và Tối Ưu Code #1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        );
      })}
    </div>
  );
}

export default Test