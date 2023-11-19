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
- `GET /items/{type}/` : retrieve the list of items of the exact type
- `GET /items/{type}/random/` : return one random item among the given type

{type} parameter may be string, one of the list from  `GET /items/types/`