import React, { useState } from 'react'
import axios from 'axios'

export default function UploadExample() {
    
    const [files, setFiles] = useState()

    const handleFileChange = (event) => {
        if (event.target.files.length === 0 || event.target.files == undefined) return
        console.log(event.target.files);
        setFiles(event.target.files)
        console.log(files);
    }
    
    const sendFiles = async (event) => {
        let formData = new FormData()
        formData.append('file', files[0])
        console.log(formData);
        const { data } = await axios.post('/uploadImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (data.success) {
            setFiles()
        }
    }
    return (
        <>
            <label htmlFor="file">{files === undefined ? 'Choose file...' : files[0].name}
                <input type="file" accept="image/*" name="photo" id="file" hidden onChange={handleFileChange} />
            </label>
            <button onClick={sendFiles} disabled={files == undefined}>
                Upload
            </button>
        </>
    )
}
