import React from 'react';
import './PortfolioView.css';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import Project from '../../components/Project/Project';
const PortfolioView = () => {
  return(
    <div className='view'>
      <ViewHeader
        title='Portfolio'
        text={`Here is a selection of the projects I have been working on. Most of them
              are personal projects. `}
      />
      <div className='project-list'>
        <Project
          title='E-Commerce Website'
          description={
            `This was my first big projects in React. It features a webshop, with a full checkout system and payment solution.
              It has a administrator interface where you can upload and update the current products. It has a view were you can see the
              orders that has been placed.

              The project was created with MongoDB, Express, React and Node (MERN). I used BraintreePayments for the payment solution.`
          }
          learned={
            `This project introduced me to React-redux, which was really helpful in managing the complex states off the website. I learned
            to integrate a payment solution with Braintree Payments. I handled user authorization to make sure only admin users were allowed
            access to the userinterface and update products. I learned how to upload images to MongoDB. It helped me get a way better understanding
            of the relationship between the frontend and backend. Lastly I learned to create and use my own REST API.`
          }
          link='https://github.com/albonkey/BreakoutGamePython'
          img='img-02.jpg'
        />
        <Project
          title='Teamfine'
          description={
            `Teamfine is a tool for teams to create a fine system. Allowing them to keep track of fines, and hand out fines for breaking the teams rules.
            It's a great tool for teams to raise money, that can go into social events for the team.
            The project was created with MongoDB, Express, React and Node (MERN).`
          }
          learned={
            `I learned a lot on working with MongoDB on this project. The plan is to all create an IOS app for this.`
          }
          link='https://github.com/albonkey/BreakoutGamePython'
          img='img-04.jpg'
        />
        <Project
          title='Poker Application'
          description={
            `This app I created cause I wanted to play poker with my friends from Norway and I was not happy with any of the applications that are currently
            out there. They are to complicated when all you want to do is just jump in and play with a couple of your friends.
            The project was created with MongoDB, Express, React and Node (MERN).`
          }
          learned={
            `I learned a lot on working with MongoDB on this project.`
          }
          link='https://github.com/albonkey/BreakoutGamePython'
          img='img-05.jpg'
        />
      </div>
    </div>
  )
}

export default PortfolioView;
