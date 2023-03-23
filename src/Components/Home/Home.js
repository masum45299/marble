import React from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Section2 from '../Section2/Section2';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Content></Content>
            <Section></Section>
            <Section2></Section2>
        </div>
    );
};

export default Home;