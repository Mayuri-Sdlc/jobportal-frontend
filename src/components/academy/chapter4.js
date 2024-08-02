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
import hexagon9 from "../../images/home/stepperHexagons/hex-9.png";

const Chapter4 = (props) => {
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
        Chapter 4 : Understanding Interest Rates: Different Types and Their
        Significance to Borrowers
      </p>
      <p className="mt-5 font-semibold text-[22px]">Key Take Aways:</p>
      <br />
      <br />

      <p className="text-[18px] text-black">
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon1} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Interest rates determine the cost of borrowing and the returns
            earned on deposits.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Nominal interest rates are the actual rates charged or earned, while
            real interest rates account for inflation.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Factors influencing interest rates include the state of the economy
            and central bank policies.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Simple interest is calculated only on the principal amount, while
            compound interest is applied to both the principal and accumulated
            interest.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Different interest rates impact borrowers and savers, with interest
            rates representing a cost of debt for borrowers and compensation for
            savers.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon6} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Bond prices and interest rates have an inverse relationship, as
            rising interest rates lead to lower bond prices.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon7} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Central banks play a significant role in setting interest rates as
            part of their monetary policy.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon8} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Understanding different types of interest rates is crucial for
            borrowers to make informed financial decisions and evaluate the cost
            of borrowing.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon9} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Monitoring economic factors and central bank policies can provide
            insights into the direction of interest rates and help individuals
            and businesses adapt their financial strategies.
          </div>
        </div>
        <br />
        <br />
        Interest rates play a crucial role in lending and borrowing
        transactions. Whether you're taking out a loan or depositing funds in a
        savings account, interest rates determine the cost of money and the
        returns earned. In this chapter, we will explore various types of
        interest rates and their implications for borrowers. So, let's dive in!
        <br />
        <br />
        <b>What Are Interest Rates?</b>
        <br />
        <br />
        An interest rate is the percentage amount charged by a lender to a
        borrower for the use of assets or the percentage earned on a deposit
        account. For loans, the interest rate is applied to the principal, which
        is the borrowed amount. The rate is typically expressed as an annual
        percentage rate (APR) to facilitate easy comparison.
        <br />
        <br />
        When individuals or businesses borrow money, the interest rate
        represents the cost of debt for the borrower and the return on
        investment for the lender. Lenders charge interest to compensate for the
        opportunity cost of lending money instead of utilizing it elsewhere. The
        interest charged is usually higher than the borrowed amount since it
        includes compensation for the loss of money's use during the loan
        period.
        <br />
        <br />
        <b> Differentiating Nominal and Real Interest Rates</b>
        <br />
        <br />
        Interest rates can be categorized as nominal or real. Nominal interest
        rates are the actual rates charged or earned, while real interest rates
        account for inflation. Real interest rates provide a more accurate
        measure of the true cost of borrowing or the actual return on
        investment.
        <br />
        <br />
        <b>Factors Influencing Interest Rates</b>
        <br />
        <br />
        The interest rates set by banks and financial institutions are
        influenced by several factors, including the state of the economy.
        Central banks, such as the Federal Reserve in the United States,
        determine the benchmark interest rate that banks use as a reference for
        their own rates. When central banks set high-interest rates, borrowing
        becomes more expensive, which can deter individuals and businesses from
        taking loans and dampen consumer demand. Interest rates also tend to
        rise with inflation.
        <br />
        <br />
        <b>Interest Rates: Simple vs. Compound</b>
        <br />
        <br />
        Two common types of interest calculation methods are simple interest and
        compound interest. Simple interest is calculated only on the principal
        amount, while compound interest is applied to both the principal and the
        accumulated interest from previous periods.
        <br />
        <br />
        In simple interest, the borrower pays interest based on the original
        loan amount. For example, if you borrow £300,000 with a simple interest
        rate of 4% annually, you would pay £12,000 in interest for a one-year
        lending agreement. If the loan term extends to 30 years, the total
        interest payment would be £360,000.
        <br />
        <br />
        Compound interest, on the other hand, leads to higher interest payments.
        It takes into account both the principal and the accrued interest from
        previous periods. As time progresses, the interest owed under compound
        interest surpasses that of simple interest. For instance, in the
        previous example, a 30-year loan with a 4% compound interest rate would
        accumulate nearly £700,000 in interest on a £300,000 loan.
        <br />
        <br />
        <b>Simple Interest:</b>
        <br />
        <br />
        The formula for calculating simple interest is as follows:
        <br />
        <br />
        Simple interest = Principal × Interest Rate × Time
        <br />
        <br />
        <b>Compound Interest:</b>
        <br />
        <br />
        The formula for calculating compound interest is as follows:
        <br />
        <br />
        Compound interest = Principal × [(1 + Interest Rate)^(Number of
        Compounding Periods) - 1]
        <br />
        <br />
        Please note that the "Interest Rate" should be in decimal form (e.g.,
        0.04 for 4%).
        <br />
        <br />
        These formulas allow borrowers and savers to estimate the amount of
        interest they will incur or earn based on the principal, interest rate,
        and time period involved.
        <br />
        <br />
        <b>Interest Rates in Savings Accounts </b>
        <br />
        <br />
        Interest rates also impact savings accounts. When depositing funds in a
        savings account, compound interest works in favor of the account holder.
        Banks use the deposited funds for various purposes, such as mortgage
        loans, and compensate savers by paying interest on their accounts.
        <br />
        <br />
        For instance, if you deposit £500,000 into a high-yield savings account,
        the bank may use a portion of those funds for loans while paying you 1%
        interest annually. While the bank charges borrowers a higher interest
        rate, the interest paid to you acts as compensation. This interplay
        between borrowers and savers facilitates the flow of funds within the
        economy.
        <br />
        <br />
        <b>Understanding Borrower's Cost of Debt</b>
        <br />
        <br />
        While interest rates generate income for lenders, they constitute a cost
        of debt for borrowers. Companies evaluate the cost of borrowing against
        the cost of equity to determine the most affordable funding source. The
        cost of capital plays a crucial role in achieving an optimal capital
        structure for businesses.
        <br />
        <br />
        <b>Factors Affecting Interest Rate Determination</b>
        <br />
        <br />
        The interest rates set by banks are influenced by various factors,
        including economic conditions. Central banks play a crucial role in
        determining interest rates as part of their monetary policy. When
        central banks raise interest rates, the cost of borrowing increases,
        which can lead to a decrease in consumer spending. Conversely, lowering
        interest rates stimulates borrowing and encourages spending and
        investment.
        <br />
        <br />
        <b>Interest Rates and Bond Prices</b>
        <br />
        <br />
        Bond prices and interest rates exhibit an inverse relationship. Bonds
        are debt instruments that pay a fixed rate of interest over their
        lifetime. When prevailing interest rates rise, newly issued bonds offer
        higher interest payments, making existing bonds with lower coupon rates
        less desirable. As a result, the prices of existing bonds decrease to
        attract buyers. Conversely, when interest rates fall, new bonds offer
        lower interest payments, increasing the demand for existing bonds with
        higher coupon rates and driving their prices up.
        <br />
        <br />
        <b>Interest Rates on Different Loan Terms</b>
        <br />
        <br />
        The duration of a loan plays a role in determining interest rates.
        Longer-term loans carry higher interest rates due to increased default
        risk and larger opportunity costs. With longer loan periods, there is
        more time for borrowers to default, and lenders face a greater
        opportunity cost as the funds remain tied up.
        <br />
        <br />
        <b>The Role of Central Banks in Setting Interest Rates</b>
        <br />
        <br />
        The Bank of England, along with other central banks in Europe, employs
        interest rates as a strategic instrument for implementing monetary
        policy. Through the manipulation of borrowing costs for commercial
        banks, these central banks exert influence over a broad spectrum of
        interest rates, encompassing personal loans, business loans, and
        mortgages. When the Bank of England decides to raise interest rates, it
        increases the cost of borrowing, thereby diminishing the demand for
        money and mitigating the risk of an overheating economy & runaway
        inflation.
        <br />
        <br />
        Conversely, when interest rates are lowered, it stimulates borrowing,
        fostering increased spending and investment.
        <br />
        <br />
        This approach is not unique to the Bank of England but is also employed
        by other central banks across the world as part of their monetary policy
        toolkit.
        <br />
        <br />
        <b>Conclusion </b>
        <br />
        <br />
        Understanding different types of interest rates is crucial for
        borrowers. It helps them make informed financial decisions, evaluate the
        cost of borrowing, and plan for the future. Moreover, keeping an eye on
        economic factors and central bank policies can provide insights into the
        direction of interest rates, enabling individuals and businesses to
        adapt their financial strategies accordingly.
        <br />
        <br />
        <b>Up Next: The Central Role of the Bank of England (BoE)</b>
        <br />
        <br />
        In the next chapter, we will delve into the central role of the Bank of
        England (BoE). As the UK's central financial institution, the BoE's
        responsibilities span across the management of monetary policy, issuance
        of currency, and oversight of banks, financial institutions, and payment
        systems. Similar to other central banks globally, the BoE may step in as
        a last-resort lender during a financial crisis. Stay tuned to learn more
        about the BoE's crucial role in the UK's financial ecosystem.
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
              props.onChange("test4");
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
              props.onChange(5);
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
            <p className="text-txt text-white">Level 1 - Chapter 5</p>
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

export default Chapter4;
