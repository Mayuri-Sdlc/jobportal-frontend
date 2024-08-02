import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";

const Chapter14 = (props) => {
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
        Chapter 14: Creating and Managing an Investment Portfolio
      </p>
      <br />

      <br />

      <p className="mt-5 font-semibold text-[22px]">Key Take Aways:</p>
      <br />
      <p className="text-[18px] text-black">
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon1} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Strategic Portfolio Construction:
            <br />
            Constructing a portfolio requires a meticulous approach to align
            investments with financial goals and risk tolerance, serving as a
            cornerstone for long-term financial prosperity.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Dynamic Asset Allocation:
            <br />
            Asset allocation is pivotal, requiring diversification and periodic
            adjustments to balance risk and returns effectively, responding to
            market dynamics and personal needs.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Continuous Oversight and Learning:
            <br />
            Regular monitoring, informed decision-making, and, if needed,
            professional advice are crucial for maintaining portfolio alignment
            with financial objectives and market trends.
          </div>
        </div>
        <br />
        <br />
        <b>Introduction:</b>
        <br />
        <br />
        An Investment Portfolio is a collection of investments that can help
        individuals achieve their financial goals. It provides a structured
        approach to managing assets and optimising risk-adjusted returns. This
        guide will walk you through the process of creating and managing an
        Investment Portfolio, covering key steps and considerations along the
        way.
        <br />
        <br />
        <b>Step 1: Define Your Financial Goals and Risk Tolerance</b>
        <br />
        <br />
        <b> Defining your financial goals:</b>
        <br />
        - Begin by identifying your short-term and long-term financial
        objectives. Are you saving for retirement, a down payment on a house,
        starting a business, or funding your children's education?
        <br />
        - Set specific, measurable, achievable, relevant, and time-bound (SMART)
        goals that align with your vision for the future.
        <br />
        - Consider factors such as the desired timeline, the amount of money
        needed, and any potential life events that may impact your goals.
        <br />
        <br />
        <b> Assessing your risk tolerance:</b>
        <br />
        - Understand your comfort level with investment risk. This involves
        evaluating your ability to withstand market fluctuations and potential
        losses.
        <br />
        - Consider your investment time horizon. Longer time horizons may allow
        for a higher tolerance for risk as there is more time to recover from
        any downturns.
        <br />
        - Assess your financial situation, including income stability, expenses,
        and any existing financial commitments.
        <br />
        - Take into account personal factors such as age, financial obligations,
        and investment experience.
        <br />
        <br />
        <b>Step 2: Determine Asset Allocation</b>
        <br />
        <br />
        <b>Understanding asset allocation:</b>
        <br />
        - Asset allocation is the strategic distribution of your investments
        across different asset classes, such as stocks, bonds, cash, and
        alternative investments.
        <br />
        - The goal is to create a diversified portfolio that balances risk and
        potential returns based on your goals and risk tolerance.
        <br />
        - Asset allocation is a dynamic process that may change over time as
        market conditions, your financial situation, or risk tolerance evolves.
        <br />
        <br />
        <b>Considerations for asset allocation:</b>
        <br />
        - Review historical performance and risk characteristics of different
        asset classes. Understand how they have performed in different market
        conditions.
        <br />
        - Take into account the correlation between asset classes. Ideally, you
        want to select assets that have low correlations, as they may react
        differently to market events.
        <br />
        - Allocate assets based on your risk tolerance and investment
        objectives. A more conservative investor may have a higher allocation to
        bonds and cash, while a more aggressive investor may have a higher
        allocation to stocks.
        <br />
        - Determine the percentage allocation to each asset class based on your
        risk profile and the desired balance between potential returns and risk
        management.
        <br />
        <br />
        <b>Step 3: Select Investments</b>
        <br />
        <br />
        <b>Choosing specific investments:</b>
        <br />
        - Once you have determined your asset allocation, select specific
        investments within each asset class.
        <br />
        - For stocks, consider factors such as the company's financial health,
        growth prospects, industry trends, and valuation metrics.
        <br />
        - Bonds can include government bonds, corporate bonds, or bond funds.
        Evaluate credit quality, duration, yield, and interest rate risk.
        <br />
        - Explore alternative investments like real estate investment trusts
        (REITs), commodities, or private equity if they align with your risk
        tolerance and long-term objectives.
        <br />
        - Consider investment vehicles such as mutual funds or exchange-traded
        funds (ETFs) that offer diversification within an asset class.
        <br />
        <br />
        <b>Research and due diligence:</b>
        <br />
        - Conduct thorough research on potential investments. Read company
        reports, analyse financial statements, and understand the investment
        strategy.
        <br />
        - Consider the investment's historical performance, fees, and expenses,
        as well as the track record and reputation of the fund manager or
        investment team.
        <br />
        - Evaluate the investment's risk-return characteristics and how it
        aligns with your asset allocation and risk tolerance.
        <br />
        <br />
        <b> Step 4: Monitor and Rebalance</b>
        <br />
        <br />
        <b> Regular portfolio monitoring:</b>
        <br />
        - Monitor the performance of your investments regularly, keeping track
        of their returns, volatility, and any significant news or events that
        may impact their value.
        <br />
        - Review your portfolio at least annually, or more frequently if market
        conditions or personal circumstances change significantly.
        <br />
        - Assess the progress towards your financial goals and whether any
        adjustments are necessary.
        <br />
        <br />
        <b>Rebalancing your portfolio:</b>
        <br />
        - Rebalancing involves adjusting the asset allocation of your portfolio
        to maintain the desired risk and return profile.
        <br />
        - Compare the current allocation to the target allocation set in the
        asset allocation plan. If there are significant deviations, consider
        rebalancing.
        <br />
        - Sell investments that have become overweight and purchase investments
        in underweight asset classes to bring the portfolio back in line with
        the target allocation.
        <br />
        - Rebalancing helps manage risk, control portfolio drift, and ensures
        that your investments align with your long-term strategy.
        <br />
        <br />
        <b>Step 5: Seek Professional Guidance if Needed</b>
        <br />
        <br />
        <b>Benefits of professional guidance:</b>
        <br />
        - If you feel overwhelmed or lack expertise, consider consulting with a
        financial advisor or investment professional.
        <br />
        - A professional can provide personalised advice based on your goals,
        risk tolerance, and financial situation.
        <br />
        - They can offer insights, help construct and manage your portfolio, and
        provide guidance on adjusting asset allocation and investments as
        needed.
        <br />
        <br />
        <b>Choosing the right advisor:</b>
        <br />
        - Research and interview multiple advisors to find someone with the
        appropriate qualifications, experience, and a fiduciary duty to act in
        your best interest.
        <br />
        - Understand their fee structure and ensure it aligns with your needs.
        <br />
        - Clarify the level of involvement you desire, whether you prefer a
        hands-on or hands-off approach to portfolio management.
        <br />
        <br />
        <b>Step 6: Stay Informed and Educate Yourself</b>
        <br />
        <br />
        <b>Continuous learning:</b>
        <br />
        - Stay informed about financial markets, economic trends, and investment
        news that may impact your portfolio.
        <br />
        - Read books, articles, and reputable online resources to enhance your
        knowledge of investment strategies, asset classes, and risk management
        techniques.
        <br />
        - Attend seminars, webinars, and workshops to gain insights from experts
        and expand your understanding of investing.
        <br />
        <br />
        <b>Conclusion : </b>
        <br />
        <br />
        Creating and managing an Investment Portfolio requires careful planning,
        ongoing monitoring, and periodic adjustments. By defining your goals,
        determining asset allocation, selecting appropriate investments, and
        regularly reviewing performance, you can build a portfolio that aligns
        with your objectives and risk tolerance. Stay informed, seek
        professional guidance if needed, and continue learning to make informed
        investment decisions that support your long-term financial success.
        <br />
        <br />
        In Level 1, we embarked on a foundational journey through the world of
        investing, exploring the essentials from understanding the importance of
        investing and the impact of inflation, to delving into the intricacies
        of risk, return, and the diverse range of asset classes available. We
        have navigated through the realms of cash and cash equivalents, bonds
        and debt, equity, and funds, and explored the unconventional avenues of
        alternative investments. We’ve learned the importance of portfolio
        creation, diversification, and the initial steps to getting started with
        making a portfolio, all while understanding the pivotal role of central
        banks, interest rates, and the time value of money.
        <br />
        <br />
        As we conclude Level 1, we have laid a robust foundation, equipping you
        with the knowledge and insights needed to understand the fundamental
        aspects of investing. But the journey doesn’t end here. We are setting
        the stage for Level 2, where we will elevate our understanding and delve
        deeper into more advanced and nuanced aspects of investing.
        <br />
        <br />
        In Level 2, we will explore the methodologies to value an asset or an
        investment and will provide comprehensive guides to equity, bond, and
        money market instrument investing. We will expand our knowledge on
        alternative assets, exploring realms like real estate, commodities,
        gold, and other metals, and will delve into the exciting world of
        startup investing, angel investing, VC funds, and crowdfunding. We will
        also provide a step-by-step process to create a sophisticated and
        well-rounded portfolio. With chapters on various alternative assets
        already completed, Level 2 promises to be a riveting continuation of our
        journey, offering advanced insights and strategies to optimise your
        investment portfolio.
        <br />
        <br />
        As we transition from the foundational concepts of Level 1 to the
        advanced strategies and intricate aspects of Level 2, we encourage you
        to consolidate the knowledge acquired thus far and prepare to delve
        deeper into the fascinating and multifaceted world of investing. The
        upcoming level will empower you with advanced knowledge and skills,
        enabling you to make more informed and strategic investment decisions
        and to navigate the complexities of the financial markets with increased
        confidence and proficiency. Stay tuned as we continue our exploration
        and deepen our understanding of the dynamic world of investments.
        <br />
        <br />
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
              props.onChange("test14");
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
              props.onChange(14);
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
            <p className="text-txt text-white">Level 1 - Chapter 14</p>
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

export default Chapter14;
