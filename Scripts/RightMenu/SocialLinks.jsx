import React from 'react';

const SocialLink = ({ link, place }) => {
return <div className="socialLink">
    <p>Мы в { place }</p>
    <button className ="socialLink-button"><a href={ link } className="socialLink-link">Подписаться</a></button>
</div> 
}
export default SocialLink;