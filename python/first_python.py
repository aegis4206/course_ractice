from hashlib import new
from turtle import title
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

PATH = "C:/Users/aegis/Downloads/chromedriver_win32/chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("https://google.com.tw")
print(driver.title)
search = driver.find_element_by_name("q")
search.send_keys(123)
search.send_keys(Keys.RETURN)

element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "LC20lb"))
    )

titles = driver.find_elements_by_class_name("LC20lb")
for title in titles:
    print(title.text)

link = driver.find_element_by_xpath('//*[@id="rso"]/div[4]/div/div/div[1]/div/a/h3')
link.click()

time.sleep(5)
driver.quit()