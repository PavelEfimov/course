import React, { Component } from 'react';

import News from './News';

class NewsBlock extends Component {
    render() {
        return (
            <div className="home-newsBlock">
           <News text="News1" link="/Home:news1" />
           <News text="News2" link="/Home:news2" />
            </div>
        )
    }
}
export default NewsBlock;