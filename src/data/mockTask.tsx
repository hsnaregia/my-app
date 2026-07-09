import type { Task } from "../../types/task";

export const Tasks:Task[] = [
  // Draft tasks (2)
  {
    id: '1',
    title: 'Write project proposal',
    description: 'Draft the initial project proposal for the new client',
    dueDate: new Date('2026-07-15'),
    startDate: new Date('2026-07-08'),
    priority: 1,
    status: 'draft'
  },
  {
    id: '2',
    title: 'Research competitor analysis',
    description: 'Gather data on top 5 competitors in the market',
    dueDate: new Date('2026-07-20'),
    startDate: new Date('2026-07-09'),
    priority: 2,
    status: 'draft'
  },

  // Active tasks (2)
  {
    id: '3',
    title: 'Develop API endpoints',
    description: 'Create RESTful API endpoints for user authentication',
    dueDate: new Date('2026-07-12'),
    startDate: new Date('2026-07-05'),
    priority:1,
    status: 'active'
  },
  {
    id: '4',
    title: 'Design UI mockups',
    description: 'Create high-fidelity mockups for the dashboard',
    dueDate: new Date('2026-07-14'),
    startDate: new Date('2026-07-06'),
    priority: 3,
    status: 'active'
  },

  // Completed tasks (2)
  {
    id: '5',
    title: 'Setup development environment',
    description: 'Configure Docker and install all necessary dependencies',
    dueDate: new Date('2026-07-05'),
    startDate: new Date('2026-07-01'),
    priority: 2,
    status: 'completed'
  },
  {
    id: '6',
    title: 'Initial client meeting',
    description: 'Conduct kickoff meeting with stakeholders',
    dueDate: new Date('2026-07-03'),
    startDate: new Date('2026-07-03'),
    priority:1,
    status: 'completed'
  }
];