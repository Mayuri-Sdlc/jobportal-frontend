import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";
import hexagon6 from "../../images/home/stepperHexagons/hex-6.png";
import hexagon7 from "../../images/home/stepperHexagons/hex-7.png";
import hexagon8 from "../../images/home/stepperHexagons/hex-8.png";

const Chapter2 = (props) => {
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
        Chapter 2: Defeating the Inflation Monster: How Investing Saves the Day!
      </p>
      <p className="mt-5 font-semibold text-[22px]">Key Take Aways:</p>
      <br />
      <br />

      <p className="text-[18px] text-black">
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon1} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Inflation as a Value-Eroding Force: Inflation decreases the
            purchasing power of savings over time. This effect can make the
            saved money seem smaller as the cost of goods and services
            increases.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Investing as a Hedge Against Inflation: Investing in different
            assets can generate returns that outpace inflation, preserving the
            purchasing power of your money. The goal of investing should be to
            ensure the returns at least match, if not exceed, the rate of
            inflation.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Asset Classes with Strong Growth Potential: Investments like stocks
            can increase in value over time, helping to keep pace with or even
            outperform inflation.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Income-Generating Investments: Assets like bonds and real estate can
            provide steady income streams, offering a shield against inflation.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Inflation-Protected Securities: Certain investments, like Treasury
            Inflation-Protected Securities (TIPS), are specifically designed to
            counter inflation. They adjust their value in response to changes in
            the inflation rate, thereby maintaining the value of your
            investments.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon6} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Diversified Portfolio for Inflation Protection: A diversified
            portfolio with exposure to different asset classes, such as gold,
            commodities, a mix of stocks and bonds, REITs, and indexes like S&P
            500 or Bloomberg Aggregate Bond Index, can provide a buffer against
            inflation.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon7} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Risk Consideration: Each investment comes with its unique set of
            risks. Therefore, it's essential to evaluate your risk tolerance,
            investment goals, and seek professional advice if necessary.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon8} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Regular Monitoring and Review: Stay informed, monitor market
            conditions, and review your investment strategy regularly for
            effective navigation in an inflationary environment.
          </div>
        </div>
        <br />
        <b>What is Inflation?</b>
        <br />
        <br />
        Imagine you have a trusty savings jar where you diligently deposit your
        hard-earned money. You're a smart saver, and you want your money to grow
        over time. But there's a sneaky thief lurking around called inflation,
        ready to snatch away the value of your savings.
        <br />
        <br />
        Inflation is like a mischievous creature that causes prices to rise year
        after year. It's as if the cost of everything you want to buy keeps
        increasing, making your money feel smaller and smaller. That means the
        purchasing power of your savings diminishes over time. Nobody wants
        that!
        <br />
        <br />
        But fear not, for there is a hero in this story – investing! Investing
        is like your secret weapon against the inflation monster. It's a
        strategy that allows your money to not only keep up with inflation but
        also outpace it.
        <br />
        <br />
        When you invest, you're putting your money to work in different assets,
        like stocks, bonds, or mutual funds. These investments have the
        potential to grow and generate returns over time. And here's the
        exciting part: if you choose your investments wisely, they can grow
        faster than the rate at which prices rise (aka inflation).
        <br />
        <br />
        By earning returns that beat inflation, you're staying one step ahead of
        the game. It's like you're in a race against inflation, and with the
        right investments, you're sprinting while inflation is left panting
        behind you. You're not only preserving the value of your money but also
        increasing your purchasing power.
        <br />
        <br />
        Think of it this way: while inflation is busy inflating prices, your
        investments are inflating your savings. It's a battle for financial
        security, and investing is your secret weapon to emerge victorious.
        <br />
        <br />
        <b>How to protect against inflation?</b>
        <br />
        <br />
        Now, let's uncover some of the best strategies to defeat inflation. You
        can choose investments that have historically shown strong growth
        potential, like stocks. Companies that are successful in their endeavors
        can increase their value over time, helping you keep pace with or even
        outperform inflation.
        <br />
        <br />
        Another strategy is to embrace the power of income-generating
        investments. Bonds and real estate can provide steady income streams
        through interest payments or rental yields. These income-generating
        assets can act as a shield against inflation, as the income they
        generate often rises along with prices.
        <br />
        <br />
        But wait, there's more! You can also opt for special investments
        designed specifically to tackle the inflation monster. These superheroes
        go by the name of inflation-protected securities, such as
        inflation-indexed bonds or Treasury inflation-protected securities
        (TIPS). They have a built-in mechanism that adjusts their value in
        response to changes in the inflation rate. So, as inflation rises, the
        value of these investments rises too, allowing you to keep your
        hard-earned money safe from the clutches of the inflation beast.
        <br />
        <br />
        Remember, the goal is to make sure your returns on investments are at
        least equal to, if not greater than, the rate of inflation. By doing so,
        you're not only beating inflation but also safeguarding your financial
        future. Investing becomes your secret weapon, your shield, and your path
        to financial success in a world where prices keep marching upward.
        <br />
        <br />
        So, my friend, embrace the power of investing and embark on a journey to
        conquer inflation. It's a thrilling adventure where your money grows,
        your savings stay strong, and you emerge as the champion of your
        financial destiny.
        <br />
        <br />
        <b>Asset Classes & Inflation </b>
        <br />
        <br />
        Now that we have explored the importance of hedging against inflation,
        let's dive into some of the asset classes that can help protect your
        investments when inflation strikes. Remember, having a diversified
        portfolio with exposure to different asset classes is key to weathering
        the inflation storm.
        <br />
        <br />
        1. Gold: Gold has long been considered a hedge against inflation. In
        times of economic uncertainty, investors often flock to gold as a safe
        haven. Its value tends to hold up well during inflationary periods,
        making it an attractive option for those seeking protection.
        <br />
        <br />
        2. Commodities: Commodities, such as grain, precious metals, oil, and
        natural gas, have a unique relationship with inflation. As the price of
        commodities rises, so does the cost of the products produced from these
        commodities. Investing in commodity-related assets or exchange-traded
        funds (ETFs) can provide a hedge against inflation.
        <br />
        <br />
        3. A 60/40 Stock/Bond Portfolio: A balanced portfolio consisting of 60%
        stocks and 40% bonds is considered a conservative approach. While stocks
        offer potential growth, bonds can provide stability and income. This mix
        allows for some protection against inflation while still capturing
        growth opportunities.
        <br />
        <br />
        4. Real Estate Investment Trusts (REITs): REITs are companies that own
        and operate income-generating real estate properties. As property values
        and rental income tend to rise with inflation, REITs can be an effective
        hedge against inflation. Investing in a REIT ETF can provide exposure to
        a diversified portfolio of real estate assets.
        <br />
        <br />
        5. The S&P 500: The S&P 500 index represents the 500 largest publicly
        traded companies in the United States. Historically, stocks have offered
        the most upside potential in the long term, making them an attractive
        hedge against inflation. The S&P 500 index, or an ETF that tracks it,
        can provide exposure to a broad range of companies and industries.
        <br />
        <br />
        6. Real Estate Income: Investing in income-generating real estate
        properties can be an effective way to hedge against inflation. As
        property values and rental income rise, landlords can earn higher rental
        income over time, keeping pace with inflation. Real estate crowdfunding
        platforms or real estate investment platforms can provide opportunities
        for investing in real estate income.
        <br />
        <br />
        7. The Bloomberg Aggregate Bond Index: This index measures the
        performance of the U.S. bond market, including government, corporate,
        taxable, and municipal bonds. Investing in funds that replicate the
        index can provide exposure to a diversified bond portfolio, which can
        serve as a hedge against inflation.
        <br />
        <br />
        8. Leveraged Loans: Leveraged loans, also known as collateralized loan
        obligations (CLOs), are loans made to companies with high levels of debt
        or low credit ratings. These loans typically have a floating rate yield,
        which makes them a good hedge against inflation. Investing in a
        leveraged loan ETF can provide exposure to this asset class.
        <br />
        <br />
        9. Treasury Inflation-Protected Securities (TIPS): TIPS are U.S.
        Treasury bonds designed to protect investors against inflation. The
        principal value of TIPS adjusts based on changes in the inflation rate,
        providing a built-in protection mechanism. Investing in TIPS or
        TIPS-focused ETFs can help safeguard your investments from the erosive
        effects of inflation.
        <br />
        <br />
        While these asset classes offer potential protection against inflation,
        it's essential to understand that each investment comes with its own set
        of risks and considerations. Investors should carefully evaluate their
        risk tolerance, investment goals, and seek professional advice if
        needed.
        <br />
        <br />
        <b>Conclusion</b>
        <br />
        <br />
        In conclusion, protecting your investments from the impact of inflation
        is crucial for maintaining the value of your money over time. By
        diversifying your portfolio and considering assets that have
        historically performed well during inflationary periods, you can
        position yourself to beat inflation and preserve your purchasing power.
        Remember, staying informed, monitoring market conditions, and regularly
        reviewing your investment strategy are key to successfully navigating
        <br />
        In the next chapter, we will delve deeper into the details of each asset
        class. Until then, test your knowledge with our quiz below.
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
              props.onChange("test2");
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

          <div
            onClick={() => {
              props.onChange(3);
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
            <p className="text-txt text-white">Level 1 - Chapter 3</p>
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

export default Chapter2;
