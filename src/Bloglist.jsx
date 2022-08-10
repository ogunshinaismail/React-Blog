import React from 'react'
import { Link } from 'react-router-dom'

const Bloglist = ({ blogs, title }) => {
    
    return (
        <div className='blogCard'>
            <h1>{title}</h1>

            {blogs.map(blog => (
                <div key={blog.id} className='blog-preview'>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                    </Link> 
                </div>
            ))}
        </div>
    )
}

export default Bloglist