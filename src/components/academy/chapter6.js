import { useState } from "react";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";
import { FiChevronRight } from "react-icons/fi";

const Chapter6 = (props) => {
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
        Chapter 6 – Risk Averse: What It Means, Investment Choices, and
        Strategies
      </p>
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
          <div className="text-left rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Risk-averse investors prioritize the preservation of capital and opt
            for low-risk investments.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center ">
            <img src={hexagon3} />
          </div>
          <div className="text-left rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Diversification is a key strategy for risk-averse investors to
            minimize losses.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="text-left rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Risk aversion can limit potential returns and lead to missed
            opportunities.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className=" text-left  rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Risk tolerance is influenced by factors such as age, income levels,
            and gender.
          </div>
        </div>
        <br />
        <b>Introduction to Risk</b>
        <br />
        Before we delve into risk aversion, it's important to understand what
        risk is. In financial terms, risk is defined as the chance that an
        investment's actual gains will differ from an expected outcome or
        return. Risk includes the possibility of losing some or all of an
        original investment. Risk is usually assessed by considering historical
        behaviours and outcomes. In finance, standard deviation is a common
        metric associated with risk. Standard deviation provides a measure of
        the volatility of asset prices in comparison to their historical
        averages in a given time frame.
        <br />
        <br />
        <b>Fact:</b> A high standard deviation indicates a lot of value
        volatility and therefore a high degree of risk.
        <br />
        <br />
        <b>Understanding Risk Averse Investing</b>
        <br />
        <br />
        Risk-averse investors employ a cautious approach when selecting
        investments, aiming to minimize the potential for loss. They prioritize
        the safety of their principal amount rather than seeking high returns.
        These investors prefer investments that are highly liquid, allowing them
        to access their funds when needed, regardless of market conditions. Some
        commonly favored investment options for risk-averse investors in the UK
        include municipal and corporate bonds, certificates of deposit (CDs),
        and savings accounts.
        <br />
        <br />
        <b>Tip:</b> Diversification is a key strategy for risk-averse investors.
        By spreading investments across different asset classes and sectors,
        they can spread risk and reduce the impact of any single investment's
        performance.
        <br />
        <br />
        <b>Risk-Averse Investment Choices</b>
        <br />
        <br />
        Risk-averse investors have a variety of investment choices that align
        with their risk tolerance. These include:
        <p className="ml-3 mt-3">
          {" "}
          <b>Savings Accounts: </b>These accounts provide a stable return and
          offer deposit insurance, ensuring the safety of invested funds.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>Certificates of Deposit (CDs):</b> CDs offer higher returns than
          savings accounts but require funds to be locked for a specific period.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>Money Market Funds:</b> These are low-risk mutual funds that invest
          in short-term debt instruments, cash, and cash equivalents.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>Bonds:</b> UK government bonds (gilts) or bonds issued by stable
          state and local governments and corporations provide a regular
          interest income stream and are considered less risky than stocks.{" "}
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>Dividend Growth Stocks:</b> These stocks belong to mature companies
          with a consistent track record of income generation. They regularly
          pay dividends, which can be received as income or reinvested to
          enhance portfolio growth over time.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b> Permanent Life Insurance:</b> Products like whole life and
          universal life offer cash accumulation features, tax advantages, and
          living benefits that can appeal to risk-averse investors.
        </p>
        <br />
        <b>Fact:</b> Riskless securities like government bonds and certificates
        of deposit (CDs) form a baseline for analyzing and measuring risk. They
        offer an expected rate of return with very little or no risk.
        <br />
        <br />
        <b>Risk Averse Investment Strategies</b>
        <br />
        <br />
        In addition to specific investment choices, risk-averse investors can
        adopt certain strategies to minimize losses and maintain stability in
        their portfolios:
        <p className="ml-3 mt-3">
          {" "}
          <b>Diversification: </b>This strategy helps spread risk and reduce the
          impact of any single investment's performance.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>Income Investing:</b> This strategy focuses on holding fixed-income
          securities, such as bonds, that generate regular cash flows through
          interest payments.
        </p>
        <p className="ml-3 mt-3">
          {" "}
          <b>Saving vs. Investing: </b> While saving in low-risk instruments
          guarantees capital preservation, it may not generate substantial
          returns. Investing involves inherent risk, but it also provides
          opportunities for higher returns over the long term.
        </p>
        <br />
        <br />
        <b>Tip:</b> Regular risk assessment is crucial for managing investment
        risk. This includes performing regular "check-ups" or rebalancing to
        ensure that your portfolio's risk level is consistent with your
        financial strategy and goals.
        <br />
        <br />
        <b>Advantages and Disadvantages of Being Risk Averse</b>
        <br />
        <br />
        Being risk averse offers several advantages, including minimized risk of
        losses and guaranteed cash flows from low-risk investments. It provides
        stability and peace of mind for investors who prioritize capital
        preservation. However, being risk averse can result in lower expected
        returns, especially over extended periods. Risk-averse individuals may
        miss out on potentially lucrative investment opportunities and face
        challenges in building wealth. Moreover, keeping money idle in low-risk
        instruments may lead to a loss of purchasing power due to inflation.
        <br />
        <br />
        <b>Factors Affecting Risk Aversion</b>
        <br />
        <br />
        Risk aversion varies among individuals and can be influenced by factors
        such as age, income levels, and gender. Generally, as people age and
        approach retirement, their risk tolerance decreases. Lower-income
        individuals and women tend to exhibit higher levels of risk aversion
        compared to men.
        <br />
        <br />
        <b>Fact: </b>Each investor has a unique risk profile that determines
        their willingness and ability to withstand risk. In general, as
        investment risks rise, investors expect higher returns to compensate for
        taking those risks.
        <br />
        <br />
        <b>Evaluating Risk Tolerance</b>
        <br />
        <br />
        To determine their risk tolerance, investors can use various online risk
        profiling questionnaires or assessments provided by brokerage firms or
        financial advisors. These evaluations help gauge an individual's
        willingness and ability to tolerate risk, guiding them in making
        appropriate investment decisions.
        <br />
        <br />
        <b>Distinguishing Risk Aversion from Loss Aversion</b>
        <br />
        <br />
        Risk aversion should not be confused with loss aversion. Risk aversion
        reflects an individual's inclination to avoid risk, while loss aversion
        refers to the asymmetric tendency to feel the pain of losses more
        strongly than the pleasure from equivalent gains. Being risk averse can
        be a rational choice based on personal circumstances, while loss
        aversion is an irrational behavioral bias identified in the field of
        behavioral economics.
        <br />
        <br />
        <b>Conclusion</b>
        <br />
        <br />
        Risk-averse investors prioritize the preservation of capital over
        seeking higher returns. They opt for low-risk investments that offer
        stability and gradually grow over time. By selecting appropriate
        investment choices and employing risk-averse strategies, investors can
        strike a balance between minimizing losses and achieving reasonable
        growth. However, risk aversion can limit potential returns and lead to
        missed opportunities. Therefore, it is crucial for investors to
        carefully consider their risk tolerance and investment goals to make
        informed decisions that align with their financial objectives.
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
              props.onChange("test6");
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
              props.onChange(7);
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
            <p className="text-txt text-white">Level 1 - Chapter 7</p>
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

export default Chapter6;
