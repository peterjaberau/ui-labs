import "react-image-crop/dist/ReactCrop.css";

import { Button, Col, Modal, Row } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

import ReactCrop from "react-image-crop";

export const Cropper = ({
  open = true,
  onOk,
  onCancel,
  imageSrc = "https://gips2.baidu.com/it/u=1651586290,17201034&fm=3028&app=3028&f=JPEG&fmt=auto&q=100&size=f600_800",
  aspect = 1,
  circular = true,
  initialWidth = 200, //Specify the initial cropping width (px)
  initialHeight = 200, // Specify the initial cropping height (px)
}: any) => {
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 80, aspect });
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [outFile, setOutFile] = useState<any>(null);

  const onImageLoad = useCallback(() => {
const { width: displayedWidth, height: displayedHeight } = imgRef.current!; // The width and height of the display area

    // If you want to keep the crop box at a specific pixel size, you need to limit it based on the display size    const initW = Math.min(initialWidth, displayedWidth);
    const initH = Math.min(initialHeight, displayedHeight);

    // Center crop box
    const initX = Math.round((displayedWidth - initW) / 2);
    const initY = Math.round((displayedHeight - initH) / 2);

    const initialCrop = {
      unit: "px",
      x: initX,
      y: initY,
      width: initW,
      height: initH,
      aspect,
    };
    setCrop(initialCrop);
    setCompletedCrop(initialCrop);

    return false;
  }, [aspect, initialHeight, initialWidth]);

  useEffect(() => {
    if (!completedCrop || !imgRef.current) return;

    const image = imgRef.current as any;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const pixelRatio = window.devicePixelRatio || 1;

    const cropWidth = Math.floor(completedCrop.width * scaleX);
    const cropHeight = Math.floor(completedCrop.height * scaleY);

    canvas.width = cropWidth * pixelRatio;
    canvas.height = cropHeight * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    // 绘制裁剪后的图像到canvas
    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth,
      cropHeight,
    );

    // If it is a circle, make a circular crop on the canvas image and then export it.
    if (circular) {
      const outputCanvas = document.createElement("canvas")!;
      const outputCtx = outputCanvas.getContext("2d")!;
      if (!outputCtx) return;

      const minSide = Math.min(canvas.width, canvas.height);
      outputCanvas.width = minSide;
      outputCanvas.height = minSide;

      // Crop the output Canvas into a circle
      outputCtx.beginPath();
      outputCtx.arc(minSide / 2, minSide / 2, minSide / 2, 0, 2 * Math.PI);
      outputCtx.closePath();
      outputCtx.clip();

      // Center the cropped rectangular content into the circular canvas
      const offsetX = (minSide - canvas.width) / 2;
      const offsetY = (minSide - canvas.height) / 2;
      outputCtx.drawImage(canvas, offsetX, offsetY);

      setPreviewUrl(outputCanvas.toDataURL("image/png") as any);
      setOutFile(outputCanvas);
    } else {
      setPreviewUrl(canvas.toDataURL("image/png") as any);
    }
  }, [completedCrop, circular]);

  const handleOk = () => {
    if (onOk) onOk(outFile);
  };

  return (
    <Modal
      open={open}
      title="Image cropping"
      onCancel={onCancel}
      width={800}
      footer={[
        <Button key="cancel" onClick={onCancel}>
        Cancel
        </Button>,
        <Button key="ok" type="primary" onClick={handleOk}>
          Sure
        </Button>,
      ]}
    >
      <Row gutter={16}>
        <Col span={12} style={{ textAlign: "center" }}>
          <div className="flex items-center justify-center w-[100%] h-[100%]">
            {previewUrl ? (
              <img
                style={{ width: 100 }}
                src={previewUrl}
                crossOrigin="anonymous"
                alt="Crop preview"
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f0f0f0",
                }}
              >
                No preview
              </div>
            )}
          </div>
        </Col>
        <Col span={12}>
          <ReactCrop
            crop={crop as any}
            onChange={(newCrop: any) => setCrop(newCrop)}
            onComplete={(c: any) => setCompletedCrop(c)}
            aspect={aspect}
            circularCrop={circular}
          >
            <img
              ref={imgRef}
              crossOrigin="anonymous"
              alt="Image to be cropped"
              src={imageSrc}
              onLoad={onImageLoad}
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </ReactCrop>
        </Col>
      </Row>
    </Modal>
  );
};
