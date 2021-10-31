import React, { useRef } from 'react';

const Event = () => {
    const titleRef = useRef();
    const imgRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    const handleBlog = e => {
        const title = titleRef.current.value;
        const img = imgRef.current.value;
        const address = addressRef.current.value;
        const description = descriptionRef.current.value;

        const newBlog = { title, img, description, address };
        fetch('https://fast-dusk-28001.herokuapp.com/event', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Event Inserted Successfully.');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container my-5 shadow p-3">
            <h1 className="text-center fw-bold mb-5">ADD BLOG</h1>
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={handleBlog} className="container w-50">
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-heading"></i></div>
                            <input ref={titleRef} type="text" className="form-control" id="autoSizingInputGroup" onBlur="" placeholder="Enter Blog Title" />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-image"></i></div>
                            <input ref={imgRef} type="text" className="form-control" id="autoSizingInputGroup" onBlur="" placeholder="Enter Blog Image URL" />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-map-pin"></i></div>
                            <input ref={addressRef} type="text" className="form-control" id="autoSizingInputGroup" onBlur="" placeholder="Enter Location " />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-paragraph"></i></div>
                            <textarea ref={descriptionRef} type="password" className="form-control" id="autoSizingInputGroup" onBlur="" placeholder="Enter Blog Description" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-dark fw-bold">INSERT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Event;