from helpers import random_koala_fact

__winc_id__ = "c0dc6e00dfac46aab88296601c32669f"
__human_name__ = "while"

# Return a number of unique koala facts in a list
def unique_koala_facts(number):
    num = number
    count = 0
    facts=[]
    while len(facts) <= num and  count < 1000:
        count += 1
        random = random_koala_fact()
        if random not in facts:
            facts.append(random)
        if len(facts) == num:
            break  
        count += 1           
    return facts  
 
# Count how many times joeys is mentioned     
def num_joey_facts():
    marsupials = "joey"
    joey_facts = []
    count = 0
    i = 0
    while i < 1000:
        facts = random_koala_fact()
        if marsupials in facts and facts not in joey_facts:
            joey_facts.append(facts)
            count += 1
        else:
            i += 1     
    return len(joey_facts)       

# Return the weight of a koala in kg as an integer.
def koala_weight():
    count = 0
    i = 0
    kg = []
    while i < 50:
        fact = random_koala_fact()
        if "kg" in fact:
            kg.append(fact)
            kg_num = fact.find("kg")
            weight = (fact[(kg_num-2): kg_num]) 
        if count == 50:
            break    
        count += 1 
    print(kg)
    print(weight)
    return weight


if __name__ == "__main__":
    print(random_koala_fact())
    unique_koala_facts(10)
    num_joey_facts()
    koala_weight()
