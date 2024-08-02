import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";

const Chapter10 = (props) => {
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
        Chapter 10 : Bonds: Financial Meaning With Examples and How They Are
        Priced
      </p>
      <br />

      <p className="mt-5 font-semibold text-[22px]">Key Take Aways:</p>
      <br />
      <p className="text-[18px] text-black">
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon1} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Bonds are units of corporate debt issued by companies in the United
            Kingdom and Europe, securitised as tradeable assets.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Bonds are considered fixed-income instruments since they
            traditionally pay a fixed interest rate, known as a coupon, to
            debtholders.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Variable or floating interest rates are also common in the UK and
            European bond markets.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Bond prices exhibit an inverse correlation with interest rates: as
            interest rates rise, bond prices tend to fall, and vice versa.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Bonds have maturity dates, at which point the full principal amount
            must be repaid, or there is a risk of default.
          </div>
        </div>
        <br />
        <br />
        A bond is a fixed-income instrument that represents a loan made by an
        investor to a borrower, typically a corporation or a government entity,
        in the United Kingdom and Europe. It can be seen as an I.O.U. between
        the lender and borrower, outlining the loan details and its repayment
        terms. Bonds are utilised by companies, municipalities, states, and
        sovereign governments in the UK and Europe to finance various projects
        and operations. Those who own bonds become debtholders or creditors of
        the issuer.
        <br />
        <br />
        The specifics of a bond include the maturity date, which signifies when
        the principal loan amount is due to be repaid to the bond owner.
        Additionally, bonds typically entail terms for variable or fixed
        interest payments made by the borrower.
        <br />
        <br />
        <b>Who Issues Bonds? </b>
        <br />
        <br />
        In the United Kingdom and Europe, bonds are issued by various entities
        to secure necessary funding. Governments at different levels and
        corporations often turn to bond markets to raise capital. Governments
        require funding for infrastructure development, such as roads, schools,
        and dams, or to meet sudden war-related expenses.
        <br />
        <br />
        Similarly, corporations often seek funds through bond issuances to
        expand their businesses, acquire assets, undertake profitable ventures,
        invest in research and development, or hire additional employees. Large
        organisations frequently require more substantial funding than
        traditional banks can provide, and bonds offer a solution by allowing
        numerous individual investors to act as lenders. Public debt markets
        enable thousands of investors to contribute the necessary capital.
        Furthermore, these markets facilitate the trading of bonds among
        investors long after the initial issuance by the borrowing entity.
        <br />
        <br />
        <b>Who Issues Bonds? </b>
        <br />
        <br />
        Bonds, referred to as fixed-income securities, are among the primary
        asset classes familiar to individual investors in the United Kingdom and
        Europe, alongside stocks (equities) and cash equivalents.
        <br />
        <br />
        When companies or other entities in the UK and Europe need funds for new
        projects, ongoing operations, or refinancing existing debts, they may
        issue bonds directly to investors. The borrower, also known as the
        issuer, offers a bond that specifies the loan terms, interest payments,
        and the maturity date when the loaned funds (bond principal) must be
        repaid. The interest payment, known as the coupon, forms a part of the
        return earned by bondholders for lending their funds to the issuer. The
        interest rate that determines the coupon payment is referred to as the
        coupon rate.
        <br />
        <br />
        Most bonds are initially priced at par, which means they have a face
        value of £1,000 per individual bond. However, the actual market price of
        a bond depends on several factors, including the credit quality of the
        issuer, the time remaining until maturity, and the prevailing interest
        rate environment. The face value represents the amount to be repaid to
        the lender upon bond maturity.
        <br />
        <br />
        In the UK and Europe, many bonds can be sold by the original bondholder
        to other investors before maturity. In other words, bond investors are
        not required to hold a bond until its maturity date. It is also common
        for borrowers to repurchase their bonds if interest rates decline or
        their creditworthiness improves, allowing them to issue new bonds at
        lower costs
        <br />
        <br />
        <b>Characteristics of Bonds</b>
        <br />
        <br />
        Most bonds share common basic characteristics, including:
        <br />
        <br />
        <b>1. Facevalue (par value):</b> The money amount the bond will be worth
        at maturity, which is also the reference amount for calculating interest
        payments. For example, if an investor purchases a bond at a premium of
        £1,090, and another investor buys the same bond later when it is trading
        at a discount for £980, both investors will receive the £1,000 face
        value when the bond matures.
        <br />
        <br />
        <br />
        <br />
        <b>2. Coupon rate:</b> The interest rate at which the bond issuer pays
        on the face value of the bond, expressed as a percentage. For instance,
        a 5% coupon rate means bondholders will receive £50 per year (5% x
        £1,000).
        <br />
        <br />
        <b>3. Coupon dates:</b> The dates on which the bond issuer makes
        interest payments. While payments can occur at any interval, the
        standard practice is to make semiannual payments.
        <br />
        <br />
        <b>4. Maturity date:</b> The date when the bond reaches maturity, and
        the bond issuer repays the bondholder the face value of the bond.
        <br />
        <br />
        <b>5. Issue price:</b> The original price at which the bond issuer sells
        the bonds, often at par value.
        <br />
        <br />
        The credit quality and time to maturity of a bond are the primary
        determinants of its coupon rate. Bonds with lower credit ratings tend to
        carry higher interest rates to compensate for the greater risk of
        default. Similarly, bonds with longer maturity dates generally offer
        higher interest rates due to the increased exposure to interest rate and
        inflation risks over an extended period.
        <br />
        <br />
        Credit ratings for companies and their bonds are determined by credit
        rating agencies such as Standard and Poor's, Moody's, and Fitch Ratings.
        The highest-quality bonds are referred to as "investment-grade,"
        encompassing debt issued by the UK government and stable companies,
        including utilities.
        <br />
        <br />
        Bonds that are not considered investment-grade but are not in default
        are termed "high yield" or "junk" bonds. These bonds carry a higher risk
        of default in the future, leading investors to demand a higher coupon
        payment to compensate for the additional risk.
        <br />
        <br />
        Bonds and bond portfolios in the UK and Europe experience fluctuations
        in value based on changes in interest rates. The sensitivity of bond
        prices to interest rate changes is referred to as "duration." The
        duration of a bond or bond portfolio measures the rate of change in its
        price with respect to interest rate fluctuations. Convexity, on the
        other hand, measures the rate of change in the duration's sensitivity to
        interest rates. These factors are complex to calculate, typically
        requiring analysis by professionals.
        <br />
        <br />
        <b>Categories of Bonds</b>
        <br />
        <br />
        In the UK and Europe, there are four primary categories of bonds sold in
        the markets, in addition to foreign bonds issued by global corporations
        and governments available on certain platforms:
        <br />
        <br />
        1. Corporate bonds: Issued by companies to finance their operations or
        specific projects. Companies often choose to issue bonds rather than
        seek bank loans due to more favourable terms and lower interest rates
        available in the bond market.
        <br />
        <br />
        2. Municipal bonds: Issued by states and municipalities, some of which
        offer tax-free coupon income for investors.
        <br />
        <br />
        3. Government bonds: Such as those issued by the UK Treasury,
        categorised into bills (with a maturity of one year or less), notes
        (with a maturity of one to ten years), and bonds (with a maturity
        exceeding ten years). Government bonds issued by national governments
        are commonly referred to as sovereign debt.
        <br />
        <br />
        4. Agency bonds: Issued by government-affiliated organisations, such as
        Fannie Mae or Freddie Mac.
        <br />
        <br />
        <b>Varieties of Bonds</b>
        <br />
        <br />
        The UK and European markets offer various types of bonds, each with
        distinct characteristics. Some of the common variations include:
        <br />
        <br />
        1. Zero-Coupon Bonds: These bonds do not pay coupon interest during
        their term but are sold at a discount to their par value. Investors
        receive the full face value when the bond reaches maturity. Zero-coupon
        bonds are comparable to UK government bonds called gilts.
        <br />
        <br />
        2. Convertible Bonds: These bonds carry an option allowing bondholders
        to convert their debt into equity (shares) at a specific point, based on
        predetermined conditions such as the share price. Convertible bonds
        provide flexibility to both the issuing company and investors, enabling
        lower interest payments while offering potential stock-related benefits
        if the project succeeds.
        <br />
        <br />
        3. Callable Bonds: Callable bonds have an embedded option that allows
        the issuing company to redeem or "call back" the bond before its
        maturity date. This typically occurs when interest rates decline or the
        company's credit rating improves. Callable bonds carry higher risk for
        bond buyers since they are more likely to be called back when their
        value rises. Non-callable bonds with similar maturity, credit rating,
        and coupon rate are generally considered more valuable.
        <br />
        <br />
        4. Puttable Bonds: Puttable bonds provide bondholders with the right to
        sell the bond back to the issuer before maturity. Investors may exercise
        this option if they anticipate a decline in bond value or expect
        interest rates to rise. Puttable bonds often trade at higher values
        compared to non-puttable bonds with similar credit ratings, maturity,
        and coupon rates.
        <br />
        <br />
        The combinations of embedded options in bonds can be diverse and unique,
        making comparison challenging. Individual investors often rely on bond
        professionals to select suitable bonds or bond funds based on their
        investment goals.
        <br />
        <br />
        <b> How Bonds Are Priced</b>
        <br />
        <br />
        The market prices of bonds in the United Kingdom and Europe are
        determined by their specific characteristics. Bond prices, like other
        publicly traded securities, fluctuate daily based on supply and demand.
        <br />
        <br />
        Bond prices are influenced by the prevailing interest rates in the
        economy. For fixed-rate bonds, the issuer commits to paying a coupon
        based on the face value of the bond. Suppose a bond with a £1,000 par
        value carries a 10% annual coupon rate, meaning the issuer will pay the
        bondholder £100 each year.
        <br />
        <br />
        If prevailing interest rates match the bond's coupon rate (10%),
        investors would be indifferent between investing in the corporate bond
        or a government bond, as both would yield £100. However, if interest
        rates decline to 5%, the government bond would only yield £50, while the
        corporate bond would still yield £100. This increased attractiveness of
        the corporate bond would lead investors to bid up its price, equalising
        the bond's yield with prevailing rates. Consequently, the bond's price
        would increase to, for instance, £2,000, making the £100 coupon
        represent 5%.
        <br />
        <br />
        Conversely, if interest rates rise and a government bond offers a coupon
        rate of 15%, an investor could earn £150 from the government bond and
        would not pay £1,000 to earn only £100. As a result, the bond's price
        would decrease until its yield aligns with prevailing rates, for
        instance, dropping to £666.67.
        <br />
        <br />
        The relationship between bond prices and interest rates demonstrates the
        well-known statement that bond prices vary inversely with interest
        rates. When interest rates rise, bond prices fall to equalise the bond's
        interest rate with prevailing rates, and vice versa.
        <br />
        <br />
        The yield-to-maturity (YTM) of a bond is another way to consider its
        price. YTM represents the total anticipated return if the bond is held
        until maturity. It is considered a long-term bond yield expressed as an
        annual rate. YTM involves a complex calculation, but it is a useful
        concept for evaluating the attractiveness of different bonds with
        varying coupons and maturities in the UK and European market. The YTM
        formula involves solving for the interest rate in a complex equation,
        often handled by computer analysis.
        <br />
        <br />
        Duration is another measure used to assess anticipated changes in bond
        prices due to interest rate fluctuations. Duration represents the price
        change of a bond given a 1% change in interest rates. Modified duration
        is a practical definition of duration, considering the bond's
        sensitivity to interest rate changes. Duration is not a linear risk
        measure, and as prices and rates change, the duration itself changes.
        Convexity measures the relationship between a bond's duration and
        changes in interest rates.
        <br />
        <br />
        By understanding the pricing and characteristics of bonds, investors in
        the United Kingdom and Europe can make informed decisions about their
        investment portfolios, balancing risk and potential returns.
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
              props.onChange("test10");
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
              props.onChange(11);
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
            <p className="text-txt text-white">Level 1 - Chapter 11</p>
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

export default Chapter10;
