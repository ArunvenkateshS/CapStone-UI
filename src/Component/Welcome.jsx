import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import Footer from './Footer'

const Welcome = () => {
  return (
    <div>
    <WelcomeHeader></WelcomeHeader>
    <div className="container text-center my-4">
  <h2 style={{ fontSize: '3rem', fontWeight: 'bold' ,fontFamily: 'Arial, sans-serif',marginTop: '8rem' }}>"Approving with Insight, Spending with Foresight."</h2>
  <h3 style={{ fontSize: '1.15rem', marginTop: '3rem', marginBottom: '1rem' }}>
    Capstone GDS is a vital tool for businesses seeking to streamline the process of verifying and approving employee spendings. It integrates budget oversight with company policy, ensuring that all expenditures align with business objectives and financial constraints
  </h3>
</div>
    <Footer></Footer>
    </div>
  )
}

export default Welcome