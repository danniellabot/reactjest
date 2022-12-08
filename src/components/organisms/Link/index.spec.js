/**
 * @jest-environment jsdom
 * Unit tests for Link component
 */

 import React from 'react';
 import { render, fireEvent } from '@testing-library/react';
 import Link from './Link';
 
 describe('Link component', () => {
   it('should render without crashing', () => {
     render(<Link href="/" />);
   });
 
   it('should apply the activeClassName class when the current pathname matches the href prop', () => {
     const router = { pathname: '/home' };
     const { getByRole } = render(<Link href="/home" activeClassName="active" />);
 
     const link = getByRole('link');
     expect(link).toHaveClass('active');
   });
 
   it('should not apply the activeClassName class when the current pathname does not match the href prop', () => {
     const router = { pathname: '/home' };
     const { getByRole } = render(<Link href="/about" activeClassName="active" />);
 
     const link = getByRole('link');
     expect(link).not.toHaveClass('active');
   });
 
   it('should pass the className prop to the underlying NextLink component', () => {
     const { getByRole } = render(<Link href="/" className="link" />);
 
     const link = getByRole('link');
     expect(link).toHaveClass('link');
   });
 
   it('should pass any additional props to the underlying NextLink component', () => {
     const { getByRole } = render(<Link href="/" id="link" />);
 
     const link = getByRole('link');
     expect(link).toHaveAttribute('id', 'link');
   });
 
   it('should navigate to the correct URL when clicked', () => {
     const mockNavigate = jest.fn();
     const router = { pathname: '/home', navigate: mockNavigate };
     const { getByRole } = render(<Link href="/about" />);
 
     const link = getByRole('link');
     fireEvent.click(link);
     expect(mockNavigate).toHaveBeenCalledWith('/about');
   });
 });
 



