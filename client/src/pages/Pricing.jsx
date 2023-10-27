// Pricing.jsx
import React from "react";
import Layout from '../components/Layout';
import "../index.css";

// PricingHeader Component
const PricingHeader = () => (
  <div className="pricing-header px-3 py-3 pt-md-5 pd-md-4 mx-auto text-center">
    <h1 className="display-4">Pricing</h1>
    <p className="lead">
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor aut ut vero,
      voluptatem corrupti, eius natus pariatur
      commodi in nesciunt itaque accusamus
      reprehenderit nisi. Qui consectetur maiores
      ipsam expedita inventore!
    </p>
  </div>
);

// Plan Component
const Plan = (props) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">
          {props.header}
        </h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {`$${props.price}`}
          <small className="text-muted">
            / mo
          </small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {props.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <button
          className={`btn btn-lg btn-block ${
            props.outline
              ? "btn-outline-primary"
              : "btn-primary"
          }`}
          type="button"
        >
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
};

// Plans Component
const Plans = () => {
  const planContents = [
    {
      header: "Free",
      price: 0,
      features: [
        "10 users included",
        "2 GB of storage",
        "Email support",
        "Help center access"
      ],
      buttonLabel: "Sign up for free",
      outline: true
    },
    {
      header: "Pro",
      price: 15,
      features: [
        "20 users included",
        "10 GB of storage",
        "Priority email support",
        "Help center access"
      ],
      buttonLabel: "Get started",
      outline: false
    },
    {
      header: "Enterprise",
      price: 29,
      features: [
        "30 users included",
        "15 GB storage",
        "Phone and email support",
        "Help center access"
      ],
      buttonLabel: "Contact us",
      outline: false
    }
  ];

  return (
    <div className="card-deck mb-3 text-center">
      {planContents.map((plan) => (
        <Plan
          key={plan.header}
          header={plan.header}
          price={plan.price}
          features={plan.features}
          buttonLabel={plan.buttonLabel}
          outline={plan.outline}
        />
      ))}
    </div>
  );
};

// Main Pricing Component
const Pricing = () => {
  return (
    <Layout>
      <div className="App" id="top">
        <PricingHeader />
        <div className="container">
          <Plans />
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
