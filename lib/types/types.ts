export interface Image {
  id: string;
  alt: string;
  src: string;
}

export interface ResponsiveImage {
  sliderImageId: string;
  imageAlt: string | null;
  imageMobileUrl: string | null;
  imageDesktopUrl: string | null;
}

export interface SliderImage extends ResponsiveImage {
  sliderImageId: string;
  isActive?: boolean;
}

export interface BasicProductList {
  productId: string;
  title: string;
  priceInAmount: number;
  totalReviews: number;
  discountPercentage: number;
  discountAmount: number;
  finalPrice: number;
  averageReview: number;
  primaryImageUrl: string;
  primaryImageAlt: string;
}

export interface Category {
  categoryId: string;
  categoryName: string;
  parentId: string | null;
  iconDataUrl: string | null;
  children?: Category[];
}

export type GetMainCategories = {
  limit?: number;
};

export interface CategoriesHook {
  mainCategories: Category[];
  categoriesTree: Category[];
}
