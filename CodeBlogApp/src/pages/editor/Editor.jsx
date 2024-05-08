// App.js
import React from 'react';
import '/src/utility.css'
function App() {
    return (
      <div className='w-full h-full bg-gradient-to-tr from-black to-slate-900 px-8 lg:px-32'>
        <div className=" container mx-auto w-2/3 py-20">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-8 text-white">
                    <h1 className="text-3xl font-bold">Navigating the World of React Development: A Comprehensive Guide</h1>
                </header>

                <article className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Understanding React</h2>
                    <p>At its core, React is a JavaScript library for building user interfaces. Developed by Facebook, it provides a component-based architecture where UIs are composed of reusable and independent components. This approach promotes code reusability, maintainability, and scalability, making it ideal for building complex web applications.</p>
                </article>

                <section className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
                    <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                    <p>To begin your journey with React, it's essential to have a solid understanding of HTML, CSS, and JavaScript fundamentals. Once you're comfortable with these basics, you can jump into learning React.</p>

                    <div className="border border-gray-200 rounded p-4 mt-4">
                        <h3 className="text-lg font-semibold mb-2">Setting Up Your Environment</h3>
                        <p>Setting up a development environment for React involves installing Node.js and npm (Node Package Manager). These tools will allow you to create and manage React projects effortlessly. You can use Create React App, a popular toolchain, to bootstrap new React projects with a pre-configured setup.</p>
                        <pre className="bg-black text-white p-4 rounded mt-4"><code>npx create-react-app my-app
                            cd my-app
                            npm start</code></pre>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md mt-8">
                    <h2 className="text-2xl font-bold mb-4">Core Concepts</h2>
                    <ol className="list-decimal ml-6">
                        <li className="mb-2"><strong>Components</strong>: Components are the building blocks of React applications. They encapsulate UI elements and logic, allowing you to create reusable and modular code.</li>
                        <li className="mb-2"><strong>JSX</strong>: JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes the creation of React elements intuitive and readable.</li>
                        <li className="mb-2"><strong>State and Props</strong>: State represents the data that changes over time within a component, while props (short for properties) are inputs passed into a component. Understanding how to manage state and props is crucial for building dynamic and interactive applications.</li>
                        <li className="mb-2"><strong>Lifecycle Methods</strong>: React components have lifecycle methods that allow you to hook into various stages of a component's life, such as when it is created, updated, or destroyed. These methods enable you to perform tasks like fetching data, setting up subscriptions, or cleaning up resources.</li>
                    </ol>
                </section>
            </div>
            <div className="w-1/4 ml-4">
        {/* Right-side panel */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
          {/* Add content for latest posts */}
        </div>
      </div>
        </div>
        </div>
    );
}

export default App;
