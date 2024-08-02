import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";

const Chapter13 = (props) => {
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
        Chapter 13: ​​Unconventional Finance: Exploring Alternative Investments
      </p>
      <br />
      <b>What constitutes an alternative investment?</b>
      <br />
      In the financial ecosystem, an alternative investment is defined as any
      financial asset that doesn't fall under the traditional umbrella of
      investment types. These traditional investment categories often comprise
      stocks, bonds, and cash equivalents. However, alternative investments
      encompass a diverse range of assets including private equity, venture
      capital, hedge funds, managed futures, artworks and antiques, commodities,
      and derivatives contracts. Real estate is frequently considered part of
      this unconventional portfolio.
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
            An alternative investment is a financial asset which doesn't conform
            to traditional investment classes such as equities, fixed income
            securities, or cash.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            A broad array of alternative investments exists, spanning from
            private equity and hedge funds to commodities and tangible assets
            like art and antiques.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Alternative investments often experience less regulation from
            financial authorities like the Financial Conduct Authority ( FCA )
            and might exhibit illiquid traits.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Although traditionally geared towards institutional or accredited
            investors, alternative investments are now accessible to retail
            investors through specialised funds.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Commonly sought after alternative investments include real estate,
            commodities, cryptocurrencies, and collectible items.
          </div>
        </div>
        <br />
        <br />
        <b>Decoding Alternative Investments</b>
        <br />
        <br />
        Predominantly, alternative investment assets find their place in the
        portfolios of institutional investors or high-net-worth individuals. The
        reason behind this bias is their intricate nature, the regulatory
        ambiguity, and the inherent level of risk associated with these
        investment classes. Also, many alternative investments come with high
        initial investment requirements and fee structures, particularly when
        compared with more conventional investment vehicles such as mutual funds
        and exchange-traded funds (ETFs).
        <br />
        <br />
        Alternative investments are typically associated with less transparency,
        offering limited opportunities for publishing verifiable performance
        data or advertising to potential investors. Despite their high initial
        costs and investment fees, transaction costs for alternative assets are
        generally lower than those of conventional assets due to reduced levels
        of trading activity.
        <br />
        <br />
        It's important to note that most alternative assets are relatively
        illiquid compared to their traditional counterparts. For instance,
        selling a vintage bottle of wine that's 80 years old might pose a
        greater challenge than selling 1,000 shares of a company such as Apple
        Inc., mainly due to the restricted number of prospective buyers.
        Investors may face hurdles when attempting to ascertain the value of
        alternative investments because these assets and transactions involving
        them are often unique. For example, pricing a 1933 Saint-Gaudens Double
        Eagle $20 gold coin can be challenging as there are only 11 known in
        existence, and just one of them is legally available for ownership.
        <br />
        <br />
        <b>
          {" "}
          Diversifying Portfolios: Understanding Different Types of Alternative
          Investments
        </b>
        <br />
        <br />
        <b>Real Estate Investments</b>
        <br />
        <br />
        One way to venture into alternative investments is through real estate,
        which involves investing in physical properties or property-focused
        securities such as Real Estate Investment Trusts (REITs), real estate
        mutual funds, or crowdfunding platforms. Real estate investments not
        only provide potential capital appreciation but also generate stable
        cash flow from operational income.
        <br />
        <br />
        <b>Commodities as Investments</b>
        <br />
        <br />
        Commodities are essentially raw materials such as gold, silver, oil, or
        agricultural goods. These tangible goods possess intrinsic value due to
        their real-world applications and enduring demand, making them
        attractive alternative investments. For instance, the price of gold,
        utilised across various industries, is usually stable, thus providing
        investors a solid investment opportunity.
        <br />
        <br />
        <b>Farmland as an Alternative Investment</b>
        <br />
        <br />
        Farmland presents an intriguing blend of real estate and commodity
        investments. By investing in farmland, investors can benefit from both
        the tangible value of the land and potential income generated from the
        sale of agricultural products.
        <br />
        <br />
        <b>Investing in Art and Collectibles</b>
        <br />
        <br />
        Certain hobbies can double as alternative investments. Art, sports
        memorabilia, entertainment collectibles, and similar items can have
        inherent value that appreciates over time, particularly as the
        associated individuals or events gain historical significance.
        <br />
        <br />
        <b>Cryptocurrencies</b>
        <br />
        <br />
        Cryptocurrencies, a novel form of digital currency, are considered
        alternative investments due to their deviation from traditional stocks
        and bonds. While some may argue that cryptocurrencies don't offer a
        solid hedge against other risk-oriented investments, they can
        potentially provide capital appreciation and passive income through
        staking rewards.
        <br />
        <br />
        <b> Venture Capital/Private Equity</b>
        <br />
        <br />
        Venture capital and private equity investments blur the line of what is
        considered an alternative investment. They can be viewed as a more
        sophisticated branch of equity investments. Rather than trading shares
        of public companies on open markets, investors can explore alternative
        routes to invest in private firms or startups.
        <br />
        <br />
        <b>Peer-to-Peer Lending</b>
        <br />
        <br />
        Investing in peer-to-peer lending involves providing loans to
        individuals or businesses via online platforms that match borrowers with
        investors. Although peer-to-peer lending resembles bond investments, it
        is typically conducted on more private markets and often involves
        transactions with riskier clients, thus offering higher potential
        rewards.
        <br />
        <br />
        In essence, the term "alternative investment" refers to any asset that
        stands apart from traditional stocks and bonds. It's a broad term that
        could encompass anything from a mint-condition Star Wars figurine
        gaining value over time to an undervalued local warehouse ready for
        development.
        <br />
        <br />
        <b>Pros, Cons, and Entry Points: Navigating Alternative Investments</b>
        <br />
        <br />
        <b> The Upsides of Alternative Investments</b>
        <br />
        <br />
        Alternative investments, owing to their distinct nature and
        differentiation from traditional markets, often exhibit low correlations
        to customary investments like stocks and bonds. This characteristic
        makes alternative investments appealing to investors seeking portfolio
        diversification to potentially mitigate overall risk.
        <br />
        <br />
        Being considered riskier, alternative investments often hold the promise
        of higher returns than conventional investments. Additionally, the
        variety of forms and structures these investments take offers investors
        the flexibility to select options that align with their preferences,
        risk tolerance, and investment objectives. For instance, certain
        cryptocurrencies might appeal to investors due to passive income
        opportunities.
        <br />
        <br />
        Several alternative investments provide safeguards against inflation.
        Consider, for instance, a real estate lease with built-in rent
        escalations or commodities tied to current market prices that can vary.
        Unlike other forms of investment, investors can select certain assets
        that may move in sync with inflation.
        <br />
        <br />
        Lastly, alternative investments might open up opportunities in markets
        that aren't accessible via traditional investment routes, such as
        emerging markets or niche sectors. This diversification can lead to both
        an engaging investment experience and potential price stability due to
        the illiquid nature of the market, which can discourage impulsive
        selling.
        <br />
        <br />
        <b>The Downsides of Alternative Investments</b>
        <br />
        <br />
        Alternative investments often come with higher fees and expenses
        compared to traditional investments. For instance, private equity and
        hedge funds frequently levy high management and performance fees, which
        can eat into investors' returns. Unlike many brokers offering cost-free
        trades of numerous stocks and bonds, alternative investment products
        usually come at a cost.
        <br />
        <br />
        As highlighted earlier, alternative investments are typically illiquid,
        which can be a double-edged sword. If an investor needs to sell a rare
        piece of memorabilia to quickly raise cash, they may encounter
        difficulties due to a lack of an active market. This could lead to
        significant transaction costs or value loss.
        <br />
        <br />
        Given that many alternative investments are not commonly traded
        publicly, acquiring market data on historical trends or pricing may be
        challenging. With fewer regulatory requirements compared to public
        companies, alternative investments might be exposed to a higher risk of
        fraudulent activity and misconduct.
        <br />
        <br />
        Lastly, the complexity of alternative investments can present
        challenges. Some may have intricate structures and terms that can be
        hard for investors to grasp, thereby increasing the risk of uninformed
        or unsuitable investment decisions.
        <br />
        <br />
        <b> How to Venture into Alternative Investments</b>
        <br />
        <br />
        The path to investing in alternative investments varies greatly based on
        the type of asset under consideration. Here's a brief overview of how
        one can get started with a few popular alternatives:
        <br />
        <br />
        <b>Private Equity:</b> These investments typically entail purchasing
        shares in private companies. Investors can engage in private equity
        investments via private equity firms, venture capital funds, or
        crowdfunding platforms.
        <br />
        <br />
        <b>Real Estate:</b> This can be accessed through various means such as
        buying rental properties, investing in Real Estate Investment Trusts
        (REITs), or engaging in real estate crowdfunding platforms.
        <br />
        <br />
        <b>Hedge Funds:</b> Generally available only to accredited investors,
        hedge fund investments require a high net worth and a substantial amount
        of investment capital. Investors can access these via hedge fund
        managers or brokers.
        <br />
        <br />
        <b>Commodities:</b> Commodity investments involve buying physical assets
        such as gold, silver, oil, or agricultural products. These can be
        accessed through commodity trading platforms, exchange-traded funds
        (ETFs), or mutual funds.
        <br />
        <br />
        <b>Art and Collectibles:</b> Investments in art and collectables can be
        made through art dealers, auction houses, or online marketplaces. Given
        the unique nature of these items, the reputation of the dealer should be
        considered.
        <br />
        <br />
        <b>Cryptocurrencies: </b>Investments can be made via cryptocurrency
        exchanges, brokers, or online platforms. Typically, investors must
        deposit domestic currency into a digital wallet that stores their
        private keys and currencies.
        <br />
        <br />
        Keep in mind that most alternative investments come with transaction or
        processing fees. Therefore, it's important to be aware of any ongoing or
        one-time fees when considering these investments.
        <br />
        <br />
        In Level 2, we will delve deeper into the valuation and legal landscape
        surrounding alternative investments. The discussion will encompass
        pertinent regulations, the role of regulatory bodies, and key tax
        considerations that can influence the profitability and viability of
        these unconventional investment options. As we navigate the intricacies
        of alternative investments, a thorough understanding of these aspects
        becomes crucial for making informed decisions and optimising returns.
        Stay tuned as we unpack these complexities in our continuous journey of
        exploring the fascinating world of alternative investments.
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
              props.onChange("test13");
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

export default Chapter13;
