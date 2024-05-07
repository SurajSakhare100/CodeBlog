const blog = {
    title: `How to Start a React App: A Beginner's Guide`,
    headers: {
        header1: `Step 1: Install Node.js`,
        header2: `Step 2: Create a New React App`,
        header3: `Step 3: Navigate to the App Directory`,
        header4: `Step 4: Start the Development Server`,
        header5: `Step 5: Modify Your App`,
        header6: `Step 6: View Your Changes`,
        header7: `Step 7: Build Your App for Production`,
        header8: ``,
    },
    paras: {
        para1: `Welcome to our beginner's guide on starting a React app! In this tutorial, 
        we'll walk you through the steps to create a basic React application from scratch using Create React App.`,
        para2: `Before we begin, ensure you have Node.js installed on your computer. You can download and install it from the official website: Node.js.`,
        para3: `Open your terminal or command prompt and run the following command to create a new React app using Create React App:`,
        para4: `Replace "my-react-app" with the desired name for your app.`,
        para5: `Once the app is created, navigate to the project directory using the following command:`,
        para6:`Now, start the development server by running:`,
        para7:`This command will launch your default web browser and display your React app.`,
        para8:`Open the project directory in your preferred code editor. You'll find the basic structure of a React app with files like src/index.js and src/App.js. Let's modify the App.js file to customize our app:`,
        para9:`Feel free to edit the content inside the App component to suit your needs.`,
        para10:`Save your changes, and the React app will automatically update in the browser with the modifications you made.`,
        para11:`When you're ready to deploy your app, you can build it for production using the following command:`,
        para12:`This command generates a build folder containing optimized production-ready assets.`,
    },
    img: {
        img1: ``,
        img2: ``,
        img3: ``,
        img4: ``,
        img5: ``,
    },
    code:{
        code1:`npx create-react-app my-react-app`,
        code2:`cd my-react-app`,
        code3:`npm start`,
        code4:
        `import React from 'react';
        function App() {
          return (
            <div className="App">
              <h1>Hello, React!</h1>
              <p>Welcome to my React app.</p>
            </div>
          );
        }
        export default App;
        `,
        code5:`npm run build`,
        code6:``,
    }
}
export default blog