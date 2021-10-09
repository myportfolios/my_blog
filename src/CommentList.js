import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function CommentList({comments}) {
    const renderedComments = comments && comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>
    })
    return <ul>{renderedComments}</ul>
}
