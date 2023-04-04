#!/usr/bin/python3
"""Python script that:
- takes in a URL and an email address,
- sends a POST request to the passed URL with the email as a parameter,
- displays the body of the response.
"""
if __name__ == '__main__":
    import requests
    import sys


    email = {'email': sys.argv[2]}
    r = requests.post(sys.argv[1], data=email)

    print(req.text)
