import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import FrontPage from './pages/FrontPage';
import Innovation from './pages/Innovation';

import Auth from './utils/auth';


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function ProtectedPortfolioRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/signup');
    }
  }, [navigate]);

  if (Auth.loggedIn()) {
    return <Portfolio />;
  } else {
    return null;
  }
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<ProtectedPortfolioRoute />} />  {/* Use the ProtectedPortfolioRoute component here */}
          <Route path="/HomePage" element={<FrontPage />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
