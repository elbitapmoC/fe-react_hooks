import Loading from "./Loading";

const LoadingButton = ({ onClick, loading, label }) => {
  return (
    <button
      type="button"
      className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      onClick={onClick}
    >
      {loading ? <Loading /> : label}
    </button>
  );
};

export default LoadingButton;
