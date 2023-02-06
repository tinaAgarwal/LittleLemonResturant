import { render, screen } from '@testing-library/react';
import ReservationPage from './Components/reservation/ReservationPage';

test('Renders from heading', () => {
  render(<ReservationPage />);
  const headingElement = screen.getByText("Book Your Table");
  expect(headingElement).toBeInTheDocument();
});