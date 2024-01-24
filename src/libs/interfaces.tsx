export interface ICategory {
  _id: string;
  categoria: string;
  color: string;
}

export interface IExpense {
  _id: string;
  category_id: string;
  expense: number;
  year: number;
  month: number;
  day: number;
}

export interface ICategoryContext {
  categories: ICategory[];
  load: boolean;
  deleteCategory: Function | null;
  createCategory: Function | null;
  editCategory: Function | null;
}
