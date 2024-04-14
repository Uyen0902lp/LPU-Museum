import React from 'react'


const HeaderReuse = ({title, image, children}) => {
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_container-bg">
                    <img src={image} alt="Header Background Image" />
                </div>
                <div className="header_content">
                    <h1>{title}</h1>
                    <p>{children}</p>
                </div>
            </div>
        </header>
    )    
}

export default HeaderReuse