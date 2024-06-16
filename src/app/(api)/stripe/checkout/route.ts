import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: process.env.API_VERSION!,
    });

    const { planId } = await request.json();

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: planId,
                quantity: 1,
            },
        ],
        mode: "subscription",
        success_url: "http://localhost:3000/price/success",
        cancel_url: "http://localhost:3000/price/cancel",
    });
    return NextResponse.json(session.url);
}
