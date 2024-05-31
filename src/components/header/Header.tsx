export const Header = () => {
  return (
    <div className="flex justify-between items-center pb-9">
      <h1 className="text-gray">Found 234 countries</h1>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by Name, Region, Subregion"
        className="w-[340px] p-3 pl-11 rounded-xl text-white placeholder:text-gray bg-light-black bg-no-repeat text-sm"
        style={{
          backgroundImage: 'url("/Search.svg")',
          backgroundPosition: '8px'
        }}
      />
    </div>
  );
};
