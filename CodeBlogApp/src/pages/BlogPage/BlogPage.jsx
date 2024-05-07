import React, { useState } from 'react'
import Comment from '../../Component/Comment/Comment.jsx'
import { Helmet } from 'react-helmet';
import Code from '../../Component/BlogComponent/Code/Code.jsx';
import Title from '../../Component/BlogComponent/Title/Title.jsx';
import Paragraph from '../../Component/BlogComponent/Paragraph/Paragraph.jsx';
import Header from '../../Component/BlogComponent/Header/Header.jsx';
import blog from '../../blog/writeblog.js';
function BlogPage() {
    const description = "Explore the world of React development with our in-depth guide. Learn about React's core concepts, best practices, and advanced techniques for building modern web applications.";
    const title = "React Development Guide";
    const ogUrl = "https://codeblogger.com/blog/react-development-guide";
    const ogImageUrl = "CodeBlogApp/src/assets/react.svg";
   
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
