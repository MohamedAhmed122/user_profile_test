import AutorenewIcon from "@material-ui/icons/Autorenew";
import { useEffect, useRef, useState } from "react";

function UploadPhoto() {
  const [image, setImage] = useState<any>();
  const [preview, setPreview] = useState<any>();

  const fileInputRef = useRef<any>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div>
      <form>
        {preview ? (
          <div className="image_container">
            <button
              className="upload_btn"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              <AutorenewIcon style={{ color: "white" }} />
            </button>
            <img
              src={preview}
              alt="profile"
              className="header_image"
              style={{ objectFit: "cover" }}
              onClick={() => {
                setImage(null);
              }}
            />
          </div>
        ) : (
          <div className="image_container">
            <button
              className="upload_btn"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              <AutorenewIcon style={{ color: "white" }} />
            </button>
            <img
              className="header_image"
              src="https://content.fortune.com/wp-content/uploads/2015/05/rtx1b282.jpg"
              alt="profile"
            />
          </div>
        )}
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={(event: any) => {
            const file = event.target.files[0];
            if (file) {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
      </form>
    </div>
  );
}

export default UploadPhoto;
