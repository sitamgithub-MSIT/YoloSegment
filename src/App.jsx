import { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
//import "@tensorflow/tfjs-backend-webgl"; // set backend to webgl
import "@tensorflow/tfjs-backend-webgpu";
import Loader from "./components/loader";
import ButtonHandler from "./components/btn-handler";
import { detectFrame, detectVideo } from "./utils/detect";
import "./style/App.css";

tf.setBackend("webgpu"); // set backend to webgpu

/**
 * App component for YOLO11 Live Segmentation App.
 *
 * This component initializes and loads a YOLO11 segmentation model using TensorFlow.js,
 * sets up references for image, camera and canvas elements, and
 * handles the loading state and model configuration.
 */
const App = () => {
  const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3],
  }); // init model & input shape

  // references
  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

  // model configs
  const modelName = "yolo11n-seg";

  useEffect(() => {
    tf.ready().then(async () => {
      const yolo11 = await tf.loadGraphModel(
        `${window.location.href}/${modelName}_web_model/model.json`,
        {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions }); // set loading fractions
          },
        }
      ); // load model

      // warming up model
      const dummyInput = tf.randomUniform(
        yolo11.inputs[0].shape,
        0,
        1,
        "float32"
      ); // random input
      const warmupResults = yolo11.execute(dummyInput);

      setLoading({ loading: false, progress: 1 });
      setModel({
        net: yolo11,
        inputShape: yolo11.inputs[0].shape,
        outputShape: warmupResults.map((e) => e.shape),
      }); // set model & input shape

      tf.dispose([warmupResults, dummyInput]); // cleanup memory
    });
  }, []);

  return (
    <div className="App">
      {loading.loading && (
        <Loader>Loading model... {(loading.progress * 100).toFixed(2)}%</Loader>
      )}
      <div className="header">
        <h1>📷 YOLO11 Live Segmentation App</h1>
        <p>
          YOLO11 live segmentation application on browser powered by{" "}
          <code>tensorflow.js</code>
        </p>
        <p>
          Serving : <code className="code">{modelName}</code>
        </p>
      </div>

      <div className="content">
        <img
          src="#"
          ref={imageRef}
          onLoad={() => detectFrame(imageRef.current, model, canvasRef.current)}
        />
        <video
          autoPlay
          muted
          ref={cameraRef}
          onPlay={() =>
            detectVideo(cameraRef.current, model, canvasRef.current)
          }
        />
        <canvas
          width={model.inputShape[2]}
          height={model.inputShape[1]}
          ref={canvasRef}
        />
      </div>

      <ButtonHandler imageRef={imageRef} cameraRef={cameraRef} />
    </div>
  );
};

export default App;
