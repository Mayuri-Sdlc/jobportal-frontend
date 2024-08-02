import { useState } from "react";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";
import { FiChevronRight } from "react-icons/fi";

const Chapter8 = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [active, setActive] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-col text-black flex-1">
      <p className="font-bold text-[25px]">
        Chapter 8: Asset Allocation: Balancing Risk and Reward
      </p>

      <p className="mt-5 font-semibold text-[22px]">Key Take Aways:</p>
      <br />

      <p className="text-[18px] text-black">
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon1} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Asset allocation is an investment strategy that balances risk and
            reward by distributing a portfolio's assets based on an individual's
            goals, risk tolerance, and investment horizon.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            The three main asset classes—equities, fixed-income, and cash and
            equivalents—have different levels of risk and return.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Strategic asset allocation is a long-term investment approach that
            sets target allocations for different asset classes.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Tactical asset allocation is a more active approach that involves
            adjusting asset allocations based on short-term market conditions or
            economic opportunities.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Asset allocation funds provide investors with a diversified
            portfolio of investments across various asset classes.
          </div>
        </div>
        <br />
        <br />
        <b>Introduction</b>
        <br />
        <br />
        Asset allocation is a fundamental investment strategy that aims to
        balance risk and reward by distributing a portfolio's assets according
        to an individual's goals, risk tolerance, and investment horizon. The
        three main asset classes—equities, fixed-income, and cash and
        equivalents—behave differently over time, offering varying levels of
        risk and return.
        <br />
        <br />
        <b>Understanding Asset Allocation</b>
        <br />
        <br />
        Asset allocation is a dynamic process that involves deciding where to
        put money to work in the market. It aims to balance risk and reward by
        apportioning a portfolio's assets according to an individual's goals,
        risk tolerance, and investment horizon. The three main asset
        classes—equities, fixed-income, and cash and equivalents—have different
        levels of risk and return, so each will behave differently over time.
        <br />
        <br />
        <b>Importance of Asset Allocation</b>
        <br />
        <br />
        Asset allocation is a critical part of creating and balancing your
        investment portfolio. It is one of the main factors that lead to your
        overall returns—even more than choosing individual stocks. Establishing
        an appropriate asset mix of stocks, bonds, cash, and real estate in your
        portfolio is a dynamic process. As such, the asset mix should reflect
        your goals at any point in time.
        <br />
        <br />
        <b>Strategic Asset Allocation</b>
        <br />
        <br />
        Strategic asset allocation is a long-term investment approach that sets
        target allocations for different asset classes. These targets are
        determined by considering factors such as risk tolerance, investment
        objectives, and time horizon. Strategic asset allocation establishes a
        diversified portfolio aligned with an investor's goals.
        <br />
        <br />
        <b>Tactical Asset Allocation</b>
        <br />
        <br />
        Tactical asset allocation is a more active approach that involves
        adjusting asset allocations based on short-term market conditions or
        economic opportunities. Investors use tactical allocation to take
        advantage of market anomalies or capitalize on specific sectors'
        strength for potentially higher returns.
        <br />
        <br />
        <b>Synergy of Strategic and Tactical Asset Allocation</b>
        <br />
        <br />
        Strategic and tactical asset allocation can work hand-in-hand to
        optimize portfolio performance. Strategic allocation forms the
        foundation, providing a long-term framework, while tactical shifts
        within asset classes allow investors to capitalize on short-term
        opportunities.
        <br />
        <br />
        <b>Asset Allocation Funds</b>
        <br />
        <br />
        An asset allocation fund is a fund that provides investors with a
        diversified portfolio of investments across various asset classes. The
        asset allocation of the fund can be fixed or variable among a mix of
        asset classes, meaning that it may be held to fixed percentages of asset
        classes or allowed to go overweight on some depending on market
        conditions.
        <br />
        <br />
        <b>Conclusion</b>
        <br />
        <br />
        Asset allocation is a crucial aspect of investing. It is one of the most
        important decisions that investors make, as the selection of individual
        securities is secondary to the way that assets are allocated in stocks,
        bonds, and cash and equivalents. By understanding and implementing
        strategic and tactical asset allocation effectively, investors can
        construct resilient portfolios that thrive in various market
        environments
        <br />
        <br />
        <b> Facts & Tips:</b>
        <br />
        <br />
        <b>Fact:</b> Asset allocation is one of the main factors that lead to
        your overall returns—even more than choosing individual stocks.
        <br />
        <br />
        <b>Tip:</b> Regularly review and rebalance your portfolio to adapt to
        changing market conditions.
        <br />
        <br />
        <b>Fact:</b> Strategic and tactical asset allocation can work
        hand-in-hand to optimize portfolio performance.
        <br />
        <br />
        <b>Tip:</b> Consider your risk tolerance, investment objectives, and
        time horizon when determining your asset allocation.
        <br />
        <br />
        <b>Fact:</b> Asset allocation funds can be fixed or variable among a mix
        of asset classes.
        <div className="flex flex-1 justify-between mt-5 items-center">
          <div
            onMouseEnter={() => {
              setActive(1);
              handleMouseEnter();
            }}
            onMouseLeave={() => {
              setActive(1);
              handleMouseLeave();
            }}
            onClick={() => {
              props.onChange("test8");
            }}
            className="cursor-pointer bg-primary rounded-full p-3 pl-5 pr-5 flex items-center justify-center "
          >
            <p className="text-txt text-white">Test your knowledge </p>

            <FiChevronRight
              className={`text-white transition-transform transform ${
                isHovered && active == 1 ? "translate-x-2" : ""
              }`}
            />
          </div>

          <div className="cursor-pointer bg-transparent rounded-full p-3 pl-5 pr-5 flex items-center justify-center "></div>
        </div>
      </p>
    </div>
  );
};

export default Chapter8;
