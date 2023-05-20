import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import Header from '../Shared/Header/Header';
import BlogPost from './BlogPost';

const Blog = () => {
    useTitle('Blog')
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('questions.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <Header title={'Blog'}/>
            <div className='p-5'>
                {
                   posts.map((post, index) => <BlogPost
                   key={index}
                   post={post}
                   index={index}
                   />) 
                }
            </div>
        </div>
    );
};

export default Blog;