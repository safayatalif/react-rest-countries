import React from 'react';

const Navbar = () => {
    return (
        <div>
            <section>
                <nav className='navbar bg-info'>
                    <div className='container-fluid'>
                        <h1 className='navbar-brand'>Countries</h1>
                        <form className='d-flex' role='search'>
                            {/* <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'> */}
                                <button className='btn btn-outline-success' type='submit'>Search</button>
                        </form>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Navbar;