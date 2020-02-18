Feature: Login
Scenario: Successful Login with Valid Credentials
Given User Launch browser
And Opes URL: "https://admin-demo.nopcommerce.com/login"
And User Enters Email as "admin@yourstore.com" and Password as "admin"
And CLick on Login
Then Page Title should be "Dashboard / nopCommerce administration"
When User click on Log out link
And Page Title sgould be "Your Stroe Login"
And close browser
@Test1
Scenario Outline: Login with Data driven
Given User Launch browser
And Opes URL: "https://admin-demo.nopcommerce.com/login"
And User Enters Email as "<email>" and Password as "<password>"
And CLick on Login
Then Page Title should be "Dashboard / nopCommerce administration"
When User click on Log out link
And Page Title sgould be "Your Stroe Login"
And close browser
	Examples:
	| email | password |
	| admin@yourstore.com| admin |
	| admin@ourstore.com | admin123 |