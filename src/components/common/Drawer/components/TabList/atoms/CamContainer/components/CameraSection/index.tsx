import { Button, Image } from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";

import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export const CameraSection = () => {
  const [image, setImage] = useState<string | null | undefined>("");
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc);
  }, [webcamRef, setImage]);

  const handleCapture = () => {
    capture();
  };
  return (
    <>
      {image ? (
        <>
          <Image src={image} alt="Foto tirada" />
          <Button colorScheme="purple" color="white" onClick={() => setImage('')}>
            Escolher outra
          </Button>
        </>
      ) : (
        <>
          {" "}
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
          <Button colorScheme="purple" color="white" onClick={handleCapture}>
            Tirar foto
          </Button>
        </>
      )}
    </>
  );
};
