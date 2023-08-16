# Do not modify these lines
__winc_id__ = '04da020dedb24d42adf41382a231b1ed'
__human_name__ = 'classes'

class Player():
    def __init__(self, name, speed, endurance, accuracy):
        if (speed and endurance and accuracy < 0) or (speed and endurance and accuracy > 1):
            raise ValueError()
        self.name = name
        self.speed = speed
        self.endurance = endurance
        self.accuracy = accuracy

    def introduce(self):
        return (f"Hello everyone, my name is {self.name}.")
    
    def strength(self):
        attributes = [self.speed, self.endurance, self.accuracy]
        name_of_the_attributes = ["speed", "endurance", "accuracy"]
        max_attribute = max(attributes)
        for a, b in zip(name_of_the_attributes, attributes):
            if ((self.endurance or self.accuracy)in attributes) == self.speed in attributes:
                return (a, b)
            elif (self.accuracy in attributes) == self.endurance in attributes:
                return (a, b)
            else:
                index_of = attributes.index(max_attribute)
                return (name_of_the_attributes[index_of], max_attribute)
            
class Commentator():
    def __init__(self, name):
        self.name = name

    def sum_player(self, player):
        return (player.speed + player.accuracy + player.endurance) 
    
    def compare_players(self, player1, player2, strength):
        strength_player1 = getattr(player1, strength)
        strength_player2 = getattr(player2, strength)
        if strength_player1 > strength_player2:
            return player1.name
        elif strength_player2 > strength_player1:
            return player2.name
        elif strength_player1 == strength_player2:
            highest_strength1 = player1.strength()
            highest_strength2 = player2.strength()
            if highest_strength1[1] > highest_strength2[1]:
                return player1.name
            elif highest_strength2[1] > highest_strength1[1]:
                return player2.name
            elif highest_strength1[1] == highest_strength2[1]:
                sum_strength1 = self.sum_player(player1)
                sum_strength2 = self.sum_player(player2)
                if sum_strength1 > sum_strength2:
                    return player1.name
                elif sum_strength2 > sum_strength1:
                    return player2.name
                elif sum_strength1 == sum_strength2:
                    return ("These two players might as well be twins!")
