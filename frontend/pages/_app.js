// app wrapper enabled by next.js and apollo 

import App, { Container } from 'next/app'; 
import Page from '../components/Page';

class MyApp extends App {
    /* MyApp lets state persist across page navigations */
    render() {
        const { Component } = this.props;
        return (
            <Container>
                <Page> 
                    <Component />
                </Page>
            </Container>
        );
    }
}

export default MyApp;
