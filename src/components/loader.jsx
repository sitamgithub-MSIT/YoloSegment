import "../style/loader.css";

/**
 * Loader component that displays a spinner and optional children content.
 */
const Loader = (props) => {
  return (
    <div className="wrapper" {...props}>
      <div className="spinner"></div>
      <p>{props.children}</p>
    </div>
  );
};

export default Loader;
