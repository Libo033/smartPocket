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

export interface IIncome {
  _id: string;
  income: number;
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

export interface IMovementsContext {
  incomes: IIncome[];
  expenses: IExpense[];
  load: boolean;
  createIncome: (
    income: number,
    day: number,
    month: number,
    year: number
  ) => void;
  createExpense: (
    category_id: string,
    expense: number,
    day: number,
    month: number,
    year: number
  ) => void;
  editIncome: (income: IIncome) => void;
  editExpense: (expense: IExpense) => void;
  deleteIncome: (id: string) => void;
  deleteExpense: (id: string) => void;
}
