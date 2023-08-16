# Do not modify these lines
__winc_id__ = '49bce82ef9cc475ca3146ee15b0259d0'
__human_name__ = 'functions'

def greet(name):
    greeting = "Hello, " + name + "!"
    return greeting

def add(num1, num2, num3):
    sum = num1 + num2 + num3
    return sum

def positive(num):
    is_positive = num > 0
    return is_positive 

def negative(num):
    is_negative = num < 0
    return is_negative

if __name__ == "__main__":
    greet("Bob")
    add(5,3,2)
    positive(0)
    negative(-50)