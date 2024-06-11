import ListCard from "@/components/payment/ListCard";
import { getAllProducts } from "@/server-actions/product/product";
import { CheckCircleIcon, FireExtinguisherIcon } from "lucide-react";

export default async function Payment() {
  const products = await getAllProducts();
  const listData = products?.products;
  console.log(listData);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Listings</h1>
      <div className="bg-white shadow rounded">
        {/* {status && status === "success" && (
          <div className="bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700">
            Payment Successful
          </div>
        )}
        {status && status === "cancel" && (
          <div className="bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700">
            Payment Unsuccessful
          </div>
        )} */}
        {listData?.map((item: any, index: number) => {
          return (
            <ListCard
              key={index}
              image={item?.imageUrl}
              title={item.name}
              description={item.description}
              price={item.price}
              productId={item.id}
            />
          );
        })}
      </div>
      <div className="bg-yellow-100 text-yellow-700 p-2 mt-2 rounded border mb-2 border-yellow-700">
        Use test card for testing.
        <p>Card Number: 4242 4242 4242 4242</p>
      </div>
    </div>
  );
}
