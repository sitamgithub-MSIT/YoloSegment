# YoloSegment

This is a simple web app to demonstrate how to use Yolo11 and TensorFlow.js to divide images into different regions or segments based on their content.

## Project Structure

The project is structured as follows:

- `assets/`: This directory contains screenshots of the output results and deployment-related reports.

- `public/`: Static assets like images, icons, and fonts.

- `src/`: Core source code for the application.

  - `components/`: Reusable React components for the application.

    - `btn-handler.jsx`: Button handler component for managing button actions.
    - `loader.jsx`: Loader component for displaying loading state.

  - `style/`: CSS files for styling the application.

    - `index.css`: Global CSS styles for the application.
    - `loader.css`: CSS styles for the loader component.
    - `App.css`: CSS styles for the main application.

  - `utils/`: Utility functions for the application.

    - `detect.js`: Image segmentation utility js function.
    - `renderBox.js`: Box rendering utility js function.
    - `webcam.js`: Webcam utility js function.
    - `labels.json`: Labels for the Yolo11 model classes in JSON format.

- `.gitignore`: Specifies which files and directories should be ignored by Git.
- `LICENSE`: Project licensing information.
- `README.md`: Project documentation and setup instructions.
- `index.html`: Main HTML file for the application.
- `package.json`: Project dependencies and script configuration.
- `vite.config.js`: Vite configuration file for the project.

## Technologies Used

- **HTML**: Standard markup language for creating web pages.
- **CSS**: Style sheet for designing the layout of web pages.
- **JavaScript**: High-level programming language for building web applications.
- **React**: JavaScript library for building user interfaces.
- **TensorFlow.js**: Machine learning library for training and deploying machine learning models in the browser and on Node.js.
- **Ultralytics**: Exported YOLO11 segmentation model to TensorFlow.js.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository: `git clone https://github.com/sitamgithub-MSIT/YoloSegment.git`
2. Change the directory: `cd YoloSegment`
3. Install the required dependencies: `npm install`
4. Run the application: `npm run dev`

Open your local host to view the web application in your browser at `http://localhost:3000/`. You can also access a live version of the application [here](https://yolo-segment.vercel.app/), which is deployed on vercel.

## Results

The YoloSegment web application allows users to upload an image or use their webcam to segment the image into different regions based on the content. The application uses the Yolo11 segmentation model to achieve this functionality.

**Note**: To see results regarding testing and deployment, please refer to the `assets` folder in the repository.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please raise an issue to discuss the changes you would like to make. Once the changes are approved, you can create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions regarding the project, feel free to reach out to me on my GitHub profile.

Happy coding! 🚀
