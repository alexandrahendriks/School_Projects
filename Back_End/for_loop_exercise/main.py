from helpers import get_countries

""" Leave this untouched. Wincpy uses it to match this assignment with the
tests it runs. """
__winc_id__ = "c545bc87620d4ced81cbddb8a90b4a51"
__human_name__ = "for"

def shortest_names(country_names):
    min_len = min(country_names, key=len)
    min_str = []
    for country in country_names:
        if (len(country) == len(min_len)):
            min_str.append(country) 
    return min_str

def most_vowels(country_names):
    vowel = set("aeiouAEIOU")
    most_vowels = []
    for country in country_names:
        count = 0
        for i in country:
            if i in vowel:
                count = count + 1
        if count > 10:
            most_vowels.append(country)
    sorted_list = sorted(most_vowels,key=lambda word: sum(ch in 'aeiouAEIOU' for ch in word),reverse=True)
    return sorted_list[0:3]  
    
def alphabet_set(countries):   
    alphabetical_list = []
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for country in countries:
        for i in country:
            if i.lower() in alphabet and country not in alphabetical_list:
                alphabet = alphabet.replace(i.lower(),'')
                print(alphabet)
                alphabetical_list.append(country)
            if alphabet == '':
                break    
    return alphabetical_list

if __name__ == "__main__":
    countries = get_countries()
    shortest_names(countries)
    most_vowels(countries)
    alphabet_set(countries)