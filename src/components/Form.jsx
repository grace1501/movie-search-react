import { useState, useEffect } from "react"

export default function Form(props) {
    const [formData, setFormData] = useState({
        searchTerm: ""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.movieSearch(formData.searchTerm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} type="text" name="searchTerm" value={formData.searchTerm}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}