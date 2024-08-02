const HomeexploreBtn = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="flex lg:justify-start justify-start w-full cursor-pointer"
    >
      {!props.loading ? (
        <div className="flex flex-row bg-gradient-to-r from-[#2626F4] hover:bg-gradient-to-r active:bg-gradient-to-r  active:to-[#2626F4] hover:from-[#2626F4] hover:to-[#00DDE2] to-[#00DDE2] rounded-[10px] lg:h-[50px] lg:w-[170px] md:h-[30px] md:w-[140px] xxs:w-[120px] xxs:h-[30px] justify-center items-center">
          <p className="text-white font-[500] xl:text-[20px] text-[14px] ml-1">
            {" "}
            {props.title}{" "}
          </p>
        </div>
      ) : (
        <div className="flex flex-row bg-gradient-to-r from-[#2626F4] to-[#00DDE2] rounded-[10px] h-11 w-32 mt-2 justify-center items-center">
          <p className="text-white font-medium ml-1"> Loading </p>
        </div>
      )}
    </div>
  );
};

export default HomeexploreBtn;
