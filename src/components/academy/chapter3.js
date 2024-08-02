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

const Chapter3 = (props) => {
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
        Chapter 3 : Understanding the Time Value of Money (TVM)
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
            The time value of money (TVM) concept states that a sum of money
            today is worth more than the same sum in the future due to potential
            earnings that can be generated during the interim period.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Present value (PV) is the current value of a future sum of money or
            cash flows, determined by discounting future cash flows at a
            specified rate of return.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Future value (FV) refers to the value that a current asset is
            expected to have at a future date based on a projected rate of
            growth.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Present value calculations take into account the potential growth of
            money through investment and the impact of inflation on its
            purchasing power over time.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            The discount rate used in present value calculations represents the
            rate of return that could be earned on the funds over the period and
            is subjective.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Annuities are financial products that provide a guaranteed income
            stream, while perpetuities are annuities that continue indefinitely.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon6} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Future value calculations help with long-term planning, investment
            comparisons, and estimating potential profits, but they rely on
            assumptions and may not accurately reflect real-world scenarios.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon7} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Present value and future value calculations are important for
            financial decisions, such as evaluating investments, determining the
            worth of assets, and comparing different options.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon8} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            The formulas for present value and future value calculations involve
            the initial investment amount, interest or discount rate, and the
            number of periods.
          </div>
        </div>
        <b>The Principle of the Time Value of Money</b>
        <br />
        <br />
        In the exciting realm of finance, the time value of money (TVM) is a
        fundamental concept. It reveals that a sum of money today holds greater
        worth than an identical sum in the future. This disparity arises from
        the potential earnings that can be generated during the interim period.
        Also known as the present discounted value, TVM plays a crucial role in
        financial decision-making.
        <br />
        <br />
        <b>Important:</b> The principle behind the time value of money is that
        money can grow only through investment. A delayed investment results in
        a missed opportunity for potential growth.
        <br />
        <br />
        For instance, consider depositing money into a savings account. Over
        time, the initial deposit earns interest, which is then added to the
        principal, leading to further interest accumulation. This phenomenon is
        known as compounding interest.
        <br />
        <br />
        Conversely, if money is left idle, its value erodes over time. Let's
        imagine you stash away £1,000 in a mattress for three years. By the time
        you retrieve it, not only has it failed to grow, but inflation has also
        diminished its purchasing power.
        <br />
        <br />
        To illustrate further, let's compare two scenarios: receiving £10,000
        today or £10,000 two years from now. Although the face value remains the
        same, the £10,000 received today holds more value and utility than the
        delayed payment due to the opportunity cost associated with the wait.
        Delayed payments are missed opportunities.
        <br />
        <br />
        <b>
          Present Value and Future Value - Understanding the Value of Money Over
          Time
        </b>
        <br />
        <br />
        <b>What is Present Value (PV) in Finance, and How is it Calculated?</b>
        <br />
        <br />
        Present value (PV) is the current value of a future sum of money or
        stream of cash flows given a specified rate of return. Future cash flows
        are discounted at the discount rate, and the higher the discount rate,
        the lower the present value of the future cash flows. Determining the
        appropriate discount rate is key to properly valuing future cash flows,
        whether they be earnings or debt obligations.
        <br />
        <br />
        Present value states that an amount of money today is worth more than
        the same amount in the future. In other words, present value shows that
        money received in the future is not worth as much as an equal amount
        received today. Unspent money today could lose value in the future by an
        implied annual rate due to inflation or the rate of return if the money
        was invested.
        <br />
        <br />
        Calculating present value involves assuming that a rate of return could
        be earned on the funds over the period. Present value is calculated by
        taking the expected cash flows of an investment and discounting them to
        the present day.
        <br />
        <br />
        <b>Tip: </b>Present value is the concept that states an amount of money
        today is worth more than that same amount in the future. In other words,
        money received in the future is not worth as much as an equal amount
        received today.
        <br />
        <br />
        Receiving £1,000 today is worth more than £1,000 five years from now.
        Why? An investor can invest the £1,000 today and presumably earn a rate
        of return over the next five years. Present value takes into account any
        interest rate an investment might earn.
        <br />
        <br />
        For example, if an investor receives £1,000 today and can earn a rate of
        return of 5% per year, the £1,000 today is certainly worth more than
        receiving £1,000 five years from now. If an investor waited five years
        for £1,000, there would be an opportunity cost, or the investor would
        lose out on the rate of return for the five years.
        <br />
        <br />
        <b>Inflation and Purchasing Power</b>
        <br />
        <br />
        Inflation is the process in which prices of goods and services rise over
        time. If you receive money today, you can buy goods at today's prices.
        Presumably, inflation will cause the price of goods to rise in the
        future, which would lower the purchasing power of your money.
        <br />
        <br />
        Money not spent today could be expected to lose value in the future by
        some implied annual rate, which could be inflation or the rate of return
        if the money was invested. The present value formula discounts the
        future value to today's pounds by factoring in the implied annual rate
        from either inflation or the rate of return that could be achieved if a
        sum was invested.
        <br />
        <br />
        <b>Discount Rate for Finding Present Value</b>
        <br />
        <br />
        The discount rate is the investment rate of return that is applied to
        the present value calculation. In other words, the discount rate would
        be the forgone rate of return if an investor chose to accept an amount
        in the future versus the same amount today. The discount rate that is
        chosen for the present value calculation is highly subjective because
        it's the expected rate of return you'd receive if you had invested
        today's pounds for a period of time.
        <br />
        <br />
        In many cases, a risk-free rate of return is determined and used as the
        discount rate, which is often called the hurdle rate. The rate
        represents the rate of return that the investment or project would need
        to earn to be worth pursuing. A UK government bond rate is often used as
        the risk-free rate because government bonds are backed by the UK
        government. So, for example, if a two-year government bond paid 2%
        interest or yield, the investment would need to earn more than 2% to
        justify the risk.
        <br />
        <br />
        The discount rate is the sum of the time value and a relevant interest
        rate that mathematically increases future value in nominal or absolute
        terms. Conversely, the discount rate is used to work out future value in
        terms of present value, allowing a lender to settle on the fair amount
        of any future earnings or obligations in relation to the present value
        of the capital. The word "discount" refers to future value being
        discounted to present value.
        <br />
        <br />
        The calculation of discounted or present value is extremely important in
        many financial calculations. For example, net present value, bond
        yields, and pension obligations all rely on discounted or present value.
        Learning how to use a financial calculator to make present value
        calculations can help you decide whether you should accept such offers
        as a cash rebate, 0% financing on the purchase of a car, or pay points
        on a mortgage.
        <br />
        <br />
        <b>Present Value Formula and Calculation</b>
        <br />
        <br />
        Present Value = FV / (1 + r)^T Where: FV = Future Value r = Rate of
        return T = Number of periods
        <br />
        <br />
        Input the future amount that you expect to receive in the numerator of
        the formula. Determine the interest rate that you expect to receive
        between now and the future and plug the rate as a decimal in place of
        "r" in the denominator.
        <br />
        <br />
        Input the time period as the exponent "n" in the denominator. So, if you
        want to calculate the present value of an amount you expect to receive
        in three years, you would plug the number three in for "n" in the
        denominator.
        <br />
        <br />
        <b>
          Future Value (FV) - Understanding and Calculating the Value of Assets
          Over Time
        </b>
        <br />
        <br />
        <b>What is Future Value (FV)?</b>
        <br />
        <br />
        Future value (FV) refers to the value that a current asset is expected
        to have at a future date based on a projected rate of growth. It is a
        crucial concept for investors and financial planners as it helps
        estimate the worth of an investment over time.
        <br />
        <br />
        By determining the future value, investors can make informed decisions
        based on their anticipated needs and goals. However, it's important to
        note that external factors like inflation can impact the future value of
        an asset by reducing its purchasing power.
        <br />
        <br />
        Future value is often contrasted with present value (PV), which
        determines the value of a future sum of money in today's terms.
        <br />
        <br />
        <b>Did You Know?:</b> The future value calculation enables investors to
        predict the potential profit that different investments can generate,
        though with varying degrees of accuracy. It allows for comparisons
        between investment options by considering the growth potential of each
        option.
        <br />
        <br />
        Calculating the future value of an asset can be complex, depending on
        the type of asset and the assumptions made regarding its growth rate.
        While it may be relatively straightforward to calculate future value
        when dealing with predictable interest rates, investments in volatile
        markets can pose challenges due to uncertain returns.
        <br />
        <br />
        <b>Formula and Calculation of Future Value</b>
        <br />
        <br />
        There are two ways to calculate the future value of an asset: using
        simple annual interest or compounded annual interest. Future Value Using
        Simple Annual Interest:
        <br />
        <br />
        The future value formula for an investment earning simple interest is:
        <br />
        <br />
        FV = I × (1 + (R × T))
        <br />
        Where:
        <br />
        FV = Future value
        <br />
        I = Initial investment amount
        <br />
        R = Interest rate
        <br />
        T = Number of years
        <br />
        <br />
        Future Value Using Compounded Annual Interest:
        <br />
        <br />
        When an investment earns compound interest, the growth rate is applied
        to each period's cumulative account balance. The formula for calculating
        future value with compounded interest is:
        <br />
        <br />
        FV = I × (1 + R)^T
        <br />
        <br />
        <b>Fast Fact:</b>
        Future value allows for long-term planning by estimating the growth of
        investments and savings over time. It helps individuals determine how
        much they need to save or invest to achieve their financial goals.
        <br />
        <br />
        <b>Pros and Cons of Future Value</b>
        <br />
        <br />
        Pros:
        <br />
        Planning: Future value allows for long-term planning by estimating the
        growth of investments and savings over time. It helps individuals
        determine how much they need to save or invest to achieve their
        financial goals. Comparison: Future value simplifies the comparison of
        investment options. By calculating the future value of different
        investment scenarios, investors can assess which option has the
        potential to generate higher returns. Easy to calculate: Future value
        calculations often rely on estimates rather than precise figures, making
        it accessible to individuals without advanced financial knowledge.
        <br />
        <br />
        Cons:
        <br />
        Assumption of constant growth: Future value calculations assume a
        constant growth rate, which may not reflect real-world scenarios. Market
        conditions and investment returns can fluctuate, leading to deviations
        from the projected future value.
        <br />
        Uncertain assumptions: Since future value is based on future
        assumptions, the calculated values are estimates that may not align with
        actual outcomes. Changes in interest rates, market conditions, or
        individual circumstances can render future value calculations
        inaccurate.
        <br />
        Limitations in comparisons: Future value alone may not provide
        sufficient information to make investment decisions. Other factors, such
        as the initial investment amount and risk associated with different
        investment options, need to be considered alongside future value.
        <br />
        <br />
        <b>Future Value vs. Present Value</b>
        <br />
        <br />
        Future value and present value are closely related concepts. While
        future value estimates the worth of an investment in the future based on
        expected growth, present value determines the value of future cash flows
        in today's terms.
        <br />
        <br />
        Both concepts rely on financial principles such as discount or growth
        rates, compounding periods, and initial investments. By adjusting these
        components, one can calculate future value based on present value and
        vice versa. These calculations help individuals understand the potential
        returns on investments and evaluate investment opportunities.
        <br />
        <br />
        <b>Annuity vs. Annuity Due</b>
        <br />
        <br />
        When calculating future value, it's essential to consider the timing of
        cash flows. An ordinary annuity refers to payments made at the end of
        each period, while an annuity due represents payments made at the
        beginning of each period. The timing of cash flows affects the future
        value calculation.
        <br />
        <br />
        <b>Example of Future Value</b>
        <br />
        <br />
        To illustrate the concept of future value, consider the scenario of an
        individual who invests £1,000 for five years at a 10% interest rate
        compounded annually. The future value would be:
        <br />
        <br />
        FV = £1,000 × (1 + 0.10)^5 = £1,610.51
        <br />
        <br />
        <b>The Role of Annuities and Perpetuities in TVM</b>
        <br />
        <br />
        In finance, we often deal with the concept of annuities and
        perpetuities. An annuity is a financial product that provides a
        guaranteed income stream, typically used for retirement purposes. It
        involves a series of equal payments at regular intervals, such as
        monthly or annually.
        <br />
        <br />
        Perpetuities, on the other hand, are annuities that continue
        indefinitely. They provide a constant stream of cash flows without an
        end date. The present value of a perpetuity can be calculated using the
        formula:
        <br />
        <br />
        PV = C / r Where:
        <br />
        <br />
        C = Cash flow per period r = Interest rate
        <br />
        <br />
        <b>Tip:</b> Annuities and perpetuities are essential tools in financial
        planning. They provide a predictable income stream, which can be
        particularly beneficial for retirement planning.
        <br />
        <br />
        <b>Conclusion</b>
        <br />
        <br />
        Understanding the time value of money is crucial for making informed
        financial decisions. It helps individuals and businesses evaluate the
        potential returns on investments, compare different investment options,
        and plan for the future. By understanding the concepts of present value
        and future value, one can assess the worth of money over time and make
        decisions that align with their financial goals.
        <br />
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
              props.onChange("test3");
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
              props.onChange(4);
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
            <p className="text-txt text-white">Level 1 - Chapter 4</p>
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

export default Chapter3;
