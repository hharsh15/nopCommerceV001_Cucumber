package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.log4testng.Logger;

import cucumber.api.java.en.*;

import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import pageObjects.LoginPage;

public class steps  extends BaseClass{
	
	/*becasue we declare in BaseClasss.java
	public WebDriver driver; 
	public LoginPage lp;
	*/
	
	
	@Given("^User Launch browser$")
	public void user_Launch_browser()  {
		
		logger=org.apache.log4j.Logger.getLogger("nopCommerceV001_Cucumber");
		PropertyConfigurator.configure("./Log4j.properties"); //Added Logger
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		//System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers/geckodriver.exe");
		driver =new ChromeDriver();
		logger.info("****** Launching Browser **********");
		lp =new LoginPage(driver);
	   
	}

	@Given("^Opes URL: \"([^\"]*)\"$")
	public void opes_URL(String url)  {
		logger.info("****** opening Browser **********");
		driver.get(url);
	}

	@Given("^User Enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_Enters_Email_as_and_Password_as(String email, String password)  {
		logger.info("****** Providing Login Details **********");
		lp.setUserName(email);
	  lp.setPassword(password);
	}

	@Given("^CLick on Login$")
	public void click_on_Login()  {
		logger.info("****** Clicking on Login Button **********");
		lp.clickLogin();
	    
	}

	@Then("^Page Title should be \"([^\"]*)\"$")
	public void page_Title_should_be(String title)  {
		if(driver.getPageSource().contains("Login was unsuccessful.")) {
			driver.close();
			logger.info("****** Login Passed **********");
			Assert.assertTrue(false);
			
		}else {
			logger.info("****** Login Successful **********");
			Assert.assertEquals(title, driver.getTitle());
			
		}
	   
	}

	@When("^User click on Log out link$")
	public void user_click_on_Log_out_link() throws InterruptedException  {
		lp.clickLogOut();
		Thread.sleep(3000);
		
	   
	}

	@When("^Page Title sgould be \"([^\"]*)\"$")
	public void page_Title_sgould_be(String arg1)  {
	    
	}

	@When("^close browser$")
	public void close_browser()  {
		driver.quit();
	    
	}
 
}
