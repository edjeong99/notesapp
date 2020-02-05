import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import ourColors from '../ColorScheme.js';

import { Button, Header, Responsive } from 'semantic-ui-react';
// import { url } from 'inspector';

const LandingDiv = styled.div`
  height: 100%;
  p {
    margin: 0 0 15px 45%;
    padding: 10px 0 10px 10px;
    max-width: 500px;
    text-align: left;
    line-height: 1.5;
  }

  @media (max-width: 1440px) {
    p {
      margin: 0 0 15px 40%;
    }
  }
  @media (max-width: 1240px) {
    p {
      margin: 0 0 15px 32%;
    }
  }
  @media (max-width: 1024px) {
    p {
      margin: 0 30px 15px 30%;
    }
  }
  @media (max-width: 780px) {
    p {
      margin: 0 15px 15px 40%;
      border-radius: 15px;
    }
  }
`;

const LandingPage = props => {
  console.log('LandingPage userID = ', props.userId);
  const headerStyles1 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontSize: '7rem',
      fontWeight: 'normal',
      margin: '75px 0 30px 25%'
    };
  };
  const headerStyles2 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontSize: '6rem',
      fontWeight: 'normal',
      margin: '75px 30px 30px 22%'
    };
  };
  const headerStyles21 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontSize: '5rem',
      fontWeight: 'normal',
      margin: '50px 30px 30px 22%'
    };
  };
  const headerStyles3 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: '5rem',
      margin: '0 0 30px 35%',
      paddingRight: '15px',
      background: 'rgba(255,255,255,0.7)',
      borderRadius: '15px'
    };
  };
  const headerStyles4 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: '5rem',
      margin: '0 10% 30px 10%',
      background: 'rgba(255,255,255,0.7)',
      borderRadius: '15px'
    };
  };
  return (
    <LandingDiv style={{ height: '85vh' }}>
      <Responsive minWidth={1240}>
        <Header as='h1' style={headerStyles4()}>
          SMART
          <br />
          NOTES
        </Header>
        <p style={{ fontFamily: 'Roboto' }}>
          Do you have trouble remembering? This note app is for you! Here you
          can easily take note.
        </p>
        <Button
          onClick={e => props.history.push('/recipes')}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            marginLeft: '25%'
          }}
        >
          Enter Site
        </Button>
      </Responsive>
      <Responsive minWidth={950} maxWidth={1239}>
        <Header as='h1' style={headerStyles2()}>
          SMART
          <br />
          NOTES
        </Header>
        <p style={{ fontFamily: 'Roboto' }}>
          Do you have trouble remembering? This note app is for you! Here you
          can easily take note.
        </p>
        <Button
          onClick={e => props.history.push('/recipes')}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            marginLeft: '22%'
          }}
        >
          Enter Site
        </Button>
      </Responsive>
      <Responsive minWidth={781} maxWidth={949}>
        <Header as='h1' style={headerStyles21()}>
          SMART
          <br />
          NOTES
        </Header>
        <p style={{ fontFamily: 'Roboto' }}>
          Do you have trouble remembering? This note app is for you! Here you
          can easily take note.
        </p>
        <Button
          onClick={e => props.history.push('/recipes')}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            marginLeft: '22%'
          }}
        >
          Enter Site
        </Button>
      </Responsive>
      <Responsive minWidth={501} maxWidth={780}>
        <Header as='h1' style={headerStyles3()}>
          SMART
          <br />
          NOTES
        </Header>
        <p style={{ fontFamily: 'Roboto', background: '#EFF3F4' }}>
          Do you have trouble remembering? This note app is for you! Here you
          can easily take note.
        </p>
        <Button
          onClick={e => props.history.push('/recipes')}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            marginLeft: '35%'
          }}
        >
          Enter Site
        </Button>
      </Responsive>
      <Responsive maxWidth={500}>
        <Header as='h1' style={headerStyles4()}>
          SMART
          <br />
          NOTES
        </Header>
        <Button
          onClick={e => props.history.push('/recipes')}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            margin: '0 auto',
            boxShadow: '0 0 20px white',
            border: '1px solid white'
          }}
        >
          Enter Site
        </Button>
      </Responsive>
    </LandingDiv>
  );
};

const Landing = args => (
  <Route
    {...args}
    render={props =>
      // Redirect to the Recipe List page if the user is logged in; otherwise display the nested Landing component defined above.
      props.userId ? (
        <Redirect
          to={{
            pathname: '/Notes',
            state: { from: props.location }
          }}
        />
      ) : (
        <LandingPage {...props} />
      )
    }
  />
);
const mapStateToProps = ({ userId }) => {
  return { userId };
};

export default withRouter(connect(mapStateToProps, {})(Landing));
