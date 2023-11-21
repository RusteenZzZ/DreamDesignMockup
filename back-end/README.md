# DreamDesign Backend

This backend uses Python Django framework.

I recommend to use a virtual environment : 
1. Create it with the command : `python -m venv venv`. 
2. Activate with: `source venv/bin/activate` (unix) or `venv\Scripts\activate` (windows)
3. Install requirements with pip : `pip install -r requirements.txt`

Note: If you add a new requirement, it is very important to add it to the requirements, do so with: `pip freeze > requirements.txt`

To run the app the first time, when django installed :

```
cd dreamdesign
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

`python manage.py makemigrations` and `python manage.py migrate` must be executed after each changes in the data model. Then just execute  `python manage.py runserver` to run the server.

To add a new application : `django-admin startapp app_name`

## Endpoints

Here are the three API endpoints implemented (only GET requests available) :
- `GET /items/types/` : retrieve the list of all possible types of items (bed, window, etc.)
- `GET /items/random/` : return a list of random items of the provided types, respecting the provided maximal total price. The body must contain :
```js
{
	typesList: List<type>,
	maxTotalPrice: Float,
}
```

{type} parameter may be string, one of the list from  `GET /items/types/`

One Item is an object containing this fields :
```js
{
	id: String, 
	name: String,
	measures: String,
	imageUrl: String,
	productUrl: String,
	variantsList: List<Item>,
	price: Float,
	type: String,
	colorName: String,
	colorHex: String,
}
```

For example : 
```js
{
	id: '60282186', 
	name: 'LACK',
	measures: '11 3/4x74 3/4 "',
	imageUrl: 'https://www.ikea.com/us/en/images/products/lack-wall-shelf-unit-white__0246565_pe385541_s5.jpg',
	productUrl: 'https://www.ikea.com/us/en/p/lack-wall-shelf-unit-white-60282186/',
	variantsList: {'numberOfVariants': 2, 'variants': [{variant1}, {variant2}] },
	price: 99.99,
	type: 'Shelf units & cube storage',
	colorName: 'white',
	colorHex: 'ffffff',
}
```
