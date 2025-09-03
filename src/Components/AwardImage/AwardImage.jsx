import { useEffect, useState } from "react";
import apiClient from "../../APIs/api";

function AwardImage({ imagePath, alt = '' }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
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
  }, [imagePath]);

  if (!src) return <div className="w-24 h-24 bg-gray-100 rounded-lg" />;

  return <img src={src} alt={alt} className="w-24 object-contain" />
}

export default AwardImage;
