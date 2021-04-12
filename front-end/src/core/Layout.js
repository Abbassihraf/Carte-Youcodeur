import React from 'react'

const Layout = ({title, description, className, Children}) => {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>
                {Children}
            </div>
        </div>
    )
}

export default Layout
