import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate} from 'react-router-dom';

const EditPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [newFile, setNewFile] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/allPosts/${postId}`);
                setPost(response.data.data); // Assuming the post data is nested under 'data' in the response
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [postId]);

    const handleSaveChanges = async () => {
        try {
            let formData = new FormData();
            formData.append('post_data', JSON.stringify({ ...post, timestamp: new Date() }));
            if (newFile) {
                formData.append('post_image', newFile);
            }
    
            await axios.post(`http://localhost:8081/api/updatePost`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            console.log('Post updated successfully');
            navigate('/');
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };
    

    if (!post) {
        return <div>Loading...</div>;
    }

    // Render your form with the fetched post data
    return (
        <div>
            <form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '700px', marginTop: '50px' }}>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Edit Your Post Here</h1>
                <input
                    type='text'
                    name='content'
                    value={post.postDescription}
                    onChange={(e) => setPost({ ...post, postDescription: e.target.value })}
                    className='border-none outline-none text-xl bg-transparent'
                    style={{ width: '500px', marginRight: '10px', marginBottom: '10px' }}
                />
                {/* Render image or video based on the file extension */}
                {post.postImage && (
                    <>
                        {post.postImage.endsWith('.mp4') ? (
                            <video controls style={{ height: '500px', width: '500px' }}>
                                <source src={`http://localhost:8081/static/postImages/${post.postImage}`} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={`http://localhost:8081/static/postImages/${post.postImage}`} alt='post-media' style={{ height: '400px', width: '600px' }} />
                        )}
                    </>
                )}

                <input
                    name='Upload new image'
                    type='file'
                    accept='image/*, video/*'
                    onChange={(e) => setNewFile(e.target.files[0])}
                    style={{ marginBottom: '10px' }}
                />



                <div style={{ marginTop: '10px' }}>
                    <Button
                        sx={{ width: "15%", borderRadius: "20px", paddingY: "5px", paddingX: "0px", bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}
                        variant='contained'
                        style={{ marginLeft: '500px' }}
                        onClick={handleSaveChanges}
                    >
                        Update
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditPost;
