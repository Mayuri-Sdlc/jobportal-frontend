import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";

const Chapter12 = (props) => {
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
        Chapter 12: ​​Investing in Funds: A Comprehensive Guide
      </p>
      <br />
      <b>
        The Comprehensive Guide to Investing in Funds: A Path to Informed
        Investment Decisions
      </b>
      <br />
      <p className="mt-5 font-semibold text-[22px]">Key Take Aways:</p>
      <br />
      <p className="text-[18px] text-black">
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon1} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Understanding Risks:
            <br />
            - Investments in funds carry potential gains and losses.
            <br />
            - Various risk factors include Market, Asset Class, Manager,
            Liquidity, Currency, Inflation, and Diversification Risk.
            <br />
            - Thorough research and understanding of risks are crucial before
            investing.
            <br />
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Benefits of Investing in Funds:
            <br />
            - Funds offer diversification, professional management, access to
            different asset classes, affordability, liquidity, cost efficiency,
            and regulatory oversight.
            <br />
            - It’s vital to balance these advantages against the inherent risks.
            <br />
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Fund Structures and Types:
            <br />
            - Funds can be unit trusts or OEICs and can be classified into
            Equity, Fixed Income, Balanced, Index, Sector, Geographic, and
            Alternative Funds based on investment focus.
            <br />
            - Understanding fund structures and types is essential for informed
            investment decisions.
            <br />
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Management Styles:
            <br />
            - Funds can be actively or passively managed, or a blend of both.
            <br />
            - Active management seeks to outperform the market, while passive
            management aims to replicate market performance.
            <br />
            - The choice depends on investor preference, risk tolerance, and
            investment goals.
            <br />
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Fund Objectives:
            <br />
            - Funds have specific objectives like Capital Growth, Income
            Generation, Capital Preservation, or a Balanced Approach.
            <br />
            - Aligning fund objectives with personal investment goals is
            crucial.
            <br />
          </div>
        </div>
        <br />
        <br />
        <b>Part 1: Understand the Risks</b>
        <br />
        <br />
        Investing in funds carries both potential gains and losses. It's
        important to be aware that the value of investments can go up or down,
        and you may receive less than what you initially invested. Understanding
        the risks involved is crucial for making informed investment decisions.
        <br />
        <br />
        When investing in funds, there are several risk factors to consider:
        <br />
        <br />
        <b>1. Market Risk:</b> The performance of funds can be influenced by
        market fluctuations. Economic, political, and global events can impact
        the value of the underlying investments. Market risk affects all types
        of funds, regardless of their investment strategy.
        <br />
        <br />
        <b>2. Asset Class Risk:</b> Different asset classes have varying levels
        of risk. For example, equities (stocks) are generally considered higher
        risk than bonds (fixed-income securities). Funds that invest in riskier
        asset classes may experience greater price volatility.
        <br />
        <br />
        <b>3. Manager Risk:</b> The performance of a fund is heavily dependent
        on the fund manager's expertise and investment decisions. If the manager
        fails to make successful investment choices or properly manage the fund,
        it can negatively affect returns.
        <br />
        <br />
        <b>4. Liquidity Risk:</b> Some funds invest in assets that may not be
        easily bought or sold. This lack of liquidity can pose challenges if
        investors need to sell their holdings quickly, potentially resulting in
        delays or receiving a lower price than expected.
        <br />
        <br />
        <b>5. Currency Risk:</b> If a fund invests in assets denominated in
        foreign currencies, fluctuations in exchange rates can impact returns.
        Currency risk arises from changes in the relative value of one currency
        against another.
        <br />
        <br />
        <b>6. Inflation Risk:</b> Over time, inflation erodes the purchasing
        power of money. If the returns on your investments do not keep pace with
        inflation, the real value of your investments may decrease.
        <br />
        <br />
        <b>7. Diversification Risk:</b> While diversification is often
        recommended to reduce risk, it does not guarantee protection against
        losses. Poor performance or economic downturns affecting a particular
        sector or asset class can impact a diversified portfolio.
        <br />
        <br />
        It's crucial to thoroughly research and understand the risks associated
        with specific funds before investing. Consider your risk tolerance,
        investment goals, and time horizon. Diversification across different
        asset classes, sectors, and geographic regions can help manage risk. If
        you're uncertain about a specific investment or risk tolerance, seek
        advice from a financial professional who can provide personalised
        guidance based on your circumstances.
        <br />
        <br />
        <b>Part 2: Why Invest in Funds?</b>
        <br />
        <br />
        Investing in funds offers several advantages that make them an
        attractive option for investors. Understanding these benefits can help
        you make informed decisions about incorporating funds into your
        investment strategy.
        <br />
        <br />
        <b>Diversification:</b> Funds provide instant diversification by
        investing in a wide range of securities or assets. Rather than investing
        in individual stocks or bonds, which can be riskier due to concentrated
        exposure, funds allow you to spread your investments across multiple
        holdings. This diversification helps reduce the impact of any single
        investment's performance on your overall portfolio.
        <br />
        <br />
        <b>Professional Management:</b> When you invest in funds, you benefit
        from the expertise of professional fund managers. These managers have
        in-depth knowledge and experience in analysing and selecting
        investments. They actively manage the fund's portfolio, making
        investment decisions based on their research and market insights. This
        professional management can save you time and effort in researching and
        managing individual investments.
        <br />
        <br />
        <b>Access to Different Asset Classes:</b> Funds provide access to a wide
        variety of asset classes, including stocks, bonds, real estate,
        commodities, and more. This allows you to easily diversify your
        portfolio across different asset types and potentially benefit from the
        performance of various sectors or regions. Without funds, accessing
        certain asset classes, such as international stocks or real estate,
        might be challenging for individual investors.
        <br />
        <br />
        <b>Affordability:</b> Investing in funds allows you to start with
        smaller amounts of capital. Rather than needing a substantial sum to buy
        individual stocks or bonds, you can invest in funds with lower minimum
        investment requirements. This affordability makes funds accessible to a
        broader range of investors.
        <br />
        <br />
        <b>Liquidity:</b> Funds typically offer high liquidity, meaning you can
        buy or sell your investment at any time. Unlike certain assets, such as
        real estate or private equity, where liquidity can be limited, funds
        provide you with the ability to convert your investment into cash
        quickly.
        <br />
        <br />
        <b>Cost Efficiency:</b> Investing in funds can be cost-effective
        compared to building a portfolio of individual securities. When you buy
        shares of a fund, you share the costs of research, administration, and
        transaction fees with other investors. Additionally, the economies of
        scale enjoyed by fund managers can often lead to lower trading costs and
        management fees.
        <br />
        <br />
        <b>Regulatory Oversight:</b> Funds are subject to regulatory oversight
        to ensure investor protection. Fund managers must adhere to specific
        regulations and reporting requirements, providing transparency and
        accountability to investors. Regulatory bodies, such as the Financial
        Conduct Authority (FCA), monitor and regulate fund activities to
        maintain market integrity.
        <br />
        <br />
        It's important to note that while funds offer several advantages, they
        also come with risks. As an investor, it's essential to evaluate these
        factors and choose funds that align with your investment goals, risk
        tolerance, and time horizon.
        <br />
        <br />
        <b>Part 3: What Are Funds?</b>
        <br />
        <br />
        Funds, also known as collective investment schemes, pool money from
        multiple investors to invest in a diversified portfolio of securities or
        assets. Understanding the structure, types, and characteristics of funds
        is essential when considering them as an investment option.
        <br />
        <br />
        <b>Structure of Funds:</b>
        <br />
        <br />
        Funds are typically structured as either unit trusts or open-ended
        investment companies (OEICs).
        <br />
        <br />
        <b>Unit Trusts:</b>
        Unit trusts are set up as trusts governed by a trust deed. When you
        invest in a unit trust, you purchase units in the trust. The value of
        these units is determined by the underlying investments held by the
        trust. Unit trusts have a dual pricing structure, with a bid price (the
        price at which units are sold) and an offer price (the price at which
        units are bought). The difference between the bid and offer price is
        known as the bid-offer spread.
        <br />
        <br />
        <b>Open-Ended Investment Companies (OEICs):</b>
        OEICs are structured as companies and issue shares to investors. When
        you invest in an OEIC, you buy shares in the company at the prevailing
        single price, which is determined by the net asset value (NAV) per
        share. Unlike unit trusts, OEICs do not have a bid-offer spread, making
        them simpler to understand.
        <br />
        <br />
        Both unit trusts and OEICs are governed by regulations that ensure
        investor protection and provide transparency regarding their operations
        and reporting.
        <br />
        <br />
        <b>Types of Funds:</b>
        <br />
        <br />
        Funds can be classified based on various factors, including the types of
        assets they invest in, investment strategies, geographic focus, and risk
        profiles. Here are some common types of funds:
        <br />
        <br />
        <b>Equity Funds: </b>
        These funds invest primarily in stocks or equities of companies. They
        can focus on specific sectors (such as technology, healthcare, or
        energy) or have a broader market exposure.
        <br />
        <br />
        <b>Fixed Income Funds: </b>
        Fixed income funds invest in bonds and other fixed-income securities
        issued by governments, municipalities, or corporations. They aim to
        generate income through regular interest payments.
        <br />
        <br />
        <b>Balanced Funds:</b>
        Also known as asset allocation funds, balanced funds invest in a mix of
        equities and fixed-income securities to provide a balanced approach
        between potential growth and income.
        <br />
        <br />
        <b>Index Funds:</b>
        Index funds, also known as passive funds or tracker funds, aim to
        replicate the performance of a specific market index, such as the S&P
        500 or FTSE 100. They do not rely on active management decisions.
        <br />
        <br />
        <b>Sector Funds:</b>
        Sector funds focus on a specific industry or sector, such as technology,
        healthcare, or real estate. They offer targeted exposure to a particular
        segment of the market.
        <br />
        <br />
        <b>Geographic Funds:</b>
        Geographic funds invest in securities of companies located in specific
        regions or countries. For example, there are funds focused on emerging
        markets, developed markets, or specific countries like the United States
        or China.
        <br />
        <br />
        <b>Alternative Funds:</b>
        Alternative funds include investments in non-traditional assets like
        commodities, hedge funds, private equity, infrastructure, or real estate
        investment trusts (REITs).
        <br />
        <br />
        <b>Fund Characteristics:</b>
        <br />
        <br />
        When evaluating funds, consider the following characteristics:
        <br />
        <br />
        <b>Investment Objective: </b>
        Each fund has a specific investment objective, such as capital growth,
        income generation, or a combination of both. Review the fund's objective
        to ensure it aligns with your investment goals.
        <br />
        <br />
        <b>Risk Profile:</b>
        Funds have different risk profiles based on the assets they invest in
        and their investment strategies. Assess the fund's risk level and
        determine if it matches your risk tolerance.
        <br />
        <br />
        <b>Performance Track Record:</b>
        Analyze the fund's historical performance to understand how it has
        performed over different market conditions. Past performance is not a
        guarantee of future results but can provide insights into the fund
        manager's skills and the fund's potential.
        <br />
        <br />
        <b>Fund Size and Liquidity: </b>
        Consider the size of the fund and its liquidity. Larger funds may offer
        greater liquidity, making it easier to buy or sell units. Smaller funds
        might have more flexibility in their investment approach.
        <br />
        <br />
        <b>Fees and Expenses:</b>
        Assess the fees and expenses associated with the fund, such as
        management fees, administration fees, and transaction costs. Compare
        these fees with the fund's performance and similar funds in the market.
        <br />
        <br />
        Understanding the structure, types, and characteristics of funds allows
        you to select the ones that align with your investment objectives, risk
        tolerance, and preferences. It's important to conduct thorough research,
        review fund documentation (such as the Key Investor Information
        Document), and seek professional advice if needed.
        <br />
        <br />
        <b>Part 4: How Are Funds Managed?</b>
        <br />
        <br />
        Understanding how funds are managed and the different approaches to fund
        management is essential when considering investments in funds. Fund
        management styles can have a significant impact on the fund's
        performance and risk characteristics.
        <br />
        <br />
        <b>1. Active Fund Management:</b>
        Active fund management involves a team of professional fund managers and
        analysts who actively make investment decisions with the goal of
        outperforming the market or a specific benchmark. Here are key features
        of active fund management:
        <br />
        <br />
        <b>Fund Managers:</b> Experienced professionals oversee the fund's
        investments, conducting research, and making investment decisions. They
        analyse market trends, economic data, and company-specific information
        to identify investment opportunities.
        <br />
        <br />
        <b>Fundamental Analysis:</b> Fund managers use fundamental analysis to
        assess the intrinsic value of securities. They evaluate company
        financials, industry trends, competitive positioning, and management
        quality to determine which investments to include in the fund's
        portfolio.
        <br />
        <br />
        <b>Portfolio Turnover:</b> Active management may involve frequent buying
        and selling of securities as fund managers make adjustments based on
        their analysis and market outlook. This can result in higher portfolio
        turnover, which may lead to higher transaction costs and potential tax
        implications.
        <br />
        <br />
        <b>Potential for Outperformance:</b> The active management approach aims
        to deliver superior returns by identifying mispriced securities or
        taking advantage of market inefficiencies. Skilled fund managers can
        generate alpha, which represents the excess return above the market's
        performance.
        <br />
        <br />
        <b>Higher Management Fees:</b> Active management typically incurs higher
        management fees compared to passive funds. These fees cover the cost of
        research, analysis, and the expertise of the fund management team.
        <br />
        <br />
        <b>Passive Fund Management:</b>
        <br />
        <br />
        Passive fund management, also known as index tracking or passive
        investing, aims to replicate the performance of a specific market index
        or benchmark. Here's what you need to know about passive fund
        management:
        <br />
        <br />
        <b>Index Replication:</b> Passive funds hold a portfolio of securities
        designed to closely mirror the composition and weightings of a target
        index. The goal is to achieve returns that closely match the performance
        of the chosen index.
        <br />
        <br />
        <b>Low Portfolio Turnover:</b> Passive funds tend to have low portfolio
        turnover since they aim to maintain the same securities and weightings
        as the target index. This results in lower transaction costs and
        potential tax advantages.
        <br />
        <br />
        <b>Lower Fees: </b>Passive funds generally have lower management fees
        compared to actively managed funds. Since there is no need for extensive
        research or ongoing analysis, the costs associated with managing passive
        funds are typically lower.
        <br />
        <br />
        <b>Market Performance Tracking:</b> Rather than trying to outperform the
        market, passive funds aim to track the market's performance. The returns
        of a passive fund closely align with the returns of the chosen index,
        minus any tracking error.
        <br />
        <br />
        <b>Broad Market Exposure:</b> Passive funds provide investors with
        diversified exposure to a particular market or asset class. For example,
        an investor looking to invest in the U.S. stock market may choose a
        passive fund that tracks the S&P 500 Index.
        <br />
        <br />
        <b>Blend of Active and Passive:</b>
        <br />
        <br />
        Some funds may adopt a blend of active and passive management
        strategies. These funds, often referred to as smart-beta or factor-based
        funds, combine elements of both approaches. They use rules-based
        strategies to create portfolios that aim to outperform traditional
        market cap-weighted indices. These funds can follow specific investment
        factors such as value, growth, momentum, or quality. The active
        component comes from the selection and weighting of securities based on
        these factors, while the passive component involves tracking the overall
        performance of the chosen factor-based index.
        <br />
        <br />
        It's important to consider the fund management style that aligns with
        your investment objectives, risk tolerance, and investment philosophy.
        Active management may be suitable for investors seeking potentially
        higher returns and are comfortable with higher fees. Passive management
        is often favored by investors seeking broad market exposure with lower
        costs. Understanding the fund's management style is crucial in making
        informed investment decisions.
        <br />
        <br />
        <b>Part 5: Understanding Fund Objectives</b>
        <br />
        <br />
        When investing in funds, it's important to understand the fund's
        objectives and how they align with your investment goals. Each fund has
        a specific investment objective that outlines its primary purpose and
        the intended outcome for investors. Understanding these objectives helps
        you make informed decisions about which funds are suitable for your
        investment strategy.
        <br />
        <br />
        Here are some common fund objectives:
        <br />
        <br />
        <b>Capital Growth:</b> Funds with a capital growth objective aim to
        increase the value of the invested capital over the long term. These
        funds typically invest in assets that have the potential for significant
        appreciation, such as stocks of companies with high growth prospects or
        emerging markets. Income Generation: Funds with an income generation
        objective focus on generating regular income for investors. They invest
        in assets that provide consistent income streams, such as
        dividend-paying stocks, bonds, or real estate investment trusts (REITs).
        Income funds are suitable for investors seeking regular cash flow from
        their investments.
        <br />
        <br />
        <b>Capital Preservation:</b> Some funds prioritise capital preservation,
        aiming to protect the invested capital from significant losses. These
        funds often invest in lower-risk assets, such as government bonds or
        highly rated fixed-income securities. Capital preservation funds are
        suitable for conservative investors who prioritise the safety of their
        investments. Balanced Approach: Balanced funds, also known as asset
        allocation funds, seek to strike a balance between capital growth and
        income generation. These funds invest in a mix of asset classes, such as
        stocks, bonds, and cash, to achieve a diversified portfolio with
        potential for both capital appreciation and regular income.
        <br />
        <br />
        <b>Sector/Theme-Specific Objectives:</b> Certain funds may have
        sector-specific or theme-specific objectives. For example, a fund may
        focus on environmental sustainability, technology innovation, or
        healthcare advancements. These funds aim to capitalise on specific
        sectors or themes that align with investor interests or macroeconomic
        trends. It's important to review a fund's investment objective and
        ensure it aligns with your investment goals, risk tolerance, and time
        horizon. Consider whether the fund's objective matches your desired
        outcomes and whether the fund's strategy and asset allocation support
        its stated objective.
        <br />
        <br />
        Additionally, it's essential to consider the fund's investment
        restrictions or limitations. Some funds may have specific guidelines
        regarding the types of securities or sectors they can invest in, which
        may affect their risk profile and potential returns.
        <br />
        <br />
        By understanding the fund's objectives and ensuring they align with your
        investment preferences, you can make more informed decisions when
        selecting funds for your investment portfolio.
        <br />
        <br />
        <b>Part 6: Types of Fund Units - Income vs. Accumulation</b>
        <br />
        <br />
        When investing in funds, you'll often come across different types of
        fund units, namely income units and accumulation units. These units
        represent the way in which the fund distributes or reinvests income
        generated from its underlying investments. Understanding the difference
        between income and accumulation units is crucial for selecting the
        appropriate option based on your investment objectives and preferences.
        <br />
        <br />
        <b>Income Units:</b> Income units, as the name suggests, focus on
        providing investors with regular income payments. Here's how income
        units work:
        <br />
        <br />
        <b>Distribution of Income:</b> Funds with income units collect income
        generated from the underlying investments, such as dividends from stocks
        or interest payments from bonds. Instead of reinvesting this income, the
        fund distributes it to unit holders as cash payments at regular
        intervals, typically on a monthly, quarterly, or annual basis.
        <br />
        <br />
        <b>Cash Flow for Investors:</b> Investors holding income units receive
        regular income payments, which can supplement their overall cash flow.
        These payments can be used for living expenses, reinvested in other
        investments, or saved for future use.
        <br />
        <br />
        <b>Price Stability:</b> Income units may exhibit relatively stable
        prices, as the income distributions effectively reduce the fund's net
        asset value (NAV) per unit. Investors primarily seek income from these
        units rather than focusing on capital growth.
        <br />
        <br />
        <b>Accumulation Units:</b>Accumulation units, on the other hand,
        prioritise the growth and compounding of capital.
        <br />
        <br />
        Here's how accumulation units work:
        <br />
        <br />
        <b>Reinvestment of Income:</b> Funds with accumulation units reinvest
        the income generated from the underlying investments back into the fund.
        Instead of distributing the income to investors as cash payments, the
        fund uses it to purchase additional units on behalf of investors.
        <br />
        <br />
        <b>Compounding Effect:</b> By reinvesting the income, accumulation units
        benefit from the compounding effect over time. The reinvested income
        contributes to the growth of the fund's overall value, potentially
        leading to capital appreciation.
        <br />
        <br />
        <b>Long-Term Growth Focus:</b> Investors holding accumulation units aim
        to maximise the growth potential of their investments over the long
        term. They prioritise the reinvestment of income to benefit from
        potential capital gains.
        <br />
        <br />
        When choosing between income and accumulation units, consider your
        investment goals and cash flow needs. If you're seeking regular income
        from your investments, income units can provide a steady stream of cash
        payments. On the other hand, if you're focused on long-term capital
        growth and compounding, accumulation units can help maximise the growth
        potential of your investments.
        <br />
        <br />
        It's important to note that not all funds offer both income and
        accumulation units. Some funds may only offer one type, while others may
        offer a combination of both. Review the fund's documentation, such as
        the Key Investor Information Document (KIID), to determine the unit type
        available and ensure it aligns with your investment preferences.
        <br />
        <br />
        <b>Part 7: Fund Dealing and Valuation</b>
        <br />
        <br />
        Understanding how fund dealing and valuation work is essential when
        investing in funds. Funds have specific dealing times and valuation
        points that impact when you can buy or sell units and how their prices
        are determined. Let's explore these aspects in more detail:
        <br />
        <br />
        <b>Dealing in Funds:</b>Unlike individual stocks that can be traded
        throughout the trading day, funds are generally traded once a day.
        Here's what you need to know about fund dealing:
        <br />
        <br />
        <b>Dealing Frequency:</b> Funds typically have a dealing frequency of
        once per business day. This means that you can place orders to buy or
        sell fund units at specified times during the trading day.
        <br />
        <br />
        <b>Cut-off Times:</b> Funds have specific cut-off times for placing
        orders. To ensure your order is executed at the next valuation point,
        you must submit your buy or sell order before the cut-off time. Orders
        placed after the cut-off time will be executed at the subsequent
        valuation point.
        <br />
        <br />
        <b>Next Valuation Point:</b> If you place an order to buy or sell fund
        units, it will be executed at the next valuation point. Valuation points
        are usually set once per day, often at noon or another predetermined
        time. At the valuation point, the fund manager calculates the net asset
        value (NAV) per unit, which determines the buying and selling prices.
        <br />
        <br />
        <b>Valuation of Fund Units:</b>The valuation of fund units is a critical
        process that determines the price at which units are bought and sold.
        <br />
        <br />
        Here's how it works:
        <br />
        <br />
        <b>Net Asset Value (NAV):</b> The NAV represents the total value of a
        fund's assets minus its liabilities. The fund manager calculates the NAV
        per unit at each valuation point by dividing the total value of the fund
        by the number of units outstanding.
        <br />
        <br />
        <b>Bid and Offer Prices:</b> Funds typically have bid (selling) and
        offer (buying) prices. The bid price is the price at which units are
        sold, and the offer price is the price at which units are bought. The
        difference between the bid and offer price is known as the bid-offer
        spread, which covers the costs and fees associated with buying or
        selling units.
        <br />
        <br />
        <b>Unit Price Changes:</b> The price of fund units can fluctuate based
        on the performance of the underlying investments and market conditions.
        As the value of the fund's assets changes, the NAV per unit will also
        change, leading to corresponding adjustments in the bid and offer
        prices.
        <br />
        <br />
        It's important to be aware of the specific dealing times and cut-off
        times of the funds you're interested in. Placing your buy or sell orders
        before the cut-off time ensures that your transactions will be processed
        at the next valuation point. Additionally, understanding how unit prices
        are determined helps you monitor the fluctuations in fund prices and
        make informed investment decisions.
        <br />
        <br />
        <b> Part 8: Understanding Fund Charges</b>
        <br />
        <br />
        When investing in funds, it's important to understand the various
        charges associated with fund investments. These charges can impact your
        investment returns and should be considered when evaluating the
        suitability of a fund. Let's explore the different types of fund
        charges:
        <br />
        <br />
        <b>Ongoing Charges Figure (OCF) or Total Expense Ratio (TER):</b>The
        ongoing charges figure (OCF) or total expense ratio (TER) represents the
        annual percentage of a fund's assets that are used to cover the costs of
        managing and operating the fund. It includes management fees,
        administrative expenses, custody fees, and other charges incurred by the
        fund.
        <br />
        <br />
        Here's what you need to know about OCF/TER:
        <br />
        <br />
        <b>Calculation and Disclosure:</b> The OCF/TER is calculated daily and
        expressed as an annual percentage. Fund providers are required to
        disclose the OCF/TER in their fund documentation, such as the Key
        Investor Information Document (KIID). It allows investors to compare the
        costs of different funds.
        <br />
        <br />
        <b>Impact on Returns:</b> The OCF/TER is deducted from the fund's net
        asset value (NAV), which affects the returns received by investors.
        Higher ongoing charges can reduce the net returns of a fund, while lower
        charges can potentially enhance returns.
        <br />
        <br />
        <b>Performance Fee:</b>Some funds may have a performance fee structure
        in addition to the ongoing charges. Performance fees are typically paid
        to the fund manager when specific performance targets or benchmarks are
        achieved.
        <br />
        <br />
        Here's what you should know about performance fees:
        <br />
        <br />
        <b>Conditions for Performance Fee:</b> The conditions for a performance
        fee vary depending on the fund. It may be triggered when the fund
        outperforms a benchmark, achieves a certain level of absolute return, or
        exceeds a predetermined hurdle rate.
        <br />
        <br />
        <b>Fee Calculation:</b> Performance fees are calculated based on a
        percentage of the excess return generated by the fund. The excess return
        is the amount by which the fund's performance surpasses the performance
        target or benchmark.
        <br />
        <br />
        <b>Consideration for Investors:</b> When evaluating funds with
        performance fees, consider whether the fee structure aligns with your
        investment goals and the potential impact on your returns. It's
        important to assess whether the fund manager's ability to consistently
        outperform justifies the additional costs incurred through performance
        fees.
        <br />
        <br />
        <b>Platform or Brokerage Fees:</b>In addition to the charges associated
        with the fund itself, investors may also incur platform or brokerage
        fees when investing in funds through an investment platform or
        brokerage. These fees cover the services provided by the platform, such
        as account administration, research tools, and customer support.
        <br />
        <br />
        <b>Percentage or Flat Fee: </b>Platform fees can be charged as a
        percentage of your invested assets or as a flat fee. The fee structure
        may vary depending on the platform or brokerage you use.
        <br />
        <br />
        <b>Consideration for Investors:</b> When choosing an investment platform
        or brokerage, compare the fees charged and the services offered to
        ensure they align with your needs. It's important to find a balance
        between competitive fees and the quality of services provided.
        <br />
        <br />
        It's essential to carefully review and understand the charges associated
        with funds before making investment decisions. Consider how the charges
        may impact your investment returns over the long term and assess whether
        the potential benefits of the fund justify the costs incurred.
        <br />
        <br />
        <b>Part 9: Conducting Due Diligence and Research</b>
        <br />
        <br />
        When investing in funds, conducting thorough due diligence and research
        is crucial to make informed investment decisions. It involves gathering
        information, analysing various factors, and assessing the suitability of
        a fund for your investment goals.
        <br />
        <br />
        Here's a step-by-step guide to help you conduct effective due diligence:
        <br />
        <br />
        <b>Define Your Investment Goals:</b> Begin by clarifying your investment
        objectives, risk tolerance, and time horizon. Determine whether you're
        seeking capital growth, income generation, or a balanced approach. This
        will help you identify funds that align with your goals.
        <br />
        <br />
        <b>Research Fund Providers:</b> Look into the reputation, track record,
        and expertise of the fund providers or asset management companies.
        Consider factors such as their experience in managing funds, the
        stability of their operations, and the quality of their investment
        processes.
        <br />
        <br />
        <b>Review Fund Documentation: </b>Carefully examine the fund
        documentation, including the Key Investor Information Document (KIID),
        prospectus, annual reports, and financial statements. These documents
        provide valuable information about the fund's investment objectives,
        strategies, past performance, risk factors, and fees.
        <br />
        <br />
        <b>Assess Fund Performance:</b> Evaluate the fund's historical
        performance over different time periods. Look for consistency in returns
        and assess how the fund has performed relative to its benchmark or
        peers. However, remember that past performance is not a guarantee of
        future results.
        <br />
        <br />
        <b>Analyse Risk Factors:</b> Consider the fund's risk profile and
        evaluate the risks associated with its investment strategy. Assess
        factors such as market risk, credit risk, liquidity risk, and any
        specific risks related to the fund's asset class or investment focus.
        <br />
        <br />
        Portfolio Composition: Analyze the fund's portfolio holdings and asset
        allocation. Understand the types of investments it holds, such as
        stocks, bonds, or alternative assets. Assess the diversification and
        concentration levels within the portfolio.
        <br />
        <br />
        <b>Consider Fund Expenses:</b> Evaluate the fund's ongoing charges,
        performance fees (if applicable), and other expenses.
        <br />
        <br />
        Compare the fund's fees with similar funds in the market to ensure they
        are reasonable and aligned with the fund's performance and services
        provided.
        <br />
        <br />
        <b>Review Fund Manager Expertise: </b>Assess the qualifications,
        experience, and track record of the fund manager or management team.
        Consider their investment philosophy, process, and their ability to
        execute the fund's strategy effectively.
        <br />
        <br />
        <b> Seek Professional Advice (if needed):</b> If you're unsure or need
        expert guidance, consider seeking advice from a financial advisor. A
        qualified advisor can help assess your investment needs, provide
        personalised recommendations, and guide you through the fund selection
        process.
        <br />
        <br />
        <b>Monitor and Review Regularly:</b> Once you've invested in a fund,
        it's important to monitor its performance and review your investment
        periodically. Stay updated on the fund's progress, changes in the market
        or economic conditions, and any updates or notifications from the fund
        provider.
        <br />
        <br />
        By conducting thorough due diligence and research, you can make informed
        investment decisions and select funds that align with your investment
        goals, risk tolerance, and preferences. Remember that investing involves
        risks, and it's essential to carefully assess the suitability of a fund
        before committing your capital.
        <br />
        <br />
       <b> Concluding Remarks:</b>
        <br />
        <br />
        Investing in funds can be a rewarding way to grow your wealth, achieve
        financial goals, and diversify your portfolio. In this comprehensive
        guide, we've covered essential aspects of fund investing, equipping you
        with valuable knowledge to make informed investment decisions.
        <br />
        <br />
        Throughout the guide, we explored the importance of understanding the
        risks and potential returns associated with funds, the benefits of
        diversification and professional management, and the different types of
        funds available. We delved into fund objectives, fund management styles,
        and the significance of considering income and accumulation units. We
        also discussed fund dealing and valuation, fund charges, and the
        importance of conducting due diligence and research.
        <br />
        <br />
        As an investor, it's crucial to approach fund investing with a clear
        understanding of your investment goals, risk tolerance, and time
        horizon. By aligning your objectives with the fund's investment
        strategy, carefully assessing performance, considering expenses, and
        conducting thorough due diligence, you can make well-informed investment
        decisions.
        <br />
        <br />
        Remember that investing involves risks, and no investment is guaranteed
        to generate profits. It's important to regularly monitor your
        investments, stay informed about market trends, and review your
        portfolio periodically to ensure it aligns with your changing financial
        circumstances.
        <br />
        <br />
        We hope this guide has provided you with the knowledge and confidence to
        embark on your fund investment journey. If you have any further
        questions or need assistance, don't hesitate to reach out to reputable
        financial advisors or investment professionals who can provide
        personalised guidance based on your specific needs.
        <br />
        <br />
        Happy investing and may your journey towards financial prosperity be
        successful!
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
              props.onChange("test12");
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
              props.onChange(13);
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
            <p className="text-txt text-white">Level 1 - Chapter 13</p>
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

export default Chapter12;
