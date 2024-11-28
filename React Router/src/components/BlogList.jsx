import { Outlet, Link, useSearchParams } from "react-router";
import { getAllData } from "../helpers/get";
import { useEffect, useState } from "react";

function BlogList() {
  const [posts, setPosts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const getPosts = async () => {
    const posts = await getAllData();
    setPosts(posts);
    // console.log(posts);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams(value ? {search:value} :{})
  } 

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Blog List</h1>
      <input 
      type="text" 
      name="search" 
      id="search" 
      placeholder="Search by title.."
      onChange={handleSearch}
      />
      <ul>
        {filteredPosts.map((post) => {
          return (
            <div className="bg-gray-300 border-4" key={post.id}>
              <li>{post.title}</li>
              <p>{post.author}</p>
              <Link to={`/blog/${post.id}`}><button className="bg-blue-900 border-black m-3 p-3">
                Read more
              </button></Link>
            </div>
          );
        })}
        <Outlet />
      </ul>
    </>
  );
}

export default BlogList;
