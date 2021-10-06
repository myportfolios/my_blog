import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function CommentList({postId}) {
    const [comments, setComments] = useState([]);
    const url = `http://localhost:8002/posts/${postId}/comments`;

    const fetchData = async () => {
        const {data} = await axios.get(url)
        setComments(data)
    }
    useEffect(() => {
        fetchData()
    },[])

    const renderedComments = comments && comments.map((comment) => {
        return <li key={comment.id}>
            {comment.content}
        </li>
    })
    return (
        <ul>
            {renderedComments}
        </ul>
    )
}
