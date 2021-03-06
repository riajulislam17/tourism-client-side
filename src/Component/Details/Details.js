import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Details = () => {
    const { user } = useAuth();
    const [blog, setBlog] = useState({});
    // const [join, setJoin] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://fast-dusk-28001.herokuapp.com/event/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [id]);

    const joinBlog = e => {
        const userName = user.displayName;
        const userEmail = user.email;
        const img = blog.img;
        const address = blog.address;
        const title = blog.title;

        const newBlog = { userName, userEmail, img, address, title };
        fetch('https://fast-dusk-28001.herokuapp.com/join', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Join Inserted Successfully.');
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <div className="container my-3 shadow p-3">
                <div className="card mb-3">
                    <div className="row g-0">

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><span className="fw-bold">Title:</span> {blog.title}</h5>

                                <h5 className="card-title"><span className="fw-bold">Location:</span> {blog.address}</h5>
                                <p className="card-text"><span className="fw-bold">Description:</span> {blog.description}</p>
                                <form onSubmit={joinBlog} className="container w-50">
                                    <div className="row my-2">
                                        <div className="input-group">
                                            <div className="input-group-text fw-bold"><i className="fas fa-user"></i></div>
                                            <input type="text" className="form-control" id="autoSizingInputGroup" value={user.displayName || ''} />
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="input-group">
                                            <div className="input-group-text fw-bold"><i className="fas fa-envelope"></i></div>
                                            <input type="email" className="form-control" id="autoSizingInputGroup" value={user.email || ''} />
                                        </div>
                                    </div>
                                    <button className="btn btn-dark p-2 fw-bold text-white">JOIN EVENT</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={blog.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;