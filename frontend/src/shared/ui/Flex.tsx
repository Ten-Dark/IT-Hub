import React from 'react';
import styled from 'styled-components';

export interface FlexProps {
  direction?: 'row' | 'column';
  $justify?: string;
  $align?: string;
  $gap?: string;
  $margin?: string;
  children?: React.ReactNode;
  className?: string;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ $justify = 'flex-start' }) => $justify};
  align-items: ${({ $align = 'stretch' }) => $align};
  gap: ${({ $gap = '0' }) => $gap};
  margin: ${({ $margin = '0' }) => $margin};
`;

export const Flex: React.FC<FlexProps> = ({
  direction,
  $justify,
  $align,
  $gap,
  $margin,
  children,
  className,
}) => (
  <StyledFlex
    direction={direction}
    $justify={$justify}
    $align={$align}
    $gap={$gap}
    $margin={$margin}
    className={className}
  >
    {children}
  </StyledFlex>
);
