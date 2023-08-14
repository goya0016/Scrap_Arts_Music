# Author: Camilo Camacho
# Date: March 23 2020 11:43:37pm
# Description: webscraping for the SAM-Algonquin College project
# -----------------------------------------------------------------

from bs4 import BeautifulSoup
import requests
import html
import json

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

import datetime


# Fetch the service account key JSON file contents
cred = credentials.Certificate("./sam_ws1/serviceAccountKey-PR.json")

# Database Test
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://test-21f91-default-rtdb.firebaseio.com/'
})

# reference ->Folder/subfolder
ref = db.reference('webscraping')

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
# --------------------------------------------------------------

# Lists----------------------------------------
urls = ["https://scrapartsmusic.com/s-a-about-scrap-arts-music",
        "https://scrapartsmusic.com/s-a-about-gregory-kozak",
        "https://scrapartsmusic.com/s-a-justine-murdy"]

title_list = []
page_info = []

# Dictionary-------------------------------------
about_info = {}

for url in urls:
    page = requests.get(url, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')

    # testing the conection
    print(page.status_code)  # if answer=200 ->ok

    info = soup.find_all('div', {"data-controller": "zoogle-video",
                         "data-action": "message@window->zoogle-video#handleVimeoPostMessage"})  # get the data for the div
    # print(info[0])

    title = info[0].find('h2')  # getting the data of the h2 tags

    paragraph = info[0].find_all('p')  # getting the data of the p tags

    # list comprehension-----------------------------------
    page_info = [item.text for item in paragraph]
    about_info[title.text] = page_info
# --------------------------------------------------------------

print(about_info)

# EXPORTING SECTION >> opening and closing file
with open("/Users/london/Documents/CODING/Python/---WEBSCRAPING/sam_ws1/Information_sam.json", "w") as outfile:
    json.dump(about_info, outfile)


info_ref = ref.child('info')  # Creating a child called "info"
info_ref.set(about_info)  # Sending info to Firebase

info_ref2 = ref.child('date')  # Creating a child called "date"
info_ref2.set(str(datetime.datetime.now()))  # Sending info to Firebase

print(ref.get())
