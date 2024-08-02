import { useState } from "react";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";
import { FiChevronRight } from "react-icons/fi";

const Chapter1 = (props) => {
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
        Chapter 1 : A Beginner's Guide to Navigating the World of Investments
      </p>
      <p className="mt-5 font-semibold text-[22px]">Key Take Aways:</p>

      <div className="flex flex-1 lg:flex-row flex-col mt-3">
        <div className="lg:w-[15%] justify-center items-center">
          <img src={hexagon1} />
        </div>
        <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
          Diversify your portfolio across different asset classes to manage risk
          and increase potential returns.
        </div>
      </div>
      <div className="flex flex-1 lg:flex-row flex-col mt-3">
        <div className="lg:w-[15%] justify-center items-center">
          <img src={hexagon2} />
        </div>
        <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
          Understand the investment risk ladder to assess the risk levels of
          different asset classes.
        </div>
      </div>
      <div className="flex flex-1 lg:flex-row flex-col mt-3">
        <div className="lg:w-[15%] justify-center items-center">
          <img src={hexagon3} />
        </div>
        <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
          Consider the performance of asset classes in different economic
          environments when making investment decisions.
        </div>
      </div>

      <div className="flex flex-1 lg:flex-row flex-col mt-3">
        <div className="lg:w-[15%] justify-center items-center">
          <img src={hexagon4} />
        </div>
        <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
          Start with simpler investments like mutual funds or ETFs and gradually
          expand your portfolio as you gain experience and confidence.
        </div>
      </div>

      <div className="flex flex-1 lg:flex-row flex-col mt-3">
        <div className="lg:w-[15%] justify-center items-center">
          <img src={hexagon5} />
        </div>
        <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
          Index funds can be a practical option for hands-off investors, while
          more active investors may choose to create their own asset mix based
          on economic conditions.
        </div>
      </div>

      <p className="mt-5 font-semibold text-[25px]">Introduction</p>

      <p className="text-[18px] text-black">
        Embarking on the investment journey can be daunting for newcomers, given
        the myriad of asset choices and ever-evolving market dynamics. Grasping
        the fundamentals and distinguishing between various asset classes allows
        you to make <br />
        <br />
        In this article, we'll delve into different investment types, their
        inherent risks, and how to invest prudently and simply. By understanding
        the investment risk ladder and diversifying your portfolio, you'll be
        better equipped to navigate the investment landscape.
        <br />
        <br />
        <b>First, let's clarify a few terms:</b>
        <br />
        <br />
        <b>Asset Class:</b> An asset class is a category of financial
        instruments that share similar traits, behave comparably in the market,
        and are governed by the same laws and regulations.
        <br />
        <br />
        <b> Portfolio:</b> A portfolio encompasses the collection of financial
        assets owned by an investor, including stocks, bonds, cash, mutual
        funds, ETFs, real estate, and other alternative investments. Portfolios
        primarily serve to help investors achieve financial goals, manage risks,
        and optimise returns through diversification.
        <br />
        <br />
        <b>Diversification:</b>
        Diversification is an investment strategy aimed at spreading risk across
        various assets within a portfolio. By allocating capital among different
        asset classes and sectors, investors can diminish the impact of
        underperforming assets on their overall portfolio performance.
        Diversification aids in risk mitigation, as potential losses in one
        asset are counterbalanced by gains in another, resulting in more
        consistent returns over time.
        <br />
        <br />
        <b>Investment Risk:</b> Investment risk represents the potential for
        loss or variability in returns on an investment due to factors such as
        market fluctuations, economic conditions, and the specific
        characteristics of the investment itself. Now, let's examine the most
        common asset classes.
        <br />
        <br />
        <b>Asset Classes Defined:</b>
        <br />
        <br />
        <p className="ml-3">
          {" "}
          <b>1.Cash:</b> Cash and cash equivalents represent the most stable and
          least risky asset class, encompassing currency, savings accounts, and
          short-term debt instruments like certificates of deposit (CDs) and
          money market funds. Although they offer safety and liquidity, their
          returns often struggle to outpace inflation.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>2.Bonds:</b> Bonds are debt instruments symbolising loans made by
          investors to borrowers, such as corporations or governments. In return
          for their capital, investors receive periodic interest payments and
          the eventual return of their principal. Bonds provide a relatively
          stable income stream but can be influenced by fluctuating interest
          rates.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>3.Mutual Funds:</b> Mutual funds pool resources from multiple
          investors to acquire a diverse array of securities, including stocks
          and bonds. They can be passively managed, tracking an index, or
          actively managed by a portfolio manager who selects and allocates
          assets. Mutual funds offer diversification and professional
          management, but may carry higher fees compared to other investments.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>4.Exchange-Traded Funds (ETFs):</b> ETFs resemble mutual funds but
          trade on a stock exchange, allowing investors to buy and sell shares
          throughout the trading day. They typically track an underlying index
          or specific sector and offer diversification, liquidity, and lower
          fees compared to actively managed mutual funds.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>5.Stocks:</b> Stocks signify ownership shares in a company.
          Investors can profit from increases in the stock's price and potential
          dividend payments. While stocks can yield higher returns than bonds,
          they also entail greater risks due to market fluctuations and company
          performance.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>6.Alternative Investments: </b>
          This category encompasses a broad range of non-traditional
          investments, such as real estate, hedge funds, private equity funds,
          and commodities. These assets can offer diversification and
          potentially higher returns but often entail higher risks, lower
          liquidity, and substantial initial investments.
        </p>
        <br />
        <br />
        <b> Understanding the Investment Risk Ladder</b>
        <br />
        <br />
        The investment risk ladder categorises asset classes based on their
        relative riskiness.
        <br />
        <br />
        <b>Here are the major asset classes in ascending order of risk!</b>
        <br />
        <ul className="ml-10 font-bold" style={{ listStyle: "disc" }}>
          <li>Cash</li>
          <li>Bonds</li>
          <li>Mutual Funds</li>
          <li>Exchange-Traded Funds (ETFs)</li>
          <li>Stocks</li>
          <li>Alternative Investments</li>
        </ul>
        <br />
        <br />
        <b>How to Invest Sensibly, Suitably, and Simply</b>
        <br />
        <br />
        Diversifying your portfolio is essential, and starting with
        straightforward investments like mutual funds or ETFs is a wise initial
        step. As you gain experience and confidence, you can expand your
        portfolio to encompass individual stocks, real estate, and other
        alternative investments.
        <br />
        <br />
        For those who lack the time to monitor their portfolios daily, index
        funds that mirror the market can be a practical solution.
        <br />
        <br />
        More hands-on investors may opt for their own asset mix, aiming to
        capture excess returns by adjusting their portfolio weights to favour
        certain asset classes depending on the economic environment.
        <br />
        <br />
        <b>Asset Class Expectations Given the Economic Environment</b>
        <br />
        Understanding how various asset classes perform in different economic
        environments can help you make informed decisions about your
        investments:
        <p className="ml-3 mt-3">
          {" "}
          <b>1.Stocks and Bonds -</b> Stocks tend to excel in a robust economy,
          while bonds usually outperform stocks during economic downturns.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>2.Real Estate -</b> A strong economy and low unemployment can
          benefit real estate investments, but rising interest rates may dampen
          mortgage borrowing.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>3.Commodities - </b>Inflationary environments can lead to increased
          prices for certain commodities, making them an attractive inflation
          hedge.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>4.Alternative Investments -</b> Private equity, venture capital,
          hedge funds, and other non-traditional investments may outperform in
          an environment of low interest rates and high liquidity.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>5.Gold -</b> Gold is considered a safe-haven asset and performs
          well in times of economic uncertainty and geopolitical tensions.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>6.Cash and Cash Equivalents -</b> These assets perform relatively
          well in uncertain or volatile economic environments, as they provide
          stability and limit downside exposure to risk.
        </p>
        <br />
        In the next chapter, we will delve deeper into the details of each asset
        class. Until then, test your knowledge with our quiz below.
        <div className="flex sm:flex-row flex-col flex-1 justify-between mt-5 items-center">
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
              props.onChange("test1");
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
          <div className=" mt-5 sm:mt-0"> </div>
          <div
            onClick={() => {
              props.onChange(2);
            }}
            onMouseEnter={() => {
              setActive(2);
              handleMouseEnter();
            }}
            onMouseLeave={() => {
              setActive(2);
              handleMouseLeave();
            }}
            className="cursor-pointer bg-primary rounded-full p-3 pl-5 pr-5 flex items-center justify-center "
          >
            <p className="text-txt text-white">Level 1 - Chapter 2</p>
            <FiChevronRight
              className={`text-white transition-transform transform ${
                isHovered && active == 2 ? "translate-x-2" : ""
              }`}
            />
          </div>
        </div>
      </p>
    </div>
  );
};

export default Chapter1;
