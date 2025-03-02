import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

test('renders project title and description', () => {
  const project = { title: 'Test Project', description: 'Test Description' };
  render(<ProjectCard project={project} />);
  expect(screen.getByText('Test Project')).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();
});
