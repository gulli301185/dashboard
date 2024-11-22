export const Main = ({ children }) => {
  console.log(children);
  
  return (
    <div className="text-gray-700 bg-gray-100 p-4 sm:ml-64 flex gap-4 flex-col lg:flex-row transition-all duration-300 mt-14 dark:bg-gray-800">
      {children}
    </div>
  );
};
