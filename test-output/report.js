$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login with Data driven",
  "description": "",
  "id": "login;login-with-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Opes URL: \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "CLick on Login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Page Title sgould be \"Your Stroe Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login;login-with-data-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 22,
      "id": "login;login-with-data-driven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 23,
      "id": "login;login-with-data-driven;;2"
    },
    {
      "cells": [
        "admin@ourstore.com",
        "admin123"
      ],
      "line": 24,
      "id": "login;login-with-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Login with Data driven",
  "description": "",
  "id": "login;login-with-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Opes URL: \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "CLick on Login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Page Title sgould be \"Your Stroe Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Launch_browser()"
});
formatter.result({
  "duration": 7614154900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 11
    }
  ],
  "location": "steps.opes_URL(String)"
});
formatter.result({
  "duration": 2424796000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "steps.user_Enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 744780300,
  "status": "passed"
});
formatter.match({
  "location": "steps.click_on_Login()"
});
formatter.result({
  "duration": 6476776100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 87608900,
  "status": "passed"
});
formatter.match({
  "location": "steps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 4926407800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Stroe Login",
      "offset": 22
    }
  ],
  "location": "steps.page_Title_sgould_be(String)"
});
formatter.result({
  "duration": 155100,
  "status": "passed"
});
formatter.match({
  "location": "steps.close_browser()"
});
formatter.result({
  "duration": 729324600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login with Data driven",
  "description": "",
  "id": "login;login-with-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Opes URL: \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enters Email as \"admin@ourstore.com\" and Password as \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "CLick on Login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Page Title sgould be \"Your Stroe Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "steps.user_Launch_browser()"
});
formatter.result({
  "duration": 5708416400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 11
    }
  ],
  "location": "steps.opes_URL(String)"
});
formatter.result({
  "duration": 2022625400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@ourstore.com",
      "offset": 22
    },
    {
      "val": "admin123",
      "offset": 59
    }
  ],
  "location": "steps.user_Enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 459903600,
  "status": "passed"
});
formatter.match({
  "location": "steps.click_on_Login()"
});
formatter.result({
  "duration": 1124797600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 197098400,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.steps.page_Title_should_be(steps.java:59)\r\n\tat ✽.Then Page Title should be \"Dashboard / nopCommerce administration\"(./Features/Login.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "steps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Stroe Login",
      "offset": 22
    }
  ],
  "location": "steps.page_Title_sgould_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});