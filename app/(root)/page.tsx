import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";
import CountUp from "react-countup";

const Home = () => {
  const loggedInUser = {
    firstName: "Prince",
    lastName: "Nmezi",
    email: "nmezi@gmail.com"
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser?.firstName || "GuestUser"}
            subtext="Access and manage your account and transaction efficiently with ease"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2345.45}
          />
        </header>

        RECENT TRANSACTION
      </div>
      <RightSidebar user={loggedInUser} transaction={[]} banks={[{},{}]}/>
    </section>
  );
};

export default Home;
