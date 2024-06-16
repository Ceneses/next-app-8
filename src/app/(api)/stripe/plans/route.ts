import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2022-11-15",
    });
    const stripeResponse = await stripe.prices.list({
        type: 'recurring',
        product: 'prod_QAyN348O4C9jHb'
    });
    const plans = stripeResponse.data;
    return NextResponse.json(plans);
}
