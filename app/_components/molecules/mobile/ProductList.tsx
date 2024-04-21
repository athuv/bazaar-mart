import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/app/_components/atoms/shadcn/card";

import { Product } from "@/lib/types/types";
import { Star } from "lucide-react";

function ProductList({ productList }: Product) {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-y-4 py-4">
      {productList.map((_product) => (
        <Button
          className="h-fit whitespace-normal px-0 py-0 "
          key={_product.id}
          variant="ghost"
          asChild
        >
          <Link href="./">
            <Card className="w-[148px] rounded-md border-none">
              <Image
                src={_product.image.src}
                alt={_product.image.alt}
                width={300}
                height={300}
                className="rounded-t-md"
              />
              <CardHeader className="space-y-0 p-0 px-2 py-1">
                <h4 className="heading-4 line-clamp-2 font-bold">
                  {_product.title}
                </h4>
              </CardHeader>
              <CardContent className="flex flex-col px-2 py-1">
                <div className="truncate">
                  <span className="text-xs text-destructive">LKR</span>
                  <span className="text-lg font-bold text-destructive">
                    {` ${_product.amount}`}
                  </span>
                  <span className="text-xs text-destructive">{`.${_product.cents}`}</span>
                </div>
                <div>
                  <CardDescription className="flex items-center gap-1 truncate">
                    <span className="truncate line-through">
                      {(
                        _product.price +
                        (_product.price * _product.discountPercentage) / 100
                      ).toFixed(2)}
                    </span>
                    <span className="truncate text-xs">
                      {`${_product.discountPercentage}%`} off
                    </span>
                  </CardDescription>
                  <div className="flex items-center">
                    <Star size={12} color="none" fill="rgb(250 204 21 / 1)" />
                    <Star size={12} color="none" fill="rgb(250 204 21 / 1)" />
                    <Star size={12} color="none" fill="rgb(250 204 21 / 1)" />
                    <Star size={12} color="none" fill="rgb(250 204 21 / 1)" />
                    <Star size={12} color="none" fill="rgb(250 204 21 / 1)" />
                    <span className="text-[8px] text-muted-foreground">
                      (320)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default ProductList;
