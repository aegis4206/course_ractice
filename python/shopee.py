from ast import Return
from hashlib import new
from itertools import product
from multiprocessing.connection import wait
from pickle import TRUE
from turtle import title
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
# import undetected_chromedriver as UC

PATH = "C:/Users/aegis/Downloads/chromedriver_win32/chromedriver.exe"
driver = webdriver.Chrome(PATH)


driver.get("https://shopee.tw/buyer/login")

element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '//*[@id="main"]/div/div[2]/div/div/form/div/div[2]/div[2]/div[1]/input'))
    )

user = driver.find_element_by_xpath('//*[@id="main"]/div/div[2]/div/div/form/div/div[2]/div[2]/div[1]/input')
user.send_keys("")

pw = driver.find_element_by_xpath('//*[@id="main"]/div/div[2]/div/div/form/div/div[2]/div[3]/div[1]/input')
pw.send_keys("")


login_button = WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.XPATH, '/html/body/div[1]/div/div[2]/div/div/form/div/div[2]/button')))
driver.execute_script("arguments[0].click();", login_button)

time.sleep(60)



def buyProduct():

    buy_button = WebDriverWait(driver, 600).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#main > div > div:nth-child(3) > div.XmiBHs > div > div.page-product > div > div.product-briefing.flex.card.-Esc\+w > div.flex.flex-auto.HLQqkk > div > div:nth-child(5) > div > div > button.btn.btn-solid-primary.btn--l.GfiOwy')))
    driver.execute_script("arguments[0].click();", buy_button)
    print("加入購物車")

    checkout_button = WebDriverWait(driver, 60).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#main > div > div:nth-child(3) > div._9_5_1E > div > div.container > div._2qn3bA._1F9REl > div.CsNHbu.-Gs_Ma > button.shopee-button-solid.shopee-button-solid--primary')))
    driver.execute_script("arguments[0].click();", checkout_button)
    print("購物車")

    payment_method = WebDriverWait(driver, 60).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#main > div > div.dYFPlI > div._8ZMqxt > div.kRed1l > div.HgQ4yt > div > div.checkout-payment-method-view__current.checkout-payment-setting > div.checkout-payment-setting__payment-methods-tab > span:nth-child(5) > button')))
    driver.execute_script("arguments[0].click();", payment_method)
    # payment_option = WebDriverWait(driver, 60).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'div.bank-transfer-category__body > div:nth-child(5) > div > div.stardust-radio-button > div > div')))
    # driver.execute_script("arguments[0].click();", payment_option)
    print("銀行轉帳")



    order_button = WebDriverWait(driver, 60).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#main > div > div.dYFPlI > div._8ZMqxt > div.kRed1l > div.KqH1Px > div.Ql2fz0 > button')))
    driver.execute_script("arguments[0].click();", order_button)
    print("訂單確認")

def getSecond(time_str):
    h, m, s = time_str.split(':')
    return int(h) * 3600 + int(m) * 60 + int(s)

        

def main():
    print('購買第一個商品')
    hour_now = int(time.strftime("%H", time.localtime()))
    minute_now = int(time.strftime("%M", time.localtime()))
    second_now = int(time.strftime("%S", time.localtime()))
    driver.get('https://shopee.tw/product-i.343219426.5676091943')
    hour_buy = int("10")
    minute_buy = int("00")
    time_str = str(hour_buy) + ":" + str(minute_buy) + ":" + str(0)
    time_str_now = str(hour_now) + ":" + str(minute_now) + ":" + str(second_now)
    time_sleep = getSecond(time_str) - getSecond(time_str_now) - 60
    
    print("等待購買時間")
    if (time_sleep > 0):
        time.sleep(time_sleep)

    print("準備重新整理")
    while minute_now != minute_buy:
        minute_now = int(time.strftime("%M", time.localtime()))
        driver.refresh()
    

    recount = 0
    price = '319'
    prick = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "pmmxKx")))
    while prick.text[1:4] != price:
        # 一碼為2、兩碼為3、三碼為4、四碼為5、五碼為6
        driver.refresh()
        prick = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "pmmxKx")))
        recount = recount + 1
        print("重新整理"+str(recount))
        if (recount > 100):
            main1()
    variant_option = WebDriverWait(driver, 60).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#main > div > div:nth-child(3) > div.XmiBHs > div > div.page-product.page-product--mall > div > div.product-briefing.flex.card.-Esc\+w > div.flex.flex-auto.HLQqkk > div > div.PMuAq5 > div > div.flex.hInOdW.-\+gikn > div > div:nth-child(1) > div > button:nth-child(2)')))
    driver.execute_script("arguments[0].click();", variant_option)  
    print("選擇商品成功")
    buyProduct()

