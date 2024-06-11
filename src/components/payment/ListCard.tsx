"use client";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { createCheckOutSession } from "@/server-actions/payment/payment";
import { base } from "@/utils/config";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface ListingProps {
  title: string;
  description: string;
  price: number;
  image: string;
  productId: string;
}
const publishableKey = base.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";
const stripePromise = loadStripe(publishableKey);

const ListCard: React.FC<ListingProps> = ({
  image,
  title,
  description,
  price,
  productId,
}) => {
  const [state, formAction] = useFormState(createCheckOutSession, null);

  const searchParams = useSearchParams();
  const propertyId = searchParams.get("propertyId");

  useEffect(() => {
    async function stripe() {
      const stripe = await stripePromise;
      const result = await stripe?.redirectToCheckout({
        sessionId: state?.id,
      });
    }
    if (state?.id) {
      stripe();
      console.log(state?.id);
    }
  }, [state]);
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <div className="text-3xl">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="h-20 w-20"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-xl font-semibold">{price}</span>
        <form action={formAction}>
          <input type="hidden" name="price" value={price} />
          <input type="hidden" name="title" value={title} />
          <input type="hidden" name="description" value={description} />
          <input type="hidden" name="image" value={image} />
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="propertyId" value={propertyId ?? ""} />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default ListCard;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>{pending ? "Processing..." : "Buy Now"}</Button>
  );
}
