import { Category } from './category';

export interface Task {
  id: number;
  label: string;
  description: string;
  category: Category;
  done: boolean | Date;
}
