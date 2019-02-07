import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Responsive } from 'semantic-ui-react';
import styled from 'styled-components';

const CardDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black;
  margin: 10px;
`;

const DisplayNoteCard = props => {
  const handleCopy = () => {
    const copiedNote = {
      title: props.note.title,
      textBody: props.note.textBody
    };

    props.submitAdd(copiedNote);
  };

  return (
    <CardDiv>
      <Link to={`/Notes/${props.note.id}`} style={{ textDecoration: 'none' }}>
        {/* <h3> {props.note.title} </h3>
        <p> {props.note.textBody}</p> */}

        <Card
          style={{
            // width: '200px',
            // height: '200px',
            margin: '10px',
            overflow: 'hidden',
            fontFamily: 'Roboto'
          }}
        >
          <Card.Content style={{ paddingTop: '4px' }}>
            <Card.Header
              as='h4'
              style={{
                height: '20px',
                overflow: 'hidden'
                // fontSize: '1.1rem'
              }}
            >
              {props.note.title}
            </Card.Header>
            <p
              style={{
                height: '40px',
                overflow: 'hidden'
                // fontSize: '1.1rem'
              }}
            >
              {' '}
              {props.note.textBody}
            </p>
          </Card.Content>
        </Card>
      </Link>

      <Button
        style={{
          width: '150px',
          alignSelf: 'center'
        }}
        onClick={handleCopy}
      >
        Copy
      </Button>
    </CardDiv>
  );
};

export default DisplayNoteCard;
