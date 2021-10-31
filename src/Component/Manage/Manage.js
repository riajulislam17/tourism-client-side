import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Manage = () => {
    const [blogs, setBlog] = useState([]);
    const [items, setItem] = useState([]);
    useEffect(() => {
        const url = 'https://fast-dusk-28001.herokuapp.com/event';
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);

    // DELETE AN BLOG
    const handleDeleteBlog = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://fast-dusk-28001.herokuapp.com/event/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();
                        const remainingBlog = items.filter(item => item._id !== id);
                        setItem(remainingBlog);
                    }
                });
        }
    }

    return (
        <div className="container my-5 shadow p-3 rounded">
            <div className="container">
                <div className="row g-2">
                    <div className="col-3 g-2">
                        <div className="p-3 border bg-light">
                            <Link to="/manageTask" className="text-decoration-none fw-bold"><i className="fas fa-tasks"></i> Manage Task</Link>
                        </div>
                        <div className="p-3 border bg-light">
                            <Link to="/event" className="text-decoration-none fw-bold"><i className="fas fa-plus"></i> Add Event</Link>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="p-3 border bg-light p-2">
                            {
                                blogs.map(blog => <table className="table table-striped" key={blog._id} >
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-start">
                                            <td className="fw-bold">{blog.title}</td>
                                            <td className="fw-bold">{blog.address}</td>
                                            <td>
                                                <Link to={`/updateBlog/${blog._id}`}><button type="button" className="btn btn-outline-warning fw-bold text-dark mx-2"><i className="fas fa-edit"></i></button></Link>

                                                <button onClick={() => handleDeleteBlog(blog._id)} type="button" className="btn btn-outline-danger fw-bold text-dark"><i className="fas fa-trash-alt"></i></button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manage;