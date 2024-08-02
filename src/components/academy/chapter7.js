import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";

const Chapter7 = (props) => {
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
        Chapter 7 : Returns in Investing and How to Measure Them
      </p>
      <br />
      Hey there! Welcome to the exciting world of investing! In this chapter,
      we're going to talk about returns and how we measure them. Returns are all
      about the money you make or lose on your investments over a certain period
      of time. So, let's dive in and explore the ins and outs of returns in the
      UK investment scene.
      <br />
      <br />
      <b>What's a Return Anyway?</b>
      <br />
      <br />
      Okay, let's keep it simple. A return is the moolah you make or lose on
      your investment. It can be expressed in two ways: the change in the
      investment's value or as a percentage of the profit compared to your
      initial investment. We can look at returns as net results (after
      considering fees, taxes, and inflation) or as gross returns that only
      focus on price changes.
      <br />
      <br />
      <b>Fact:</b> Positive returns indicate profits, while negative returns
      indicate losses.
      <br />
      <br />
      <p className="mt-5 font-semibold text-[22px]">Key Take Aways:</p>
      <br />
      <p className="text-[18px] text-black">
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon1} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Risk is the chance that an investment's actual gains will differ
            from the expected outcome, including the possibility of losing some
            or all of an original investment.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Risk-averse investors prioritize the preservation of capital and opt
            for low-risk investments.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Diversification is a key strategy for risk-averse investors to
            minimize losses.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Risk aversion can limit potential returns and lead to missed
            opportunities.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Risk tolerance is influenced by factors such as age, income levels,
            and gender.
          </div>
        </div>
        <br />
        <br />
        <b> Let's Understand Returns Better</b>
        <br />
        <br />
        Now, returns can be a bit tricky to define precisely because it depends
        on the financial data we use to measure them. Terms like "profit" can
        mean different things, like gross profit, operating profit, net profit,
        or profit before or after tax. And "investment" can refer to selected
        assets, average assets, or total assets.
        <br />
        <br />
        Holding period return is the return you get during the time you own an
        investment. We can express it as a percentage, often called the rate of
        return (RoR). So, if you want to know how your investment performed
        monthly, we calculate the monthly return. And if we're interested in the
        annual return or year-over-year (YoY) return, we look at the price
        change from today to the same date last year.
        <br />
        <br />
        To make things easier for comparison, we often convert returns over
        different time intervals to annual returns. It's called annualization.
        So, we can see how investments perform on a level playing field.
        <br />
        <br />
        <b>Nominal Return: Show Me the Money!</b>
        <br />
        <br />
        Nominal return is all about the cash in your pocket. It's the net profit
        or loss of your investment in terms of actual money, without considering
        things like taxes, fees, dividends, or inflation. We calculate it by
        looking at the change in your investment's value over a specific period,
        including any distributions received and outlays paid.
        <br />
        <br />
        Distributions are the cash you get from your investment, like dividends,
        interest, rents, or other benefits. Outlays are the expenses you pay,
        such as taxes, fees, or costs related to buying, maintaining, and
        selling the investment.
        <br />
        <br />
        Let's say you buy £1,000 worth of publicly traded stock, don't receive
        any distributions, don't pay any outlays, and sell the stock two years
        later for £1,200. Your nominal return would be £1,200 - £1,000 = £200.
        Easy peasy, right?
        <br />
        <br />
        Positive returns mean you made money, and negative returns mean you lost
        money on your investment. So, keep an eye on those numbers!
        <br />
        <br />
        <b>Real Return: Adjusting for the Real World</b>
        <br />
        <br />
        Now, let's talk about the real deal—real return. It takes into account
        factors like inflation that can impact the purchasing power of your
        investment. Real return gives you the true picture of how much your
        money is worth over time.
        <br />
        <br />
        When we adjust the nominal return for inflation, we can figure out the
        real return. This helps us understand how much of our nominal return is
        actually a gain in purchasing power. It's crucial to know the real rate
        of return before you invest because inflation can eat away at your
        money.
        <br />
        <br />
        And hey, don't forget to consider the risk associated with an
        investment. Knowing the real rate of return helps you decide if you can
        handle the risks involved. Looking at returns in real values, especially
        during times of high inflation, gives you a clearer picture of an
        investment's value.
        <br />
        <br />
        <b>Return Ratios: Get Your Maths On!</b>
        <br />
        <br />
        Return ratios are fancy financial ratios that tell us how well an
        investment is managed. They help us evaluate if an investment is
        generating the highest possible return. Return ratios compare different
        factors, like assets or equity, to net income.
        <br />
        <br />
        We calculate return ratios by dividing selected or total assets or
        equity by net income. The result is a percentage that tells us the
        return per pound invested. We can use these ratios to assess the
        strength of an investment compared to similar ones, companies,
        industries, or markets. For example, return on capital (ROC) measures
        the recovery of the original investment.
        <br />
        <br />
        <b>ROI, ROE, and ROA: The Alphabet of Returns</b>
        <br />
        <br />
        Let's talk about a few important return ratios you should know:
        <br />
        <br />
        1. Return on Investment (ROI): This one's a percentage return that tells
        you how much bang you get for your buck. We calculate it by dividing the
        dollar return by your initial investment and then multiplying it by 100.
        So, if you get a £200 return on a £1,000 investment, the ROI would be
        (£200 ÷ £1,000) × 100 = 20%. Not too shabby!
        <br />
        <br />
        2. Return on Equity (ROE): This ratio shows how much net income is
        generated for each pound of stock investment. We calculate it by
        dividing net income by average shareholder's equity. For example, if a
        company makes £10,000 in net income and has an average equity capital of
        £100,000, the ROE would be 10%.
        <br />
        <br />
        3. Return on Assets (ROA): ROA tells us how much net profit we're
        getting for each pound we invest in assets. We calculate it by dividing
        net income by average total assets. ROA helps us assess financial
        leverage and if we're earning enough from our assets to cover the cost
        of capital. For instance, if net income for the year is £10,000 and
        total average assets are £100,000, the ROA would be £10,000 ÷ £100,000 =
        10%.
        <br />
        <br />
        <b>Yield vs. Return: Spot the Difference</b>
        <br />
        <br />
        Now, let's clear up a common confusion—yield and return. In some cases,
        they can be used interchangeably, but they can also have different
        meanings depending on the context. When we talk about fixed income
        investments, like bonds, yield refers to the income generated by the
        investment as a percentage of its price or face value. Return, on the
        other hand, includes both income and capital gains or losses resulting
        from price changes.
        <br />
        <br />
        Keep an eye on the context to understand whether we're talking about the
        same thing or something slightly different.
        <br />
        <br />
        <b>Negative Returns: Bummer, But It Happens</b>
        <br />
        <br />
        Oh no, negative returns! Yep, sometimes investments can lead to losses,
        and negative returns show us just that. They indicate that your
        investment has declined in value over a specific period. Negative
        returns mean you've lost money on your investment, which is definitely
        not fun.
        <br />
        <br />
        <b>Fact:</b> Even the most experienced investors face negative returns
        at times. The key is to learn from these experiences and make better
        investment decisions in the future.
        <br />
        <br />
        <b>Risk-Return Tradeoff: Taking Chances for Gains</b>
        <br />
        <br />
        Here's the deal: the riskier an investment, the higher the expected
        <br />
        <br />
        return. Investors want to be compensated for taking on more risk. That's
        why low-risk investments, like government bonds, offer lower expected
        returns compared to high-risk investments, such as growth stocks. So,
        it's all about finding the right balance between risk and return that
        suits your investment goals.
        <br />
        <br />
        Fact: Low-risk investments, such as government bonds, typically offer
        lower returns, while high-risk investments, like stocks, have the
        potential for higher returns.
        <br />
        <br />
        <b>Gross Return and Net Return: Show Me What's Left</b>
        <br />
        <br />
        Gross return and net return are two sides of the same coin. Gross return
        is the change in price plus any income generated by your investment over
        a period of time. Net return, on the other hand, deducts commissions,
        fees, taxes, and other expenses from the gross return. It's what you
        actually get to pocket from your investment. And if we want to get real,
        real return considers the effects of inflation too.
        <br />
        <br />
        <b>Tip:</b> Using different measures can provide a more comprehensive
        view of an investment's performance.
        <br />
        <br />
        <b>Fact:</b> The difference between gross and net return can be
        significant, especially for investments with high fees or costs.
        <br />
        <br />
        <b>Conclusion</b>
        <br />
        <br />
        So, there you have it! Returns are all about the money you make or lose
        on your investments. Positive returns mean profits, and negative returns
        mean losses. Remember, higher returns often come with higher risks.
        Understanding returns and measuring them accurately helps you make
        informed investment decisions in the UK financial landscape. Happy
        investing!
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
              props.onChange("test7");
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
              props.onChange(8);
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
            <p className="text-txt text-white">Level 1 - Chapter 8</p>
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

export default Chapter7;
