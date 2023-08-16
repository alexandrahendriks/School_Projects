# Do not modify these lines
__winc_id__ = '25596924dffe436da9034d43d0af6791'
__human_name__ = 'conditions'

"""Factors:
Weather: rainy, sunny, windy, neutral
Time of the day: day, night
Cow milking status: Need milking: True; Don't need milking: False
Location of the cows: pasture, cowshed
Season: winter, spring, summer, fall
Slurry tank: Full: True; Not full: False
Grass status: Long: True; Short: False

Based on these factors, some actions may be needed:
Actions: 
take cows to cowshed:
    This needs to be done when one or more of the following statements are true:
       The cows are on the pasture at night 
       The cows are standing in the rain
       
milk cows:
    This needs to be done when the cows require milking, but is only possible when:
        The cows are in the cowshed
        
fertilize pasture:
    This needs to be done when the slurry tank is full, but is only possible when:
        The cows are in the cowshed 
        The weather is not sunny or windy
        
mow grass:
    This needs to be done when all of the following are true:
       The grass is long
       It's spring
       The weather is sunny
       
    But is only possible when:
        The cows are not on the pasture
        
wait:
    This is done when no other action applies."""

action_1 = "take cows to cowshed\n" +  "milk cows\n"  + "take cows back to pasture"
action_2 = "take cows to cowshed\n" +  "fertilize pasture\n"  + "take cows back to pasture"
action_3 = "take cows to cowshed\n" +  "mow grass\n"  + "take cows back to pasture"

def farm_action(weather, time_of_the_day, cow_milking_status, location_of_the_cows, season, slurry_tank, grass_status):
    if location_of_the_cows == "pasture" and (weather == "rainy" or time_of_the_day == "night") :  
        return "take cows to cowshed"
    elif cow_milking_status == True and location_of_the_cows == "cowshed":
            return "milk cows"
    elif cow_milking_status == True and location_of_the_cows == "pasture" :
            return action_1
    elif slurry_tank== True and location_of_the_cows == "cowshed" and weather != "sunny" and weather != "windy":
         return "fertilize pasture"
    elif slurry_tank == True and location_of_the_cows == "pasture" and weather != "sunny" and weather != "windy":
         return action_2
    elif grass_status == True and season == "spring" and weather == "sunny" and location_of_the_cows != "pasture":
         return "mow grass"
    elif grass_status == True and season == "spring" and weather == "sunny" and location_of_the_cows != "cowshed":
            return action_3
    else :
       return "wait"
    
if __name__ == "__main__":
    farm_action('rainy', 'night', False, 'cowshed', 'winter', True, True)
    farm_action('rainy', 'night', False, 'cowshed', 'winter', False, True)
    farm_action('windy', 'night', True, 'cowshed', 'winter', True, True)
    print(farm_action('sunny', 'day', True, 'pasture', 'spring', False, True))