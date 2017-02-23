import React, { Component } from 'react'
import styled from 'styled-components';

import Pagetitle from '../components/Pagetitle';
import Toggler from '../components/Toggler';
import CategoryToggler from '../components/CategoryToggler';

const View = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
`

const Body = styled.div`
    height: calc(100vh - 105px);
    margin-top: 20px;
    display: flex;
`

const Sidebar = styled.aside`
    width: 225px;
    padding-right: 20px;
    position: absolute;
    transform: translateX(-110%);
    transition: transform .3s;

    @media (min-width: 40em) {
        position: relative;
        transform: none;
    }
`

const SidebarToggler = styled(Toggler)`
    margin-bottom: 40px;
`

const Category = styled(CategoryToggler)`
    margin-bottom: 10px;
`

const Main = styled.main`
    flex: 1;
    background: #fff;
`

class App extends Component {
    render () {
        return (
            <View>
                <Pagetitle>Memorandum</Pagetitle>

                <Body>
                    <Sidebar>
                        <SidebarToggler title="Kategorien" open>
                            <Category checkboxType="orange" label="Musik" />
                            <Category checkboxType="green" label="Rezepte" />
                            <Category checkboxType="purple" label="Todos" />
                        </SidebarToggler>
                        <SidebarToggler title="Listen" open></SidebarToggler>
                    </Sidebar>

                    <Main></Main>
                </Body>
            </View>
        )
    }
}

export default App