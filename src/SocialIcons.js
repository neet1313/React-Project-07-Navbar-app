import React from 'react';

const SocialIcons = ({onSocial}) => {
    return(
        <ul className="social-icons">
        {onSocial.map(data => {
            const {id, url, icon} = data;
            return <li key = {id}>
                <a href = {url}>
                    {icon}
                </a>
            </li>
        })}
    </ul>
    )
}

export default SocialIcons;