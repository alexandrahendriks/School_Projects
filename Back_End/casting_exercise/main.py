# Do not modify these lines
__winc_id__ = '62311a1767294e058dc13c953e8690a4'
__human_name__ = 'casting'

#Part 1
leek_price = 2
leek = "Leek is " + str(leek_price) + " euro per kilo."

print(leek)

#Part 2
leek_order = "leek 4"
place = (leek_order.find(str(4)))
amount = leek_order[5:]
#print(amount)
order = int(amount) * leek_price
print(order)

#Part 3
broccoli_per_kilo = 2.34
broccoli_order = 1.6

total_broccoli_price = broccoli_order * broccoli_per_kilo

result = str(broccoli_order)+"kg broccoli costs " + str(round(total_broccoli_price, 2)) + "e"
print(result)