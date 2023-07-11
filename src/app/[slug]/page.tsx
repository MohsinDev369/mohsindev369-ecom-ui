import { Button } from "@/components/ui/button";
import products from "@/dum_db/db";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }): any {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {products.map((product, i) => {
        if (product.category === params.slug) {
          return (
            <div key={i}>
              {" "}
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={product.src}
                  alt={product.namee}
                  width={300}
                  height={300}
                  className=""
                />
                <div className="product-info">
                  <h3 className="text-lg font-bold">{product.namee}</h3>
                  {product.price && (
                    <p className="text-gray-500">{product.price}</p>
                  )}
                </div>
                <Button>View Product</Button>
              </Link>
            </div>
          );
        } else if (params.slug === "all_products")
          return (
            <div key={i}>
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={product.src}
                  alt={product.namee}
                  width={300}
                  height={300}
                  className=""
                />
                <div className="product-info">
                  <h3 className="text-lg font-bold">{product.namee}</h3>
                  {product.price && (
                    <p className="text-gray-500">{product.price}</p>
                  )}
                </div>
                <Button>View Product</Button>
              </Link>
            </div>
          );
      })}
    </div>
  );
}
