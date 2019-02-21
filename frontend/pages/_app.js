// app wrapper enabled by next.js and apollo 

import App, { Container } from 'next/app'; 

class MyApp extends App {
    /* MyApp lets state persist across page navigations */
    render() {
        const { Component } = this.props;
        return (
            <Container>
                <Component>
                {this.props.children}
                </Component>
            </Container>
        );
    }
}

export default _app;
