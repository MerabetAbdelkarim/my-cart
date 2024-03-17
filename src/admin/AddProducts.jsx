import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { toast } from "react-toastify"

import { db, storage } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom"
import AnimationLoanding from "../components/UI/AnimationLoanding"


function AddProducts() {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterShortDesc, setEnterShortDesc] = useState('')
    const [enterDescription, setEnterDescription] = useState('')
    const [enterCategory, setEnterCategory] = useState('')
    const [enterPrice, setEnterPrice] = useState('')
    const [enterProductImg, setEnterProductImg] = useState(null)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const addProduct = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const docRef = await collection(db, 'products')
            const storageRef = ref(storage, `productImage/${Date.now() + enterProductImg.name}`)
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await addDoc(docRef, {
                            title: enterTitle,
                            shortDesc: enterShortDesc,
                            description: enterDescription,
                            category: enterCategory,
                            price: enterPrice,
                            imgUrl: downloadURL,
                        })
                    })
                }
            )
            toast.success("product successfully added!")
            navigate('/dashboard/all-products')
            setLoading(false)

        } catch (error) {
            toast.error('product not added!')
        }
    }
    return (
        <>
            {
                loading ?
                    <AnimationLoanding /> :
                    <div className="container">
                        <h3>Add New Product</h3>
                        <form onSubmit={addProduct}>
                            <div className="description-product">
                                <div className="form-group">
                                    <label htmlFor="InputName">Product Name</label>
                                    <input type="text" required className="form-control" id="InputName" placeholder="Enter Name" value={enterTitle} onChange={e => setEnterTitle(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputShort">Short Description</label>
                                    <textarea id="InputShort" required className="form-control" name="InputShort" rows="2" cols="50" placeholder="Enter Short Description" onChange={e => setEnterShortDesc(e.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputFull">Full Description</label>
                                    <textarea id="InputFull" required className="form-control" name="InputFull" rows="4" cols="50" placeholder="Enter Full Description" onChange={e => setEnterDescription(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="details-product">
                                <Row>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label htmlFor="InputPrice">Price</label>
                                            <input type="number" required className="form-control" id="InputPrice" placeholder="$100" value={enterPrice} onChange={e => setEnterPrice(e.target.value)} />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label htmlFor="InputCategory">Category</label>
                                            <select className="w-100 p-2 rounded" id="InputCategory" required value={enterCategory} onChange={e => setEnterCategory(e.target.value)}>
                                                <option value={'chair'}>Chair</option>
                                                <option value={'sofa'}>Sofa</option>
                                                <option value={'mobile'}>Mobile</option>
                                                <option value={'watch'}>Watch</option>
                                                <option value={'wireless'}>Wireless</option>
                                            </select>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="image-product mt-2">
                                <div id="selectedBanner" style={{ backgroundColor: '#9a9a9a', width: '200px', height: '200px', borderRadius: '5px' }}></div>
                                <div className="form-group mt-2">
                                    <input type="file" className="form-control" id="img" name="image" accept="jpg" onChange={(e) => setEnterProductImg(e.target.files[0])} />
                                </div>
                            </div>
                            <button className="btn-buy mt-2">Add Product</button>
                        </form>
                    </div>
            }

        </>
    )
}

export default AddProducts