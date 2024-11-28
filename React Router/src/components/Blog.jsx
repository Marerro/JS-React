import {Link, useParams} from "react-router";
import {getOne} from "../helpers/get";
import {useState, useEffect} from "react";
function Blog() {

    const {postID} = useParams();

    const [post, setPost] = useState(null)

    const getPost = async (id) => {
        const post = await getOne(id);
        setPost(post);
    }

    useEffect(() => {
        getPost(postID);
    }, [postID]);

    if(!post) {
        return <p>error</p>
    }

    const {title, author, content, date, category} = post;

    return (
        <div className="absolute top-0 left-1 bg-gray-500 p-3">
        <h1>{title}</h1>
        <p>Author:{author}</p>
        <p>{content}</p>
        <p>Date:{date}</p>
        <p>{category}</p>
        <Link to="/blog"><button className="bg-orange-500 p-3">Back</button></Link> 
        </div>
    );
}

export default Blog;