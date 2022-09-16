# TeslaStat
A fun full-stack website that compiles important financial data and analyst price targets relating to Tesla ($TSLA) all in one place of the internet! I fetch important financial metrics such as gross margins, operating expenses, net income, retail and institutional price targets that allow people to easily see the financial health of TSLA and to make their own interpretations of the company.
The financial data relating to TSLA is sourced directly from HyperCharts (https://hypercharts.co/tsla).
The current stock price of TSLA is being fetched from Finnhub (https://finnhub.io).

# Project Status
Project is still under development, as I am trying to get more data on Wall St analysts and writing about financial stats such as free cash flow, gross margins and how they affect the overall financial health of Tesla.

# Screenshots
![analyst_table](https://i.imgur.com/jTFVCR1.png)
*Figure 1: Default page when user first enters the website*

![analyst_table2](https://i.imgur.com/Va30fVZ.png)
*Figure 2: Users can enter the number of TSLA shares they own to see updside/downside potential*

![financials_table](https://i.imgur.com/ymCzTcY.png)
*Figure 3: Line graph that shows the historical gross margin, operating margin and profit margin of TSLA*

![financials_table2](https://i.imgur.com/6u048Ld.png)
*Figure 4: Bar graph that shows historical revenue, gross profit and operating income of TSLA*

# Installation and Setup Instructions

Clone this repository. You will need node and npm installed globally on your machine.

Installation:
```
npm install
```
To Start Server:
```
npm start
```

# Reflection
The reason why I wanted to do this was because I have huge interest in Tesla and that while the internet is a great source to find data about anything, the data can be scattered all over the place, and I wanted to compile all of the financial data into one spot to make it easier for people to find TSLA specific data. For example, Tesla price targets from differ from institution to instituion with varying models, so I thought it would be a good idea to compile all of the price targets into one table so people can see the data in a much clearer way. Another thing is I want to help people be able to make informative decisions when investing into such a polarizing and volatile company such as Tesla and having a visual representation of the numbers, rather than just reading the numbers from company filings can help people see how Tesla is doing financially.

# Technology
I was able to learn how to create a full-stack web application using a React, Java and MySQL stack. I gained a better understanding of developing full-stack applications and how to fetch data with the axios library and storing that data into a relational database management system (MySQL). Lastly, I was able to finally get a better grasp of performing basic create, read, update and delete (CRUD) functionalities with Java and React, something I always wanted to get better at because this stack is not as common as the MERN stack is.
