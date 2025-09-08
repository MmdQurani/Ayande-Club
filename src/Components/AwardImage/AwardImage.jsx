import { useEffect, useRef, useState } from "react";
import apiClient from "../../APIs/api";

function AwardImage({ imagePath, alt = '' }) {
  const [src, setSrc] = useState(null);

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    if (!imagePath) return;

    const fetchImage = async () => {
      try {
        const response = await apiClient.get(`/api/File/GetFile?path=${imagePath}`, {
          responseType: "blob",
        });
        const blobUrl = URL.createObjectURL(response.data);
        setSrc(blobUrl);
      } catch (error) {
        console.error("خطا در گرفتن تصویر:", error);
      }
    };

    fetchImage();
  }, []);

  if (!src) return <div className="w-24 h-24 bg-gray-100 rounded-lg" />;

  return <img src={src} alt={alt} className="w-18 object-contain" />
}

export default AwardImage;
