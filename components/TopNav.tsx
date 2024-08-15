import SearchIcon from "./icons/SearchIcon";

const TopNav = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-20 bg-primary z-10">
          <div className="flex justify-between items-center w-full h-full container">
            <div className="w-20 h-14 bg-muted"></div>
            <div className="relative w-72 h-10 rounded-md overflow-hidden">
                <div className="absolute top-0 left-0 flex justify-center items-center w-8 h-full">
                    <SearchIcon />
                </div>
                <input 
                    type="text" 
                    className="w-full h-full px-8 py-2 text-xs outline-none" 
                    placeholder="Search for topic"
                />
            </div>
            <div className="flex gap-10 justify-center items-center">
                <button 
                    className="w-24 h-10 bg-secondary font-bold text-white rounded-md"
                >
                    Login
                </button>
                <div className="w-10 h-10 rounded-full bg-muted"></div>
            </div>
          </div>
      </div>
    )
  }
  
  export default TopNav;
  