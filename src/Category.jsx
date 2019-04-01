import React from 'react'
import Store from './store'
import {Link} from 'react-router-dom'

class Category extends React.Component {

    state = {
        enabled: false
    }    

    toggleCategory = () => {
        this.setState((prevState, props) => {
            return { enabled: !prevState.enabled}
        })
    }

    deleteCategory = (e, id) => {
        e.stopPropagation()
        e.preventDefault()
        Store.dispatch({
            type: 'DELETE',
            id: id
        })
    }

    render () {
        const category = Store.getState().groups.find(group => group.id === this.props.id);
        const childs = Store.getState().groups.filter(group => group.parentId === this.props.id);
        const icon = this.state.enabled === true ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>;
        const classes = this.props.activeId == this.props.id ? 'active' : null;
        const renderedChilds = () => {
            if (childs.length && this.state.enabled) {
                return (
                    <ul className='groups'>
                        {childs.map(child => { return <Category key={child.id} id={child.id} activeId={this.props.activeId}/> })}
                    </ul>
                )
            }
            return null;
        }

        return (
            <li>
                <Link  className={classes} to={`/category/${this.props.id}`} onClick={this.toggleCategory}>
                    {icon}
                    {category.name}
                    <i onClick={(e) => this.deleteCategory(e, this.props.id)} className="fas fa-trash"></i>
                </Link>
                {renderedChilds()}
            </li>
        )
    }
}

export default Category;