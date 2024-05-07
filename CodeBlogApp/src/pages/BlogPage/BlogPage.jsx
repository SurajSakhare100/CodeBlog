import React from 'react'
import Comment from '../../Component/Comment/Comment.jsx'
import { Helmet } from 'react-helmet';
import Code from '../../Component/BlogComponent/Code/Code.jsx';
import Title from '../../Component/BlogComponent/Title/Title.jsx';
import Paragraph from '../../Component/BlogComponent/Paragraph/Paragraph.jsx';
import Header from '../../Component/BlogComponent/Header/Header.jsx';

function BlogPage() {
    const description = "Explore the world of React development with our in-depth guide. Learn about React's core concepts, best practices, and advanced techniques for building modern web applications.";
    const title = "React Development Guide";
    const ogUrl = "https://codeblogger.com/blog/react-development-guide";
    const ogImageUrl = "CodeBlogApp/src/assets/react.svg";
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
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="React, web development, coding, programming" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:url" content={ogUrl} />
            </Helmet>
            <main className=" pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="pt-12 flex justify-between px-4  m-auto w-1/2 max-w-screen-xl flex-col gap-4">
                    <Title title={blog.title} />
                    <p className='text-white text-md'>Suraj Sakhare | 2 hrs ago | 3 min read </p>
                    <Paragraph para={blog.paras.para1} />
                    <Header header={blog.headers.header1} />
                    <Paragraph para={blog.paras.para2} />
                    <Header header={blog.headers.header2} />
                    <Paragraph para={blog.paras.para3} />
                    <Code code={blog.code.code1}/>
                    <Paragraph para={blog.paras.para4} />
                    <Header header={blog.headers.header3} />
                    <Paragraph para={blog.paras.para4} />
                    <Code code={blog.code.code2}/>
                    <Paragraph para={blog.paras.para5}/>
                    <Header header={blog.headers.header4} />
                    <Paragraph para={blog.paras.para6} />
                    <Code code={blog.code.code3}/>
                    <Paragraph para={blog.paras.para7}/>
                    <Header header={blog.headers.header5} />
                    <Paragraph para={blog.paras.para8} />
                    <Code code={blog.code.code4}/>
                    <Paragraph para={blog.paras.para9}/>
                    <Header header={blog.headers.header6} />
                    <Paragraph para={blog.paras.para10} />
                    <Header header={blog.headers.header7} />
                    <Paragraph para={blog.paras.para11} />
                    <Code code={blog.code.code5}/>
                    <Paragraph para={blog.paras.para12}/>

                    


                <Comment/>
                </div>
            </main>
        </div>
    )
}

export default BlogPage
