export interface Category {
  categoryId: number;
  categoryName: string;
  parentId: number | null;
  iconDataURL: string;
}
