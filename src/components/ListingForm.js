import { useState } from "react";
function ListingForm({onAddListing}) {

    const initialValues = {
        id: '',
        description: '',
        image: '',
        location: ''
    }

    const [formData, setFormData] = useState(initialValues);

    const {description, image, location} = formData;

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData) => ({...formData, [name]: value}))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch('http://localhost:6001/listings', config)
        .then(resp => resp.json())
        .then((listing) => {
            onAddListing(listing)
            setFormData(initialValues);
        })
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input value={description} 
                       type="text" 
                       name="description" 
                       placeholder="Item Description..." 
                       onChange={handleFormChange}
                       />
                <input value={image} 
                       type="text" 
                       name="image" 
                       placeholder="Image Link..."
                       onChange={handleFormChange}
                       />
                <input value={location} 
                       type="text" 
                       name="location" 
                       placeholder="Seller Location"
                       onChange={handleFormChange}
                       />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default ListingForm;