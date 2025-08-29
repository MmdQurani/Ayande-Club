import React, { useState } from "react";
import video_img_01 from '../../assets/images/video_img_01.png'

function Videos() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      title: "آموزش ۱",
      src: "",
      thumbnail: video_img_01,
    },
    {
      title: "آموزش ۲",
      src: "",
      thumbnail: video_img_01,
    },
    {
      title: "آموزش ۳",
      src: "",
      thumbnail: video_img_01,
    },
    {
      title: "آموزش ۴",
      src: "",
      thumbnail: video_img_01,
    },
    {
      title: "آموزش ۵",
      src: "",
      thumbnail: video_img_01,
    },
  ];

  return (
    <div className="p-4 md:p-8 text-gray-700 bg-white border border-neutral-200 rounded-lg">
      <div className="faq_title px-4 mb-12">
        <span className="text-[16px] text-neutral-800 font-semibold">
          ویدئو های آموزشی
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">


        <div className="w-full lg:w-2/3 rounded-lg overflow-hidden lg:mb-0 mb-8">
          <video
            key={videos[currentVideo].src}
            src={videos[currentVideo].src}
            controls
            autoPlay
            className="w-full h-[400px] rounded-lg mb-8"
          />
          <span className="text-[16px]">نکات مهم قبل از شروع معامله</span>
        </div>


        <div className="w-full lg:w-1/3 flex flex-col gap-4 max-h-[400px] overflow-y-auto px-4">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setCurrentVideo(index)}
              className={`min-h-[110px] flex items-center gap-3 p-2 rounded-lg cursor-pointer border ${currentVideo === index
                ? "border-yellow-500 bg-yellow-50"
                : "border-neutral-200 hover:bg-neutral-50"
                }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-[100px] h-[60px] object-cover rounded-md"
              />
              <span className="text-sm font-medium">{video.title}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Videos;
