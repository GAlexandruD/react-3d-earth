const TopSection = () => {
  return (
    <div className="bg-yellow-100 bg-opacity-20 flex flex-col items-center justify-center w-full h-full absolute top-0 left-0 text-white text-center">
      <h1 className="text-5xl">This is the title</h1>
      <p className="text-2xl m-4">This is the paragraph</p>
      <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mb-20">
        Button
      </button>
    </div>
  );
};

export default TopSection;
