import {test,expect}  from "@playwright/test";

test('salesforce login', async ({page}) => {    
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill("demoCSR2")
    await page.locator('#password').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    await page.waitForTimeout(5000)
    await expect(page).toHaveTitle('Leaftaps - TestLeaf Automation Platform');
    await page.locator(`text='CRM/SFA'`).click()
    let pageTitle = await page.title()
    console.log(pageTitle)
    await expect(page).toHaveTitle(pageTitle)   
    await page.waitForTimeout(5000)
    await page.locator("//a[text()='Create Lead']").click() 
    await page.locator('[class="inputBox"]').first().fill("Infosys")
    await page.locator('[id="createLeadForm_firstName"]').fill("Govardhan")
    await page.locator('[class="inputBox"]').nth(3).fill("Surendran")
    await page.locator('[id="createLeadForm_personalTitle"]').fill("Mr")
    await page.locator('[id="createLeadForm_annualRevenue"]').fill("1800000")
    await page.locator('[class="inputBox"]').nth(11).fill("Automation")
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9884955591")
    await page.locator('.smallSubmit').click()

});