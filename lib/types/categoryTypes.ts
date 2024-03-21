interface CategoryItems {
  id: string;
  category: string;
  link: string;
  imgSrc: string;
}

export interface Category {
  categoryList: CategoryItems[];
}
