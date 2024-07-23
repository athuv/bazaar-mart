import { useEffect, useState } from "react";

import { getProductImages } from "@/lib/db/drizzle/queryActions";
import { ProductImages } from "@/lib/types/types";

function useProductImages(productId: string) {
  const [productImages, setProductImages] = useState<ProductImages[]>([]);

  useEffect(() => {
    const fetchProductImages = async () => {
      const productImages: ProductImages[] = await getProductImages(productId);
      setProductImages(productImages);
    };

    fetchProductImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { productImages };
}

export default useProductImages;
