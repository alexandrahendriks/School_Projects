# Do not modify these lines
__winc_id__ = '78029e0e504a49e5b16482a7a23af58c'
__human_name__ = 'modules'

# Zen of Python
import this

# Make python wait
def wait(seconds):
    import time
    time.sleep(seconds)
    return

# Sine of float
def my_sin(float):
    import math
    sin = math.sin(float)
    return sin

# Returning the current date
def iso_now():
    from datetime import datetime
    current_date = datetime.now().isoformat()
    return current_date[:-10]

def platform():
    import sys
    plat = sys.platform
    return plat

# Greeting
def supergreeting_wrapper(name):
    import greet
    return(greet.supergreeting(name))

if __name__ == "__main__":
    iso_now()
    platform()
