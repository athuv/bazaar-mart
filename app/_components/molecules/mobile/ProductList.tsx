import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/app/_components/atoms/shadcn/card";

import { BasicProductList } from "@/lib/types/types";
import { getBasicProducts } from "@/lib/db/drizzle/queryActions";

import { Rating } from "@smastrom/react-rating";

async function ProductList() {
  const products: BasicProductList[] = await getBasicProducts();

  return (
    <div className="grid auto-rows-[276px] grid-cols-[repeat(auto-fill,minmax(148px,1fr))] justify-items-center gap-2 gap-y-3 py-4">
      {[...products, ...products, ...products, ...products].map((_product) => {
        return (
          <Button
            className="h-[276px] w-[148px] whitespace-normal px-0 py-0"
            key={_product.productId}
            variant="ghost"
            asChild
          >
            <Link href={`/product/${_product.productId}`}>
              <Card className="w-[148px] rounded-md border-none">
                <Image
                  src={`${process.env.PRODUCT_GALLERY}/${_product.productId}/${_product.primaryImageUrl}`}
                  alt={_product.primaryImageAlt!}
                  width={148}
                  height={148}
                  className="h-[148px] w-[148px] rounded-t-md object-contain"
                />

                <CardHeader className="space-y-0 p-0 px-2 py-1">
                  <h4 className="heading-4 line-clamp-2 font-bold">
                    {_product.title}
                  </h4>
                </CardHeader>
                <CardContent className="flex h-20 flex-col px-2 py-1">
                  <div className="h-7 truncate">
                    <span className="font-bold text-destructive">Rs</span>
                    <span className="text-lg font-bold text-destructive">
                      {`.${_product.finalPrice}`}
                    </span>
                  </div>
                  {_product.discountAmount && (
                    <div className="flex h-5 items-center gap-1 truncate">
                      <span className="truncate line-through">
                        Rs.{_product.priceInAmount}
                      </span>

                      <span className="truncate text-xs">
                        {_product.discountPercentage &&
                          `-${_product.discountPercentage}%`}
                      </span>
                    </div>
                  )}
                  <div className="flex h-6 items-center justify-start">
                    <div className="flex h-4">
                      <Rating
                        style={{ maxWidth: 65 }}
                        value={_product.averageReview}
                        readOnly
                      />
                    </div>

                    <div className="flex h-4 items-center text-muted-foreground">
                      <span className="text-xs">{_product.averageReview}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {`(${_product.totalReviews})`}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default ProductList;
