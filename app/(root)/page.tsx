import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import CountUp from 'react-countup';

const Home = () => {
  const loggedInUser={
    name:"Prince"
  }
  return (
    <div className="home"> 
    <div className="home-content">
      <div className="home-header">
          <HeaderBox
           type="greeting"
           title="Welcome"
           user={loggedInUser?.name || "GuestUser"}
           subtext="Access and manage your account and transaction efficiently with ease"

          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={2345.45}
          
          />
      </div>
    </div>
    </div>
  )
}

export default Home