def main1():
    print('購買第二個商品')
    hour_now = int(time.strftime("%H", time.localtime()))
    minute_now = int(time.strftime("%M", time.localtime()))
    second_now = int(time.strftime("%S", time.localtime()))
    driver.get('https://shopee.tw/%E3%80%90RainSky%E3%80%91Folding%E7%B6%93%E5%85%B8%E5%BE%A9%E5%88%BB%E6%99%B4%E9%9B%A8%E5%82%98-%E6%B4%8B%E5%82%98%E9%81%AE%E9%99%BD%E5%82%98%E9%99%BD%E5%82%98%E6%8A%98%E7%96%8A%E5%82%98%E6%8A%97UV%E5%82%98%E9%9D%9E%E8%87%AA%E5%8B%95%E5%82%98%E5%8F%8D%E5%90%91%E5%82%98%E9%BB%91%E8%86%A0%E5%82%98-i.43207487.7917826512')
    hour_buy = int("12")
    minute_buy = int("00")
    time_str = str(hour_buy) + ":" + str(minute_buy) + ":" + str(0)
    time_str_now = str(hour_now) + ":" + str(minute_now) + ":" + str(second_now)
    time_sleep = getSecond(time_str) - getSecond(time_str_now) - 60
    
    print("等待購買時間")
    if (time_sleep > 0):
        time.sleep(time_sleep)

    print("準備重新整理")
    while minute_now != minute_buy:
        minute_now = int(time.strftime("%M", time.localtime()))
        driver.refresh()


    recount = 0
    price = '1'
    prick = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "pmmxKx")))
    while prick.text[1:2] != price:
        # 一碼為2、兩碼為3、三碼為4、四碼為5、五碼為6
        driver.refresh()
        prick = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "pmmxKx")))
        recount = recount + 1
        print("重新整理"+str(recount))
        if (recount > 100):
            main2()
    variant_option = WebDriverWait(driver, 60).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#main > div > div:nth-child(3) > div.XmiBHs > div > div.page-product.page-product--mall > div > div.product-briefing.flex.card.-Esc\+w > div.flex.flex-auto.HLQqkk > div > div.PMuAq5 > div > div.flex.hInOdW.-\+gikn > div > div:nth-child(1) > div > button:nth-child(3)')))
    driver.execute_script("arguments[0].click();", variant_option)  
    print("選擇商品成功")
    buyProduct()

def main2():
    print('購買第三個商品')
    hour_now = int(time.strftime("%H", time.localtime()))
    minute_now = int(time.strftime("%M", time.localtime()))
    second_now = int(time.strftime("%S", time.localtime()))
    driver.get('https://shopee.tw/%E3%80%90%E5%85%8D%E9%81%8B%E8%B2%BB-12H%E5%87%BA%E8%B2%A8%F0%9F%91%89%E5%85%A7%E6%9C%89%E5%BD%B1%E7%89%87%E3%80%91%E8%B6%85%E5%95%86%EF%BC%8E%E5%AE%85%E9%85%8D%E7%8F%BE%E8%B2%A8%E3%80%8F%E7%91%9C%E7%8F%88%E5%A2%8A10mm%E5%8F%B0%E7%81%A3%E7%8F%BE%E8%B2%A8-NBR%E7%92%B0%E4%BF%9D%E7%91%9C%E7%8F%88%E5%A2%8A-%E8%B6%85%E5%8E%9A%E7%91%9C%E4%BC%BD%E5%A2%8A-%E9%81%8B%E5%8B%95%E5%99%A8%E6%9D%90-%E7%91%9C%E7%8F%88%E5%B7%BE-i.5110005.673410477')
    hour_buy = int("23")
    minute_buy = int("59")
    time_str = str(hour_buy) + ":" + str(minute_buy) + ":" + str(0)
    time_str_now = str(hour_now) + ":" + str(minute_now) + ":" + str(second_now)
    time_sleep = getSecond(time_str) - getSecond(time_str_now) ######- 60
    
    print("等待購買時間")
    if (time_sleep > 0):
        time.sleep(time_sleep)

    print("準備重新整理")
    while minute_now != minute_buy:
        minute_now = int(time.strftime("%M", time.localtime()))
        driver.refresh()
    recount = 0


    price = '1'
    prick = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "pmmxKx")))
    while prick.text[1:2] != price:
        # 一碼為2、兩碼為3、三碼為4、四碼為5、五碼為6
        driver.refresh()
        prick = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "pmmxKx")))
        recount = recount + 1
        print("重新整理"+str(recount))
        if (recount > 100):
            time.sleep(5)
            driver.quit()
    variant_option = WebDriverWait(driver, 60).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#main > div > div:nth-child(3) > div.XmiBHs > div > div.page-product > div > div.product-briefing.flex.card.-Esc\+w > div.flex.flex-auto.HLQqkk > div > div.PMuAq5 > div > div.flex.hInOdW.-\+gikn > div > div:nth-child(1) > div > button:nth-child(8)')))
    driver.execute_script("arguments[0].click();", variant_option)  
    print("選擇商品成功")
    buyProduct()


main2()


time.sleep(5)
driver.quit()