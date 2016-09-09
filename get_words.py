#!/usr/bin/env python

import sys
import urllib2
import BeautifulSoup

def wget(address):
    # Returns a the content of a webpage
    return urllib2.urlopen(address).read()


if __name__ == '__main__':

	number = int(sys.argv[1])
	address = "http://major-system.info/en/?n={number}".format(number=number)
	content = wget(address)	
	soup = BeautifulSoup.BeautifulSoup(content)
	words = soup.find(id="response").getText()
	print words