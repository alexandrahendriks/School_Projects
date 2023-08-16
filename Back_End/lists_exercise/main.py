# Do not modify these lines
__winc_id__ = '6eb355e1a60f48a28a0bbbd0c88d9ab4'
__human_name__ = 'lists'

def alphabetical_order(list_of_strings):
    sorted_list_of_strings = sorted(list_of_strings)
    return sorted_list_of_strings

def won_golden_globe(film_name):
    golden_globe_list = ["Jaws", "Star Wars: Episode IV – A New Hope", "E.T. the Extra-Terrestrial", "Memoirs of a Geisha"]
    if film_name.lower() in list(map(str.lower,golden_globe_list)):
        return True
    else:
        return False
    
def remove_toto_albums(list_of_strings):
    toto_albums= ["Fahrenheit", "The Seventh One", "Toto XX","Falling in Between", "Toto XIV", "Old Is New" ]
    tidy_list = [i for i in list_of_strings if i not in toto_albums]
    return tidy_list
    
