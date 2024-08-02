import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import hexagon1 from "../../images/home/stepperHexagons/hex-one.png";
import hexagon2 from "../../images/home/stepperHexagons/hex-2.png";
import hexagon3 from "../../images/home/stepperHexagons/hex-3.png";
import hexagon4 from "../../images/home/stepperHexagons/hex-4.png";

const Chapter11 = (props) => {
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
        Chapter 11: ​​What Are Stocks? A Lesson in Investing 101
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
            Stocks are securities that are predominantly traded on stock
            exchanges, and they represent ownership in a corporation.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon2} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%] justify-center items-center bg-[#F8F9FD]">
            Corporations issue stocks to raise funds for their business
            operations.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon3} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            There are two main types of stocks: common and preferred.
          </div>
        </div>
        <div className="flex flex-1 lg:flex-row flex-col mt-3">
          <div className="lg:w-[15%] justify-center items-center">
            <img src={hexagon4} />
          </div>
          <div className="rounded-[10px] flex font-semibold p-2 text-txt text-primary lg:w-[85%]  items-center bg-[#F8F9FD]">
            Historically, stocks have proven to outperform most other
            investments over the long run.
          </div>
        </div>
        <b>Introduction</b>
        <br />
        <br />
        Welcome to Investing 101, where we explore the fascinating world of
        stocks. Today, we'll delve into the concept of stocks, also known as
        equities, and discover how they play a significant role in the financial
        landscape. So, let's get started!
        <br />
        <br />
        Stocks, or equities, represent securities that symbolise ownership in a
        corporation. When you own stocks, you hold a fraction of the issuing
        corporation. Each fraction is called a "share," and the number of shares
        you own determines your proportional claim to the company's assets and
        profits. Exciting, isn't it?
        <br />
        <br />
        Now, stocks are primarily bought and sold on stock exchanges, which
        serve as marketplaces for these transactions. These exchanges operate
        under government regulations designed to protect investors from
        fraudulent practices. It's important to understand these regulations as
        they ensure fairness and transparency in the stock market.
        <br />
        <br />
        <b>What is a stock exactly?</b>
        <br />
        <br />
        Now, let's explore stocks in more detail. When corporations issue
        stocks, they aim to raise funds to support their business activities. As
        a shareholder, you become a part-owner of the corporation, depending on
        the number of shares you hold relative to the total outstanding shares.
        <br />
        <br />
        It's important to note that while you don't directly own the
        corporation, the law treats corporations as legal entities. This means
        they have the ability to file taxes, borrow money, own property, and be
        subject to legal proceedings. The corporation's assets, such as office
        equipment, belong to the corporation itself, separate from the
        shareholders.
        <br />
        <br />
        This legal separation is crucial because it limits the liability of both
        the corporation and the shareholders. If the corporation goes bankrupt,
        the court may order the sale of its assets, but your personal assets as
        a shareholder are not at risk. Your shares cannot be forcibly sold,
        although their value may have decreased. Similarly, if a major
        shareholder faces bankruptcy, they cannot sell the company's assets to
        settle their debts.
        <br />
        <br />
        <b>Shareholders and rights </b>
        <br />
        <br />
        As a shareholder, you have certain rights and benefits. These include
        the right to vote in shareholder meetings, receive dividends (if and
        when they are distributed), and sell your shares to other investors. If
        you own a majority of shares, your voting power increases, enabling you
        to indirectly influence the company's direction by appointing the board
        of directors.
        <br />
        <br />
        The board of directors plays a crucial role in increasing the value of
        the corporation. They often achieve this by hiring professional
        managers, such as the chief executive officer (CEO), to oversee the
        company's operations. It's important to note that ordinary shareholders
        do not directly manage the company.
        <br />
        <br />
        Now, let's talk about the significance of being a shareholder. When you
        own stocks, you are entitled to a portion of the company's profits. This
        forms the foundation of a stock's value. The more shares you own, the
        larger your portion of the profits. It's worth noting that not all
        stocks pay out dividends. Some companies reinvest their profits to fuel
        their growth. However, even retained earnings contribute to the overall
        value of a stock.
        <br />
        <br />
        Moving on, let's discuss the two main types of stocks: common and
        preferred. Common stock provides owners with voting rights in
        shareholder meetings and the opportunity to receive dividends
        distributed by the corporation. On the other hand, preferred
        stockholders generally do not have voting rights, but they have a higher
        claim on assets and earnings compared to common stockholders. In
        situations like bankruptcy and liquidation, preferred stockholders
        receive dividends before common stockholders.
        <br />
        <br />
        It's fascinating to explore the origins of stocks. The first-ever common
        stock was issued by the Dutch East India Company in 1602, marking a
        significant milestone in the history of stock ownership.
        <br />
        <br />
        Now, let's discuss how companies can raise additional capital by issuing
        new shares. This process, known as a stock offering, allows corporations
        to gather funds for various purposes. However, it's important to note
        that when new shares are issued, the ownership and rights of existing
        shareholders may be diluted unless they decide to purchase the new
        offerings. On the flip side, companies can also engage in stock
        buybacks, which benefit existing shareholders by causing the value of
        their shares to appreciate.
        <br />
        <br />
        <b>Stocks V/s Bonds </b>
        To deepen our understanding, let's differentiate stocks from another
        financial instrument: bonds. Unlike stocks, which represent ownership in
        a company, bonds function as loans made by creditors to the corporation.
        Bondholders become creditors and are entitled to periodic interest
        payments as well as the repayment of the principal invested. In the
        event of bankruptcy, creditors have legal priority over other
        stakeholders and are among the first to be repaid. Shareholders, on the
        other hand, may not receive any compensation in such circumstances,
        highlighting the inherent risk involved in stock investments.
        <br />
        <br />
        <b>How to buy stocks? </b>
        <br />
        <br />
        Now, let's explore how you can buy stocks. The majority of stock
        transactions take place on stock exchanges, such as The London Stock
        Exchange (LSE) or the New York Stock Exchange (NYSE). When a company
        goes public through an initial public offering (IPO), its stock becomes
        available for investors to buy and sell on these exchanges. To
        participate in stock trading, you'll need a brokerage account, which
        allows you to place buy and sell orders. The price of a stock is
        influenced by various factors, including market supply and demand
        dynamics.
        <br />
        <br />
        Owning stocks can provide you with opportunities to generate income.
        There are two primary ways to earn money through stock ownership:
        dividends and capital appreciation. Dividends are cash distributions of
        company profits. For example, if a company declares a £6,000 dividend
        with 1,000 shares outstanding, each shareholder will receive £6 for
        every share they own. On the other hand, capital appreciation refers to
        the increase in the stock's price over time. If you purchase a share for
        £5 and its value later rises to £50, you have made a £45 capital gain.
        <br />
        <br />
        Of course, it's important to acknowledge that all investments come with
        a certain level of risk. Stocks, bonds, mutual funds, and other
        investment vehicles can experience fluctuations in value due to market
        conditions. When investing, it's crucial to carefully consider various
        factors, such as market trends and corporate decisions, as they can
        impact the performance of your investments. However, historical data
        suggests that stocks have generally outperformed other investment
        options over the long term.
        <br />
        <br />
        To conclude, stocks represent ownership in a corporation and provide
        individuals with opportunities to participate in the financial markets.
        They differ from bonds and offer various rights and benefits to
        shareholders. By understanding the fundamentals of stocks, you're
        equipped with essential knowledge to navigate the world of investing.
        Happy investing!
        <br />
        <br />
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
              props.onChange("test11");
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
              props.onChange(12);
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
            <p className="text-txt text-white">Level 1 - Chapter 12</p>
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

export default Chapter11;
