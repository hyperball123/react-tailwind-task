// eslint-disable-next-line
function Button({ children }) {
  return (
    <button className="border-2 border-violet-500 hover:border-violet-600 focus:border-violet-600 focus:ring-2 focus:ring-violet-500 
    hover:ring-2 hover:ring-violet-500 text-violet-500 hover:text-violet-600 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline shadow-md transition-all duration-200">
      {children}
    </button>
  );
}

export default Button;
