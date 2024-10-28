import React from 'react';
import blogs from "../../data/blogs.json";

function Blog() {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-16">
        <h1 className="text-3xl font-bold">Latest From Blogs</h1>
        <p className="w-11/12 sm:w-1/2 my-6 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit laboriosam consequuntur officia dolores nemo accusamus mollitia voluptates aute.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 cursor-pointer">
        {blogs?.map((blog, index) => (
          <div key={index} className=" rounded-lg transition-all duration-300 hover:scale-110 shadow-2xl overflow-hidden">
            <img src={blog.imageUrl} className="w-full h-48 object-cover" alt="blog" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="mt-2 ">{blog.subtitle}</p>
              <p className="mt-4  text-sm">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;