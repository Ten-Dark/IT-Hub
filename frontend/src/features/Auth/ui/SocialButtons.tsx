import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.4rem;
  font-size: 1.2rem;
`;

const SocialButton = styled.div`
  //border: 1px solid rgba(0,0,0, .3);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    font-size: 1.3rem;
    transition: all 0.1s ease-in-out;
    height: 3.4rem;
    width: 3.4rem;
  }
`;

export const SocialButtons: React.FC = () => {
  const socialProviders = [
    { icon: FaFacebook, label: 'Facebook' },
    { icon: FaGoogle, label: 'Google' },
    { icon: FaGithub, label: 'GitHub' },
  ];

  return (
    <SocialContainer>
      {socialProviders.map(({ icon: Icon, label }) => (
        <SocialButton
          className={'SocialContainer'}
          key={label}
          aria-label={label}
        >
          {' '}
          <Icon />{' '}
        </SocialButton>
      ))}
    </SocialContainer>
  );
};
