import { FormatItalic } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Card from './Card'

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Gymeet text is required")
})

const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("")

    const handleSubmit = (values) => {
        console.log("values", values);
    }


    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema,
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);

    }
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
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input type='text' name='content' placeholder='What is happening?'
                                    className={`border-none outline-none text-xl bg-transparent`}
                                    {...formik.getFieldProps("content")} />
                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'>{formik.errors.content}</span>
                                )}
                            </div>
                            {/* <div>
                            <img src='' alt=''/>
                        </div> */}
                            <div style={{display:'flex',marginTop:'10px'}} >
                                <div className='flex space-x-5 items-center'>
                                    <label htmlFor="fileInput" className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon style={{ color: '#FD2F03' ,marginRight:'20px'}} />
                                        <input
                                            id="fileInput"
                                            type='file'
                                            name='imageFile'
                                            className='hidden'
                                            style={{ display: 'none' }}
                                            onChange={handleSelectImage} />
                                    </label>
                                    <LocationOnIcon style={{ color: '#FD2F03',marginRight:'20px' }} />
                                    <TagFacesIcon style={{ color: '#FD2F03',marginRight:'20px' }} />
                                </div>

                                <div>
                                    <Button sx={{ width: "25%", borderRadius: "20px", paddingY: "5px", paddingX: "0px", bgcolor: "#FD2F03", '&:hover': { bgcolor: 'black' } }}
                                        variant='contained'
                                        style={{ marginLeft: '300px'}}
                                        type='submit'>Gymeet</Button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div >

            </section >
            <section style={{marginTop:'40px'}}>
                {[1,1,1,1,1].map((item)=><Card/>)}
            </section>

        </div >
    )
}

export default HomeSection;