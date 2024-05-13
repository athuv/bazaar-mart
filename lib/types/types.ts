import { Country } from "country-list";
import { Dispatch, SetStateAction } from "react";

export interface Image {
  id: string;
  alt: string;
  src: string;
}

export interface ResponsiveImage {
  sliderImageId: number;
  imageAlt: string | null;
  imageMobile: string | null;
  imageDesktop: string | null;
}

export interface ScrollImage {
  scroll: Image[];
}

export interface BasicProductList {
  productId: number;
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
  categoryId: number;
  categoryName: string;
  parentId: number | null;
  iconDataURL: string | null;
  children?: Category[];
}

export type GetMainCategories = {
  limit?: number;
};

export interface CategoriesHook {
  mainCategories: Category[];
  categoriesTree: Category[];
}
