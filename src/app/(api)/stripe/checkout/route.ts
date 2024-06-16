import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
    const successURL = new URL('/price/success', request.url);
    const cancelURL = new URL('/price/cancel', request.url);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const { planId } = await request.json();

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: planId,
                quantity: 1,
            },
        ],
        mode: "subscription",
        success_url: successURL.protocol + "//" + successURL.host + successURL.pathname,
        cancel_url: cancelURL.protocol + "//" + cancelURL.host + cancelURL.pathname,
    });
    return NextResponse.json(session.url);
}
