import { useEffect, useState } from "react";

const NumType = ({ count }) => {
  if (count % 2 === 0) return <h1>Even</h1>;
  else return <h1>Odd</h1>;
};

const Counter = ({ title, description }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Use effect ran.");
  }, [count]);
  // We don't always want this function to run.
  // It'd be best to have this ran after a single render.
  // Dependency Arrays - An array that can be passed into the useEffect hook.
  // [] - Empty string is good when we only want this useHook function to run on the first render.
  // when we add name into the [], this becomes our new dependency.
  // when the name changes, the function will run again.
  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <aside>{description}</aside>
      <p className="mt-4 mb-4 text-2xl italic">{count}</p>
      <p>{count % 2 === 0 ? <h1>Even</h1> : <h1>Odd</h1>}</p>
      {/* <NumType/> */}
      <button
        type="button"
        onClick={handleClick}
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      >
        Add 1
      </button>
    </>
  );
};

export default Counter;
