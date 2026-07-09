export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  startDate?:Date;
  priority: 1 | 2 | 3;
  status: 'draft' | 'active' | 'completed';
}
