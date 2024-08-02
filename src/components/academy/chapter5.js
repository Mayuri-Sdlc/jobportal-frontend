import { useState } from "react";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";
import { FiChevronRight } from "react-icons/fi";

const Chapter5 = (props) => {
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
        Chapter 5 : Central Banks and Their Role - The Bank of England (BoE) as
        an Example
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
            Central banks, like the Bank of England, are crucial to a nation's
            economic stability, controlling monetary policy and the money
            supply.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            The Bank of England's primary goal is to maintain price stability
            and control inflation.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Monetary policy, enacted by central banks, can be expansionary or
            contractionary, influencing economic growth and inflation.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Central banks also act as lenders of last resort, providing
            stability to the banking system in times of crisis.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            The independence of a central bank from political influence is
            crucial for its effective functioning.
          </div>
        </div>
        <br />
        <br />
        <b>Introduction</b>
        <br />
        <br />
        Central banks are pivotal institutions in the economic framework of a
        nation. They manage the country's money supply, set monetary policy, and
        act as a lender of last resort, providing stability to the banking
        system in times of crisis. This chapter will delve into the role of
        central banks, using the Bank of England (BoE) as a case study.
        <br />
        <br />
        <b>The Bank of England (BoE)</b>
        <br />
        <br />
        The Bank of England (BoE) is the central financial institution of the
        United Kingdom. Its responsibilities include managing monetary policy,
        issuing currency, and overseeing banks, financial institutions, and
        payment systems. The BoE also steps in as a last-resort lender during a
        financial crisis.
        <br />
        <br />
        <b>Historical Overview</b>
        <br />
        <br />
        The BoE, often referred to as "the Old Lady of Threadneedle Street," was
        founded in 1694 as a private bank to aid in government fundraising. It
        also functioned as a commercial bank accepting deposits. The Bank
        Charter Act of 1844 provided it with the exclusive right to issue
        banknotes in England and Wales.
        <br />
        <br />
        <b>Fact:</b> The Bank of England was founded in 1694, making it one of
        the oldest central banks in the world.
        <br />
        <br />
        The UK government took over ownership of the BoE in 1946 after the end
        of World War II. It has been in charge of setting the UK's benchmark
        interest rate since 1997, when the government transferred its control
        over the UK's monetary policy to the bank. This change was officially
        recognised in 1998 by the Bank of England Act.
        <br />
        <br />
        <b>Fact:</b> The Bank of England has been setting the UK's benchmark
        interest rate since 1997.
        <br />
        <br />
        <b>Monetary Policy Committee</b>
        <br />
        <br />
        The BoE's Monetary Policy Committee (MPC) carries out its primary
        mandate of price stability by setting an annual inflation rate, as
        decided by the government, that aligns best with this goal. The MPC sets
        monetary policy eight times a year by majority rule, with each member of
        the committee having one vote.
        <br />
        <br />
        <b>Understanding Monetary Policy: An Overview</b>
        <br />
        <br />
        Monetary policy refers to the measures enacted by a country's central
        bank to manage the overall money supply and foster economic expansion.
        Tactics such as adjusting interest rates and altering bank reserve
        requirements are common strategies in this regard.
        <br />
        <br />
        <b> Different Forms of Monetary Policy </b>
        <br />
        <br />
        Monetary policies are generally identified as either expansionary or
        contractionary, depending on the economic climate. Contractionary
        monetary policy is used to curb excessive economic growth and inflation
        by increasing interest rates and reducing the available money supply.
        Expansionary monetary policy, on the other hand, is employed during
        economic slowdowns or recessions. It aims to stimulate economic activity
        by lowering interest rates, making savings less appealing and
        encouraging consumer spending and borrowing.
        <br />
        <br />
        <b>Tip:</b>
        Understanding the role and functions of a central bank can help you make
        sense of economic news and financial market movements.
        <br />
        <br />
        <b>Monetary Policy Instruments</b>
        <br />
        <br />
        The BoE typically utilises three strategies: reserve requirements, the
        bank rate, and open market operations. Through open market operations
        (OMO), the BoE can buy bonds from or sell additional bonds to investors,
        changing the number of outstanding government securities and the money
        supply for the economy as a whole.
        <br />
        <br />
        <b>Central Banks as Lenders of Last Resort</b>
        <br />
        <br />
        The Bank of England also acts as a lender of last resort, providing
        liquidity and regulatory oversight to prevent banks from failing, which
        could trigger a financial panic. This role is crucial in maintaining the
        stability of the country's banking system.
        <br />
        <br />
        <b>Central Banks and Their Independence</b>
        <br />
        <br />
        Time has proved that the central bank can best function in these
        capacities by remaining independent from government fiscal policy and
        therefore uninfluenced by the political concerns of any regime. A
        central bank should also be completely divested of any commercial
        banking interests.
        <br />
        <br />
        <b>Conclusion</b>
        <br />
        <br />
        Central banks, like the Bank of England, play a pivotal role in
        maintaining economic stability. They control monetary policy, manage the
        money supply, and act as lenders of last resort. The independence of a
        central bank from political influence is crucial for its effective
        functioning.
        <br />
        <br />
        <b>Tip:</b> Changes in monetary policy can impact interest rates, which
        can affect your savings, loans, and investments.
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
              props.onChange("test5");
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
              props.onChange(6);
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
            <p className="text-txt text-white">Level 1 - Chapter 6</p>
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

export default Chapter5;
