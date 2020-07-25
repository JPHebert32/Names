import numpy as np
import pandas as pd
from pandas.io.json import json_normalize
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, MetaData, Table, Column, func
from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine('postgresql://postgres:JPH401@mc@localhost:5432/Names_DB')

male_year_table = pd.read_sql("select year_of_birth.year, year_of_birth.name, year_of_birth.sex, year_of_birth.count From public.year_of_birth WHERE year_of_birth.sex = 'M'", engine, index_col=None)
#print(male_year_table)

female_year_table = pd.read_sql("select year_of_birth.year, year_of_birth.name, year_of_birth.sex, year_of_birth.count From public.year_of_birth WHERE year_of_birth.sex = 'F'", engine, index_col=None)
#print(female_year_table)

#al_table = pd.read_sql("SELECT state_names.year,state_names.name, state_name.sex, state_name.count, state_name.state FROM public.state_name WHERE state_name.state = 'AL'",engine, index_col=None)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
Base.classes.keys()
# Save references to each table
yob = Base.classes.year_of_birth
state_name = Base.classes.state_names
#################################################
# Flask Setup Weather app
#################################################
app = Flask(__name__)
# Create our session (link) from Python to the DB
session = Session(engine)
# Design a query to retrieve data from nat_names Table in Names_DB

session.close()
#################################################
# Flask Routes
#################################################
@app.route("/")
def names():
    """List all available api routes."""
    return (f"Welcome to United States Name API<br/>"
            f"-----------------------------------------------<br/>"
            f"List of availible routes:<br/>"
            f"/api/v1.0/years-male<br/>"
            f"/api/v1.0/years-female<br/>"
            f"/api/v1.0/AL<br/>"
            f"/api/v1.0/AK<br/>"
            f"/api/v1.0/AZ<br/>"
            f"/api/v1.0/AR<br/>"
            )

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

@app.route("/api/v1.0/years-male")
def years_male():
    return(male_year_table.to_json(orient="records"))

@app.route("/api/v1.0/years-female")
def years_female():
    return(female_year_table.to_json(orient="records"))

if __name__ == '__main__':
    app.run(debug=True)
