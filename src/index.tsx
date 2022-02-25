import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { palette } from './Palette';
import App, { AppHeader } from './App';
import styled from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Download from './subpages/Download';
import Discord from './subpages/Discord';
import Images from './subpages/Images';
import Packs from './shared/Packs';
import Libraries from './subpages/Libraries';
import Tools from './subpages/Tools';
import { QueryParamProvider } from 'use-query-params';


const IndexContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px;

  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
  

  div {
    font-family: Inconsolata;
    color: ${palette.text};
  }

  h1 {
    font-size: 3rem;
    margin: 0px;
    font-family: Disket-Bold;
  }
  h2 {
    font-size: 2.25rem;
    margin: 0px;
    font-family: Disket-Bold;
    color: ${palette.subText};
  }
  h3 {
    font-size: 1.5rem;
    margin: 0px;
    font-family: Disket-Bold;
    color: ${palette.subText};
  }
  button {
    background-color: ${palette.lightAccent};

    border: none;
    color: ${palette.text};
    font-family: Disket-Bold;

    :hover {
      filter: brightness(85%);
    }
    :active {
      filter: brightness(60%);
    }
  }

`

document.body.style.backgroundColor = palette.lightBackground;

const app = (
    <React.StrictMode>
      <IndexContainer className='h-full'>
        <BrowserRouter>
          <QueryParamProvider ReactRouterRoute={Route}>
            <Route path='/discord' component={Discord} />
            <Route path='/images' component={Images} />
            <Route path='/libraries' component={Libraries} />
            <Route path='/tools' component={Tools} />
            <Route path='/packs/:owner/:id'>
              <AppHeader hideSubtitle={true} />
              <Packs browser={true}/>
            </Route>
            <Route path='/download' component={Download} />
            <Route exact path='/' component={App} />
            <meta/>
          </QueryParamProvider>
        </BrowserRouter>
      </IndexContainer>
    </React.StrictMode>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
