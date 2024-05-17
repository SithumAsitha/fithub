import { Avatar, Button } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios'; // Import Axios
import Card from './Card';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Gymeet text is required")
});

const HomeSection = () => {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/allPosts');
                setPosts(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleSubmit = async (values) => {
        try {
            const formData = new FormData();
            formData.append("post_image", values.image);
            formData.append("post_data", JSON.stringify({
                postDescription: values.content,
                userId: "GYM12345",
                timestamp: new Date().toISOString()
            }));

            const response = await axios.post('http://localhost:8081/api/addPost', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const newPost = response.data.data; // Assuming the response contains the newly created post
            setPosts(prevPosts => [...(prevPosts || []), newPost]); // Update the state with the new post using the callback form

            formik.resetForm();
            setSelectedImage("");
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };



    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        handleSubmit(formik.values); // Call the custom submit function
    };

    const formik = useFormik({
        initialValues: {
            content: "",
            image: null
        },
        onSubmit: handleSubmit,
        validationSchema,
    });

    const handleSelectMedia = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    };

    const removeImage = () => {
        formik.setFieldValue("image", null);
        setSelectedImage("");
    };

    return (
        <div className='space-y-5' style={{ marginTop: '30px' }}>
            <section>
                <h1 className='py-5 text-x1 font-bold opacity-90' style={{ fontWeight: 'bold' }}>Home</h1>
            </section>
            <section className={`pb-10`}>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <Avatar alt="username"
                        src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" />
                    <div className='w-full' style={{ paddingLeft: '10px' }}>
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <input type='text' name='content' placeholder='What is happening?'
                                    className={`border-none outline-none text-xl bg-transparent`}
                                    style={{ width: '500px' }} // Adjust the width here
                                    {...formik.getFieldProps("content")} />
                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'>{formik.errors.content}</span>
                                )}
                            </div>

                            {selectedImage && (
                                <>
                                    {selectedImage.type.startsWith('video/') ? (
                                        <div style={{ display: 'flex', alignItems: 'center', padding: '4px', marginTop: '20px', filter: 'brightness(110%)', transition: 'filter 0.15s', cursor: 'pointer', position: 'relative' }} onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(110%)'} onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(100%)'}>
                                            <video controls style={{ height: '200px', width: '100px' }}>
                                                <source src={URL.createObjectURL(selectedImage)} type={selectedImage.type} />
                                                Your browser does not support the video tag.
                                            </video>
                                            <RiDeleteBin6Line
                                                onClick={removeImage}
                                                style={{ position: 'absolute', top: '5px', right: '5px', height: '40px', color: 'gray', cursor: 'pointer', transition: 'color 0.3s' }}
                                                onMouseEnter={(e) => e.target.style.color = 'red'}
                                                onMouseLeave={(e) => e.target.style.color = 'gray'}
                                            />
                                        </div>
                                    ) : (
                                        <div style={{ position: 'relative' }}>
                                            <img src={URL.createObjectURL(selectedImage)} alt='selected' style={{ height: '100px', width: '100px' }} />
                                            <RiDeleteBin6Line
                                                onClick={removeImage}
                                                style={{ position: 'absolute', top: '5px', right: '5px', height: '40px', color: 'gray', cursor: 'pointer', transition: 'color 0.3s' }}
                                                onMouseEnter={(e) => e.target.style.color = 'red'}
                                                onMouseLeave={(e) => e.target.style.color = 'gray'}
                                            />
                                        </div>
                                    )}
                                </>
                            )}



                            <div style={{ display: 'flex', marginTop: '10px' }} >
                                <div className='flex space-x-5 items-center'>
                                    <label htmlFor="fileInput" className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon style={{ color: '#FD2F03', marginRight: '20px' }} />
                                        <input
                                            id="fileInput"
                                            type='file'
                                            accept="image/*, video/*"
                                            name='mediaFile'
                                            className='hidden'
                                            style={{ display: 'none' }}
                                            onChange={handleSelectMedia} />

                                    </label>
                                    <LocationOnIcon style={{ color: '#FD2F03', marginRight: '20px' }} />
                                    <TagFacesIcon style={{ color: '#FD2F03', marginRight: '20px' }} />
                                </div>
                                <div>
                                    <Button
                                        sx={{ width: "25%", borderRadius: "20px", paddingY: "5px", paddingX: "0px", bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}
                                        variant='contained'
                                        style={{ marginLeft: '300px' }}
                                        type='submit'>Gymeet</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section style={{ marginTop: '40px' }}>
                {posts && Array.isArray(posts) && posts.length > 0 ? (
                    posts
                        .slice()
                        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                        .map((post) => (
                            <Card
                                key={post.postId}
                                postDescription={post.postDescription}
                                postImage={post.postImage}
                                timestamp={post.timestamp}
                                postId={post.postId}
                                updatePosts={setPosts}
                                
                            />
                        ))
                ) : (
                    <p></p>
                )}

            </section>

        </div>
    );
};

export default HomeSection;
