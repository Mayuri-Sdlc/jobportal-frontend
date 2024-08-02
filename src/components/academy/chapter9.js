import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";
import hexagon5 from "../../images/home/stepperHexagons/hex-5.png";

const Chapter9 = (props) => {
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
        Chapter 9 : A Journey Through Time: Cash, From Coins to Cryptocurrency
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
            Cash has evolved from ancient coins to modern digital currencies.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Beyond physical currency, cash in the corporate world includes bank
            accounts and marketable securities.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            The digital age has introduced new forms of transactional
            convenience, reducing the need for physical cash.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Cash and cash equivalents are essential for companies to manage
            their working capital needs effectively.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon5} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            The digital era continues to reshape our financial landscape,
            offering new possibilities for cashless transactions.
          </div>
        </div>
        <br />
        <br />
        <b> Introduction</b>
        <br />
        <br />
        Come along on a riveting journey that spans millennia as we explore the
        fascinating evolution of cash. From age-old civilizations to the
        high-speed, digital world of today, the story of money is as old as
        humanity itself, constantly changing and adapting to suit the needs of
        societies throughout the ages.
        <br />
        <br />
        Cash, in its simplest definition, is legal tender - a medium of exchange
        for goods, debt, or services. It's the comforting jingle of coins in
        your pocket or the crumpled bills snugly tucked into your wallet. But
        it's so much more than physical currency. Within the corporate realm,
        cash encompasses everything from bank accounts to marketable securities,
        including government bonds and banker's acceptances.
        <br />
        <br />
        <b>Evolution of Cash </b>
        <br />
        <br />
        Let's time travel back to the beginning. Cash's roots are as old as
        human civilization itself, springing up as people began to trade.
        Different forms of cash arose, reflecting the resources and cultures of
        distinct civilizations. Ancient societies used coins minted from
        valuable metals like copper, bronze, silver, and gold. Meanwhile,
        ingenious seafaring communities traded using commodities such as
        seashells, salt, and sugar.
        <br />
        <br />
        Fast-forward to the 18th century when paper money dramatically changed
        the game. This innovative form of cash derived its value from the trust
        people placed in the government backing the currency. Fiat currency, as
        it is known, offered unprecedented flexibility and convenience in
        transactions. Yet, its value and purchasing power are susceptible to
        inflation, a phenomenon where prices increase over time, requiring
        central banks to carefully manage inflation rates to maintain economic
        stability and stave off deflation.
        <br />
        <br />
        Now, let's zoom into the present era, the age of digitization. New forms
        of transactional convenience like checks, debit cards, credit cards,
        online banking, and smartphone payment technologies have gradually
        lessened the dependence on physical cash. Here we are today, in a world
        where cryptocurrencies like Bitcoin and Ethereum exist, providing
        alternative forms of digital cash, independent of traditional banking
        systems.
        <br />
        <br />
        Yet, for all the convenience of digital transactions, cash still
        maintains a significant place in our hearts. Its tangible nature brings
        a sense of security and reliability. Indeed, cash remains the king when
        it comes to simple, fast transactions. It doesn't bounce like checks or
        need approval like credit cards. It's a timeless symbol of financial
        freedom.
        <br />
        <br />
        So, next time you reach for your wallet or tap your phone to pay, spare
        a thought for the rich history of cash. From ancient coins to advanced
        cryptocurrencies, it's consistently adapted to fit the needs of society,
        all the while retaining its essence—a trusted medium of exchange that
        fuels our economy.
        <br />
        <br />
        Whether you're a fan of cold, hard cash or you've embraced the digital
        revolution, the choice is yours. But remember, cash isn't just about
        physical notes and coins—it's about the value they symbolize and the
        stories they weave.
        <br />
        <br />
        <b>Cash and Cash Equivalents: The Mighty Power of Liquid Assets</b>
        <br />
        <br />
        The financial world can be complex and confusing, but cash and cash
        equivalents (CCE) stand as a beacon of simplicity and security,
        providing companies with the flexibility they need to sail smoothly
        through their day-to-day operations. But what are cash and cash
        equivalents? Let's delve deeper into the world of CCE, exploring their
        definition, types, and the key role they play.
        <br />
        <br />
        Cash, as you probably know, refers to physical currency—those bills,
        coins, and notes you can hold in your hands, a tangible representation
        of wealth. On the other hand, cash equivalents extend beyond physical
        cash, encapsulating assets that can be swiftly converted into cash.
        These include bank accounts and marketable securities like commercial
        paper and short-term government bonds. Their defining characteristics
        are their high liquidity and a short maturity period of three months or
        less.
        <br />
        <br />
        Cash and cash equivalents serve as an invaluable resource for companies,
        enabling them to efficiently manage their working capital needs. They're
        the go-to resource to meet short-term obligations such as paying off
        debts and bills. A healthy amount of CCE signals a company's ability to
        meet financial responsibilities promptly, thereby enhancing their
        credibility and financial stability.
        <br />
        <br />
        While cash is universally recognized as a medium of exchange, cash
        equivalents offer a range of investment options that can yield
        additional returns. Marketable securities like treasury bills and
        short-term government bonds strike a balance between liquidity and
        yield. These instruments can be easily sold on the market and offer
        relatively low-risk investment opportunities.
        <br />
        <br />
        However, it's crucial to remember that cash equivalents do not include
        equity or stock holdings, as these assets can fluctuate in value and
        aren't as readily converted into cash. Cash equivalents are intended to
        be stable and immune to significant price fluctuations.
        <br />
        <br />
        The evolution of cash is a riveting saga. From ancient civilizations
        using precious metal coins and commodities like seashells and salt for
        trade to today's fiat currency—paper money backed by government
        faith—we've come a long way. And the story doesn't end there. Today's
        digital landscape has birthed innovative transaction forms, like
        cryptocurrencies, which offer alternative digital cash options outside
        traditional banking systems.
        <br />
        <br />
        Although digital payment methods are becoming more popular, physical
        cash remains a powerful symbol of financial independence and security.
        Its tangibility brings a sense of reliability and acceptance that
        electronic transactions sometimes lack. After all, cash remains the
        undisputed king when it comes to simplicity and universality in
        transactions. No bouncing checks or declined credit cards—just a
        straightforward exchange of value.
        <br />
        <br />
        Yet, both individuals and companies are increasingly embracing the
        convenience of digital transactions, lessening their reliance on
        physical cash. Technological innovations like online banking, debit
        cards, credit cards, and smartphone payment apps have revolutionized
        financial transactions, offering speed, ease, and improved
        record-keeping.
        <br />
        <br />
        <b>Conclusion</b>
        <br />
        <br />
        In conclusion, cash and cash equivalents are the lifeblood of financial
        liquidity, providing companies with the means to meet short-term
        obligations, plan for future investments, and handle unforeseen
        emergencies. While physical cash retains its timeless appeal, cash
        equivalents offer opportunities for modest returns on investments with
        minimal risk. As the digital era continues to reshape our financial
        landscape, it presents new possibilities for cashless transactions and
        alternative currencies.
        <br />
        <br />
        Whether you're fond of crisp banknotes or the convenience of a digital
        wallet, cash and cash equivalents remain integral to our economy's
        smooth functioning. They ensure seamless financial operations and
        empower businesses and individuals to seize opportunities and tackle
        challenges head-on. So, next time you reach for your wallet or make an
        online payment, remember to appreciate the power of cash and cash
        equivalents—the trusty currency that keeps the wheels of commerce in
        motion.
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
              props.onChange("test9");
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
              props.onChange(10);
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
            <p className="text-txt text-white">Level 1 - Chapter 10</p>
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

export default Chapter9;
