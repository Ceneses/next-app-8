"use client";
import { FormEvent, useEffect, useState } from "react";

const PlanCard = ({ plan }: { plan: Price }) => {
	const buyPlan = async (e: FormEvent) => {
		e.preventDefault();
		const res = await fetch("/stripe/checkout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ planId: plan.id }),
		});
		const stripeUrl = await res.json();
		console.log("URL = ", stripeUrl);
		window.location.assign(stripeUrl);
	};

	return (
		<div className="flex flex-col p-6 mx-auto  text-center rounded-lg border shadow border-gray-600 bg-gray-800 text-white">
			<h3 className="mb-4 text-2xl font-semibold">{plan.nickname}</h3>
			<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400"></p>
			<div className="flex justify-center items-baseline my-8">
				<span className="mr-2 text-5xl font-extrabold">
					$ {plan.unit_amount / 100}
				</span>
				<span className="text-gray-500 dark:text-gray-400">
					/ One Time
				</span>
			</div>
			{/* <!-- List --> */}
			<ul role="list" className="mb-8 space-y-4 text-left">
				<li className="flex items-center space-x-3">
					{/* <!-- Icon --> */}
					<svg
						className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						></path>
					</svg>
					<span>Individual configuration</span>
				</li>
				<li className="flex items-center space-x-3">
					{/* <!-- Icon --> */}
					<svg
						className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						></path>
					</svg>
					<span>No setup, or hidden fees</span>
				</li>
				<li className="flex items-center space-x-3">
					{/* <!-- Icon --> */}
					<svg
						className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						></path>
					</svg>
					<span>
						Team size:{" "}
						<span className="font-semibold">1 developer</span>
					</span>
				</li>
				<li className="flex items-center space-x-3">
					{/* <!-- Icon --> */}
					<svg
						className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						></path>
					</svg>
					<span>
						Premium support:{" "}
						<span className="font-semibold">6 months</span>
					</span>
				</li>
				<li className="flex items-center space-x-3">
					{/* Icon  */}
					<svg
						className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						></path>
					</svg>
					<span>
						Free updates:{" "}
						<span className="font-semibold">6 months</span>
					</span>
				</li>
			</ul>
			<button
				onClick={buyPlan}
				className="text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
			>
				Get started
			</button>
		</div>
	);
};

export const Plans = () => {
	const [plans, setPlans] = useState<Price[]>([]);

	const fetchPlans = async () => {
		const res = await fetch("/stripe/plans", {
			method: "GET",
		});
		const data = await res.json();
		setPlans(data);
	};

	useEffect(() => {
		fetchPlans();
	}, []);

	return (
		<div className="grid lg:grid-cols-3 gap-6">
			{plans?.map((plan: Price) => (
				<PlanCard key={plan.id} plan={plan} />
			))}
		</div>
	);
};
