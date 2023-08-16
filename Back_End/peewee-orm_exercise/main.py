import models
from peewee import *
from typing import List
import peewee

__winc_id__ = "286787689e9849969c326ee41d8c53c4"
__human_name__ = "Peewee ORM"

def cheapest_dish() -> models.Dish:
    """You want ot get food on a budget
    Query the database to retrieve the cheapest dish available
    """
    return models.Dish.select().order_by(models.Dish.price_in_cents).first()

def vegetarian_dishes() -> List[models.Dish]:
    """You'd like to know what vegetarian dishes are available

    Query the database to return a list of dishes that contain only
    vegetarian ingredients.
    """
    return [
        dish
        for dish in models.Dish.select()
        if all([i.is_vegetarian for i in dish.ingredients])
    ]

def best_average_rating() -> models.Restaurant:
    """You want to know what restaurant is best

    Query the database to retrieve the restaurant that has the highest
    rating on average
    """
    return(
        models.Restaurant.select(models.Restaurant, peewee.fn.AVG(models.Rating).alias('avarage'))
        .join(models.Rating)
        .group_by(models.Restaurant)
        .order_by(peewee.fn.AVG(models.Rating).desc()).first())
    
def add_rating_to_restaurant() -> None:
    """After visiting a restaurant, you want to leave a rating

    Select the first restaurant in the dataset and add a rating
    """
    # first restaurant
    restaurant = models.Restaurant.get_by_id(1)
    models.Rating.create(restaurant=restaurant, rating=6, comment="The food was very nice.")


def dinner_date_possible() -> List[models.Restaurant]:
    """You have asked someone out on a dinner date, but where to go?

    You want to eat at around 19:00 and your date is vegan.
    Query a list of restaurants that account for these constraints.
    """
    restaurants = (
        models.Restaurant.select()
        .where(models.Restaurant.opening_time <= "19:00")
        .where(models.Restaurant.closing_time >= "19:00")
    )
    return [
        restaurant
        for restaurant in restaurants
        if any(
            [
                all([i.is_vegan for i in dish.ingredients])
                for dish in restaurant.dish_set.select()
            ]
        )
    ]

def add_dish_to_menu() -> models.Dish:
    """You have created a new dish for your restaurant and want to add it to the menu

    The dish you create must at the very least contain 'cheese'.
    You do not know which ingredients are in the database, but you must not
    create ingredients that already exist in the database. You may create
    new ingredients however.
    Return your newly created dish
    """
    restaurant = models.Restaurant.get_by_id(4)

    cheese, created = models.Ingredient.get_or_create(
        name = "cheese",
        is_vegetarian = True,
        is_vegan = False,
        is_glutenfree = True,
    )

    tomato, created = models.Ingredient.get_or_create(
        name = "tomato",
        is_vegetarian = True,
        is_vegan = True,
        is_glutenfree = True,
    )

    pasta, created = models.Ingredient.get_or_create(
        name = "pasta",
        is_vegetarian = True,
        is_vegan = False,
        is_glutenfree = False,
    )

    beef, created = models.Ingredient.get_or_create(
        name= "beef",
        is_vegetarian = False,
        is_vegan = False,
        is_glutenfree = True,
    )

    spagetti = models.Dish.create(name= "Spagetti", served_at = restaurant, price_in_cents = 1200)
    spagetti.ingredients.add([cheese, tomato, pasta, beef])

    return spagetti
   
