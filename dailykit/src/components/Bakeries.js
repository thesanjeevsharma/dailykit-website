import React, { Component } from 'react'
import './../style.css';
export class Bakeries extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <h2 className="green_heading">Bakers can get the most out ofMeal Kits by enjoying</h2>
                    <h1 className="black_heading">Substantial Revenue, Diverse menu & Increased Customer Loyalty</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-3" > <h3 className="sidebar_heading">WHY SHOULD BAKERIES DO MEAL KITS?</h3>
                            <ul className="link_container">
                                <li><a href="#What would you choose from the 2 choices below?" className="sidebar_link">What would you choose from the 2 choices below?</a></li>
                                <li><a href="#Increased Revenue" className="sidebar_link">Increased Revenue</a></li>
                                <li><a href="#Diversify your Menu" className="sidebar_link">Diversify your Menu</a></li>
                                <li><a href="#Loyal Customers" className="sidebar_link">Loyal Customers</a></li>
                                <li><a href="#Higher Profit Margin" className="sidebar_link">Higher Profit Margin</a></li>
                            </ul>
                        </div>
                        <div className="col-6"><p className="para_first">
                            <span className="para_heading">Who doesn’t love baking? </span>
                            Having the sweet aroma of freshly baked delicacies fill up your home. While you get the dreamy picture, the reality is, for 90% of people, this sweet aroma is a dream.
                            <br /><br />
                            Nailing the right recipe and technique is so damn difficult in bakery products and it’s not surprising to see people try their whole life to make a cake and fail miserably at it.
                            <br /><br />
                            That’s not all, even for people that are adept at baking, it gets challenging to source small quantities of various ingredients that go in baking. Just think how big companies that introduced ready to bake mixes, instant cupcakes etc became a hit. There are millions of people who use these mixes regularly.
                            <br /><br />
                            Truthfully, if there’s any niche that meal kit is built for, it’s gotta be Bakery products. Everything needs to be precisely portioned and instructions need to be followed very strictly. And guess what? Meal Kit does that.
                            <br /><br />
                            <h4 className="para2_heading" id="What would you choose from the 2 choices below?">What would you choose from the 2 choices below?</h4>
                            Meal kit from your favorite baker that includes all the ingredients and recipe to their product range curated by their chef. Tasteless mass produced mix
                            <br/><br/>
                            Well, the answer is pretty clear. Everyone chooses Meal Kits.
                            <br/><br/>
                            Here are all the benefits you will get when you start selling meal kits of bakery products to your consumers
                            <br/><br/>
                            <h4 className="para2_heading" id="Increased Revenue">Increased Revenue</h4>
                            Selling meal kits, will drive consumers who would have otherwise purchased these mixes to spend money in your business.
                            <br/><br/>
                            <h4 className="para2_heading" id="Diversify your Menu">Diversify your Menu</h4>
                            You know how much you can play around with different permutation combination of toppings but you can’t put all of them on your shelf because there’s a very niche market for them. But with meal kits, your menu can include any of these crazy ideas which have a very niche market.
                            <br/><br/>
                            <h4 className="para2_heading" id="Loyal Customers">Loyal Customers</h4>
                            Loyalty is driven by empathy towards consumers and when you help them to make their home smell like your bakery, they don’t have a choice except to become loyal to you.
                            <br/><br/>
                            <h4 className="para2_heading" id="Higher Profit Margin">Higher Profit Margin</h4>
                            Selling baked goods includes cost of oven electricity, talented chefs and wastage eating away in your profit margin. With meal kits, the only cost you incur is of ingredients and the inexpensive labour to portion them. So, with meal kits, you’ll find a much healthier profit margin that would bring your business to a new high.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card" style={{"width": "18rem"}}>
                                <img src="https://www.dailykit.org/hubfs/Screenshot%202021-04-14%20at%206.55.19%20PM.png" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">HOW TO LAUNCH MEAL KITS AT YOUR RESTAURANT?</h5>
                                        <small> by Roshan D Souza posted at 4/14/21 12:00 PM</small>
                                        <p className="card-text">There is an urgent need to make sure Restaurants try every possible way in which they can get people ordering. If you think you as a Restaurateur have tried everything then, think again.  Yes,...</p>
                                        <a href="#" className="">Read more</a>
                                    </div>
                            </div>
                        </div>
                            <div className="col">
                                <div className="card" style={{"width": "18rem"}}>
                                    <img src="https://lh6.googleusercontent.com/W179jGz7_CWkKJJHsQeertViy_N7W6nQASgk07vzJ_m6WWSfKCO3-BZzi6yAdjzak2R8o2758sHE8ovCYo9cWXrEZJMFK3KEXIttymyJ1FiqNIPQgQ0azI0R8OMoZeAiZzOqe1_A" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">YOUR PACKAGING SHOULD BUILD BRAND RECALL</h5>
                                            <small> by Ananya Rajput posted at 4/2/21 12:00 PM</small>
                                            <p className="card-text">Your brand is in a constant battle to retain customers, build confidence and encourage brand recall. To ensure this, a brand needs to build their brand voice. When it comes to food, brand voice...</p>
                                            <a href="#" className="">Read more</a>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
         </div>
        )
    }
}

export default Bakeries
