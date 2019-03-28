import React from 'react'
import Store from './store'
import {Link} from 'react-router-dom'

const Category = ({ id }) => {
    const category = Store.getState().groups.find(group => group.id === id);
    const childs = Store.getState().groups.filter(group => group.parentId === id);
    const renderedChilds = () => {
        if (childs.length) {
            return (
                <ul className='groups disabled'>
                    {childs.map(child => { return <Category key={child.id} id={child.id} /> })}
                </ul>
            )
        }
        return null;
    }

    function toggleCategory(e) {
        e.preventDefault();
        let subDir = e.currentTarget.nextSibling;
        if (subDir) {
            e.currentTarget.classList.toggle('opened')
            subDir.classList.toggle('disabled')
        }
    }

    return (
        <li>
            <Link to={`/category/${id}`} onClick={(e) => toggleCategory(e)}>
                <i className="fas fa-plus"></i>
                {category.name}
            </Link>
            {renderedChilds()}
        </li>
    )
}

export default Category;