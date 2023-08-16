# Do not modify these lines
__winc_id__ = 'd0d3cdcefbb54bc980f443c04ab3a9eb'
__human_name__ = 'operators'

#The language spoken the most in Switzerland is the same as in Spain.
spain_language = "Castilian Spanish"
switzerland_language = "German"

print(spain_language == switzerland_language)

#The most prevalent religion in Switzerland is the same as in Spain.
spain_religion = "Roman Catholic"
switzerland_religion = "Roman Catholic"

print(spain_religion == switzerland_religion)

#The name length of Spain's capital does not equal that of Switzerland.
spain_capital = "Madrid"
switzerland_capital = "Zurich"

print(len(spain_capital) != len(switzerland_capital))

#Switzerland's GDP is greater than Spain's GDP.
spain_GDP = 10.7
switzerland_GDP = 11.8
print(switzerland_GDP > spain_GDP)

#The population growth is less than 1% in Switzerland and Spain.
spain_population_growth = 0.24
switzerland_population_growth = 0.79

print(spain_population_growth and switzerland_population_growth < 1)

#At least one of the two countries has a population count of over 10 million.
#Exactly one of the two countries has a population count of over 10 million.
spain_population = 47222613
switzerland_population = 8563760

print(spain_population > 10000000 or switzerland_population > 10000000)
print(spain_population ^ switzerland_population > 10000000)




