import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const PersonDataContainer = styled.div`
  padding: 10px;
`;

const ProfilePhoto = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;

const PersonName = styled.h2`
  margin: 0;
`;
const PersonPosition = styled.h3`
  margin: 0;
`;
const PersonEmail = styled.a``;

const PersonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Person = props => (
  <Card>
    <ProfilePhoto src={props.photo} alt={props.name} />
    <PersonDataContainer>
      <PersonName>{props.name}</PersonName>
      <PersonPosition>{props.position}</PersonPosition>
      <PersonEmail href={`mailto:${props.email}`}>{props.email}</PersonEmail>
    </PersonDataContainer>
  </Card>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Person;

export { PersonCardContainer };
