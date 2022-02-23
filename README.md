# **Bet Your Arb**

**Version 1.0.1**

![Logo](/public/favicon.ico)

## **Description**

Being a longtime sports bettor, I have gotten tired of getting beat by the books, and losing on what should be "guranteed bets". Be it because, a player had a bad night, the coach is resting the star player, or the team has let off the gas after qualifying for the playoffs, losing never feels good.

Now after recently finding out about arbitrage betting, I have set out the goal of building an app that would help me locate arbitrage betting opportuninties. This is my opportunity to beat the books, and provide an application to help others do the same.

This arbitrage betting calculator allows you to check the odds of different sportsbooks, and see if there is an arbitrage opportunity available. The app will ask for your wager amount, and calculate the value of your bet on each site to ensure your winnings.

The project is written in Vue and uses TypeScript to ensure the return types of the data after it has been calculated. Some challenges I faced early on, when using only JavaScript, is that the values after calculation would be returned and passed as strings. This behaviour would break the application as the function is looking to manipulate a number, but would be passed a string or undefined.

Currently this app has the functions to identify an arbitrage opportuninty and calculate your bets. I hope to implement a feature where the app will consume an api that contains the betting odds for all sporting events, from different sportsbooks. It will then take the odds from those sportsbooks, and automatically evaluate where an arbitrage betting opportunity lies and tell you how much to bet according to the total wager you provide.

## **Future Features**

- Consume sportsbook stats from api
- add odds conversion function so its usable with any odds type.

## **License & Copyright**

&copy; Justin Logan 2022 | MIT
