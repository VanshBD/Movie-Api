import { Link, Outlet } from 'react-router-dom';

export default function Products() {

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-6">
                    <Link to="electronics">Electronics</Link>
                </div>
                <div className="col-6">
                    <Link to="fashion">Fashion</Link>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
