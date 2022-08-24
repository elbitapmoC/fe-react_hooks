import { useContext, createContext, useState } from "react";

// So you want to use Context...
// Step 1: Initialize
const CountContext = createContext();

// Step 2: Create a wrapper.
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// Step 3: Create the children
const Child = () => (
  <section>
    <GrandChild />
  </section>
);

const GrandChild = () => (
  <main>
    <GreatGrandChild />
  </main>
);

const GreatGrandChild = () => (
  <aside>
    <ShowCount />
  </aside>
);

const ShowCount = () => {
  const { count } = useContext(CountContext);
  return <p>Current count: {count}</p>;
};

const CountButton = () => {
  const { setCount } = useContext(CountContext);
  return (
    <button
      className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      onClick={() => setCount((count) => count + 1)}
    >
      Add 1
    </button>
  );
};

// Step 3: END

// Final step | Place children inside wrapper.
const Context = () => {
  return (
    <CountProvider>
      <Child />
      <CountButton />
    </CountProvider>
  );
};

export default Context;
