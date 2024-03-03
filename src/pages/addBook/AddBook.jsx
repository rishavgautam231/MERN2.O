import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  // const [bookName,setBookName] = useState('')
  // const [bookPrice,setBookPrice] = useState('')
  // const [isbnNumber,setIsbnNumber] = useState(null)
  // const [authorName,setAuthorName] = useState('')
  // const [publishedAt,setPublishedAt] = useState('')
  // const [publication,setPublication] = useState('')
  // const [image,setImage] = useState(null)

//  const handleSubmit = async (e)=>{
//   e.preventDefault()
//   const formData = new FormData() // {}
//   formData.append('bookName',bookName)
//   formData.append('bookPrice',bookPrice)
//   formData.append('isbnNumber',isbnNumber)
//   formData.append('authorName',authorName)
//   formData.append('publishedAt',publishedAt)
//   formData.append('image',image)
//   formData.append('publication',publication)
//    const response = await axios.post('http://localhost:3000/book',formData)
//  }
const navigate = useNavigate()
const [data,setData] = useState({
  bookName : '',
  bookPrice : '',
  isbnNumber : null,
  authorName : '',
  publishedAt : '',
  publication : '',
})
const [image,setImage] = useState(null)

const handleChange = (e)=>{
  const {name,value} = e.target
  setData({
    ...data,
    [name] : value
  })

}

const handleSubmit = async (e)=>{
  e.preventDefault()
  const formData = new FormData()
  
  Object.entries(data).forEach(([key,value])=>{
    formData.append(key,value)
  })
  formData.append('image',image)

  const response = await axios.post("http://localhost:3000/book",formData)
  if(response.status === 201){
    navigate("/")
  }else{
    alert("Something went wrong")
  }

}


  return (
    <>
    <Navbar />
    <div class="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 class="text-2xl font-semibold text-blue-600 mb-6">Add Book</h2>
        <form onSubmit={handleSubmit}>
            <div class="mb-4">
                <label htmlFor="bookName" class="block text-sm font-medium text-gray-600">Book Name</label>
                <input type="text" id="bookName" name="bookName" class="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="bookPrice" class="block text-sm font-medium text-gray-600">bookPrice</label>
                <input type="number" id="bookPrice" name="bookPrice" class="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="isbnNumber" class="block text-sm font-medium text-gray-600">isbnNumber</label>
                <input type="number" id="isbnNumber" name="isbnNumber" class="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="authorName" class="block text-sm font-medium text-gray-600">authorName</label>
                <input type="text" id="authorName" name="authorName" class="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="publication" class="block text-sm font-medium text-gray-600">publication</label>
                <input type="number"  id="publication" name="publication" class="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="publishedAt" class="block text-sm font-medium text-gray-600">publishedAt</label>
                <input type="date" id="publishedAt" name="publishedAt" class="mt-1 p-2 w-full border rounded-md text-gray-800"  onChange={handleChange} />
            </div>
            <div class="mb-6">
                <label htmlFor="bookImage" class="block text-sm font-medium text-gray-600">Book Image</label>
                <input type="file" id="bookImage" name="image" class="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <button type="submit" class="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Book</button>
        </form>
    </div>
    </>
  )
}

export default AddBook