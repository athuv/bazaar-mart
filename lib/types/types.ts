export interface Image {
  id: string;
  alt: string;
  src: string;
}

export interface ResponsiveImage {
  sliderImageId: number;
  imageAlt: string;
  imageMobile: string;
  imageDesktop: string;
}

export interface FeaturedImage {
  slider: ResponsiveImage[];
}

export interface ScrollImage {
  scroll: Image[];
}

export interface ProductList {
  id: string;
  title: string;
  amount: number;
  cents: number;
  price: number;
  discountPercentage: number;
  image: Image;
}

export interface Product {
  productList: ProductList[];
}
