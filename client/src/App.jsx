import { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
}
);

const httpLink = createHttpLink({
  uri: '/graphql',
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ApolloProvider client={client}>
      <SignupForm />
      <LoginForm />
      </ApolloProvider>
    </>
  );
}

export default App;
