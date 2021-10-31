import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageTask = () => {
    const [blogs, setBlog] = useState([]);
    const [items, setItem] = useState([]);

    useEffect(() => {
        const url = 'https://fast-dusk-28001.herokuapp.com/join';
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);

    // DELETE AN JOIN
    const handleDeleteJoin = id => {
        const proceed = window.confirm('Are you sure, you want to delete ?');
        if (proceed) {
            const url = `https://fast-dusk-28001.herokuapp.com/join/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cancel Successfully');
                        window.location.reload();
                        const remainingJoin = items.filter(item => item._id !== id);
                        setItem(remainingJoin);
                    }
                });
        }
    }

    return (
        <div className="container my-5 shadow p-3 rounded">
            <h1 className="text-center my-3">Manage Task</h1>
            <div className="card mb-3 border-0">
                {
                    blogs.map(blog => <div className="row my-3 " key={blog._id}>
                        <div className="col-md-7 border-success">
                            <div className="card-body">
                                <h5 className="card-title"><span className="fw-bold">User Name:</span> {blog.userName}</h5>
                                <h5 className="card-title"><span className="fw-bold">User Email:</span> {blog.userEmail}</h5>
                                <h5 className="card-title"><span className="fw-bold">Title:</span> {blog.title}</h5>
                                <h5 className="card-title"><span className="fw-bold">Location:</span> {blog.address}</h5>
                                <button onClick={() => handleDeleteJoin(blog._id)} type="button" className="btn btn-danger fw-bold text-dark"><i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={blog.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageTask;