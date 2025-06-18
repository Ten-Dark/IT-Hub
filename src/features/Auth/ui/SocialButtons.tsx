import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.4rem;
  font-size: 1.4rem;
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
        <div className={'SocialContainer'} key={label} aria-label={label}>
          <Icon />
        </div>
      ))}
    </SocialContainer>
  );
};
