# Do not modify these lines
from helpers import get_countries

__winc_id__ = "00a4ab32f1024f5da525307a1959958e"
__human_name__ = "dictionariesv2"

def create_passport(name, date_of_birth, place_of_birth, height, nationality):
    countries = get_countries()
    for country in countries:
        if country == nationality:
            passport = {
                "name": name,
                "date_of_birth": date_of_birth,
                "place_of_birth": place_of_birth,
                "height": height,
                "nationality": country
            }
    return passport

def add_stamp(passport, country):
    if "stamps" in passport.keys():
        if country in passport["stamps"]:
            print("Stamp already exists")
        else:
            passport["stamps"].append(country)    
    else:
        passport['stamps'] = [country]
    return passport        

def add_biometric_data(passport, bio_name, value, date):
    if "biometric" in passport.keys():
        if bio_name in passport["biometric"]:
            passport["biometric"][bio_name].update({"date": date, "value": value})
        elif bio_name not in passport["biometric"]:
           passport["biometric"].update({bio_name: {"date": date, "value": value}})
    else:
        passport["biometric"] = {
            bio_name: {
                "date": date,
                "value": value
            }
        }
    return passport    

if __name__ == "__main__":
    passport = create_passport("Bob Willson", "1990-10-26", "Seattle", 1.70, "United States")
    add_stamp(passport, "Netherlands")
    bio = add_biometric_data(passport, "eye_color_right", "brown", "2022-01-10" )   
    add_biometric_data(bio, "eye_color_left", "green", "2022-01-10")
